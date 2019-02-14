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


export default class RegisterScene extends React.Component {

	userName= '';
	emailAddress= '';
	password='';
	confirmPassword='';

	/**when value in inputBox changed, save changed value
	*/
	onUserNameChanged = (newUserName) => {
		console.log(newUserName);
		this.userName = newUserName;
	};

	onEmailAddressChanged = (newEmailAddress) => {
		console.log(newEmailAddress);
		this.emailAddress = newEmailAddress;
	};

	onPasswordChanged = (newPassword) => {
		console.log(newPassword);
		this.password = newPassword;
	};

	onConfirmPasswordChanged = (newConfirmPassword) => {
		console.log(newConfirmPassword);
		this.confirmPassword = newConfirmPassword;
	};
	// click background to let input box lose fources

	/*
	blurTextInput =() => {
		this.refs.userName.blur();
		this.refs.password.blur();
		this.refs.confirmPassword.blur();
	}
	*/

	//regist button, check whether regist successful based on input data
	signUp =() =>{
		if(this.userName != '' && this.password != ''){
			if(this.userName != 'Admin'){
				if(this.password === this.confirmPassword){
					Alert.alert("Register Successful,Back to Login");
					const {navigate} = this.props.navigation;
					navigate('LogInScreen');
				}else{
					Alert.alert("Two password cannot match");
				}
			}else{
				Alert.alert("Please dont use Admin as userName");
			}
		}else{
			Alert.alert("You missed something!");
		}
	};


	confirm =() =>{
		const{navigate} = this.props.navigation;
		navigate('LoginScreen');
	};


	render(){
		return (
			<TouchableOpacity	//using touchable opacity as background
				activeOpacity={1.0}	//when clicked change active
				style={styles.signUpContainer}>
				<KeyboardAvoidingView behavior = "padding" style = {styles.signUpContainer}>
				<View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/images/Octocat.png')}/>
                    <Text style={styles.title}>Uni.</Text>
                </View>
				<View
					style={styles.inputBox}>
					<TextInput
						ref = "userName"
						onChangeText={this.onUserNameChanged} //add value changing event
						style={styles.signUpInput}
						placeholder={'User ID'}
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
						ref = "emailAddress"
						onChangeText={this.onEmailAddressChanged} //add value changing event
						style={styles.signUpInput}
						keyboardType="email-address"
						placeholder={'Email Address'}
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
						ref = "password"
						onChangeText={this.onPasswordChanged} //add value changing event
						style={styles.signUpInput}
						secureTextEntry={true}
						placeholderTextColor ={'#ccc'}
						placeholder={'Password'}
						returnKeyType="next"
						autoCapitalize='none' //cancel first letter capital
						underlineColorAndroid={'transparent'} //cancel under line
						
						
					/>
				</View>
				<View
					style={styles.inputBox}>
					<TextInput
						ref = "confirmPassword"
						onChangeText={this.onConfirmPasswordChanged} //add value changing event
						style={styles.signUpInput}
						placeholder={'Enter Password again'}
						placeholderTextColor ={'#ccc'}
						secureTextEntry={true}
						returnKeyType="join"
						autoCapitalize='none' //cancel first letter capital
						underlineColorAndroid={'transparent'} //cancel under line
						
						
					/>
				</View>
				</KeyboardAvoidingView>
				<TouchableOpacity
					onPress={this.signUp}
					style={styles.button}>
					<Text
						style={styles.btText}>Sign Up</Text>
				</TouchableOpacity>
				<Text style={styles.clickableText} onPress={this.confirm}>Already have a account?? Login in!</Text>
				
			</TouchableOpacity>
		);
	}
}
