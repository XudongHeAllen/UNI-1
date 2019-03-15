import React, {Component} from 'react';
import{
	Image,
	KeyboardAvoidingView,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	View,
	Text,
	Alert,
	Button
}from 'react-native';
import styles from '../assets/Styles.js';

export default class NewActivityScreen extends React.Component {

	name= '';
	location= '';
	time='';
	numberOfPeople='';
	description = '';

	url = "localhost:"

	/**when value in inputBox changed, save changed value
	*/
	onNameChanged = (newName) => {
		console.log(newName);
		this.name = newName;
	};

	onLocationChanged = (newLocation) => {
		console.log(newLocation);
		this.location = newLocation;
	};

	onTimeChanged = (newTime) => {
		console.log(newTime);
		this.time = newTime;
	};

	onNumberOfPeopleChanged = (newNumberOfPeople) => {
		console.log(newNumberOfPeople);
		this.numberOfPeople = newNumberOfPeople;
	};

	onDescriptionChanged = (newDescription) => {
		console.log(newDescription);
		this.description = newDescription;
	};
	// click background to let input box lose fources

	/*
	blurTextInput =() => {
		this.refs.userName.blur();
		this.refs.password.blur();
		this.refs.confirmPassword.blur();
	}
	*/

//Create button, check will write the data into database(not imple yet)
	createAct =() =>{

		if (this.name != '' && this.location != '' && this.time != ''){
			if (this.numberOfPeople == '') {
				this.numberOfPeople = 10;
			}
			if (this.description == '') {
				this.description = "default"
			}
			//send  message
			Alert.alert("Create Activity Success!");
			//***************add event here*****************
			this.sendRequest();
			//need go back to acts menu
		}
		else {
			Alert.alert("You missed something!");			
		}
	};

	sendRequest = (enableCallback) => {
		Alert.alert("Create Activity Success!");
		fetch('http://ec2-99-79-39-110.ca-central-1.compute.amazonaws.com:8000/activities/activity/create',{
			method: 'POST',
			headers: {
				'Accept': 'application/json',
			},
			body: JSON.stringify({
				attendence_list: '',
				category: 'sports',
				activity_datetime: "2019-03-05 01:11:49.334",
				max_attendance:6,
				description: "This is where you should be",
				title: "Where it's at"
			})
		})
		.then((response) => response.json())
		.then((response) => {
      		console.log(response);
    	})
    	.catch((error) => {
      		console.error(error);
    	});
	};


	render(){
		return (
			<TouchableOpacity	//using touchable opacity as background
				activeOpacity={1.0}	//when clicked change active 
				//onPress={this.blurTextInput} //add click event
				style={styles.signUpContainer}>
				<KeyboardAvoidingView behavior = "padding" style = {styles.signUpContainer}>
				<View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/images/Octocat.png')}/>
                    <Text style={styles.title}>Create Activity</Text>
                </View>
				<View
					style={styles.inputBox}>
					<TextInput
						ref = "name"
						onChangeText={this.onNameChanged} //add value changing event
						style={styles.signUpInput}
						placeholder={'Name of Activity'}
						placeholderTextColor ={'#ccc'}
						clearButtonMode="while-editing"
						returnKeyType="next"
						autoCapitalize='none' //cancel first letter capital
						autoCorrect={false}
						underlineColorAndroid={'transparent'} //cancel under line
					/>
				</View>
				<View
					style={styles.inputBox}>
					<TextInput
						ref = "location"
						onChangeText={this.onLocationChanged} //add value changing event
						style={styles.signUpInput}
						placeholder={'Location of Activity'}
						placeholderTextColor ={'#ccc'}
						clearButtonMode="while-editing"
						returnKeyType="next"
						autoCapitalize='none' //cancel first letter capital
						autoCorrect={false}
						underlineColorAndroid={'transparent'} //cancel under line												
					/>
				</View>
				<View
					style={styles.inputBox}>
					<TextInput
						ref = "time"
						onChangeText={this.onTimeChanged} //add value changing event
						style={styles.signUpInput}
						placeholderTextColor ={'#ccc'}
						placeholder={'Time of Activity'}
						returnKeyType="next"
						autoCapitalize='none' //cancel first letter capital
						underlineColorAndroid={'transparent'} //cancel under line
					/>
				</View>
				<View
					style={styles.inputBox}>
					<TextInput
						ref = "numberOfPeople"
						onChangeText={this.onNumberOfPeopleChanged} //add value changing event
						style={styles.signUpInput}
						placeholder={'Number of People (Optional)'}
						placeholderTextColor ={'#ccc'}
						returnKeyType="next"
						autoCapitalize='none' //cancel first letter capital
						underlineColorAndroid={'transparent'} //cancel under line
					/>
				</View>
				<View
					style={styles.inputBox}>
					<TextInput
						ref = "description"
						onChangeText={this.onDescriptionChanged} //add value changing event
						style={styles.signUpInput}
						placeholder={'Description (Optional)'}
						placeholderTextColor ={'#ccc'}
						returnKeyType="next"
						autoCapitalize='none' //cancel first letter capital
						underlineColorAndroid={'transparent'} //cancel under line
					/>
				</View>


				</KeyboardAvoidingView>
				<TouchableOpacity
					onPress={this.createAct}
					style={styles.button}>
					<Text
						style={styles.btText}>Create Activity</Text>
				</TouchableOpacity>
				
			</TouchableOpacity>
		);
	}
}
