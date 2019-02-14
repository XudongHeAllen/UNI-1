import React, {Component} from 'react';
import{
	TouchableOpacity,
	StyleSheet,
	TextInput,
	View,
	Text,
	Alert,
	Button
}from 'react-native';


export default class RegisterScene extends Component{

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
	register =() =>{
		if(this.userName != '' && this.password !=''){
			if(this.userName != 'Admin'){
				if(this.password == this.confirmPassword){
					const {goBack} = this.props.navigation;
					Alert.alert("Regist success, back to login");
					//Alert.alert("Regist success, back to login",[{text: 'Verify', onPress: () => {goBack();}}]);
				}else{
					Alert.alert("Regist fail, two password dont match");
				}
			}else{
				Alert.alert("Regist fail, not what i want");
			}
		}else{
			Alert.alert("user name or password cannot be empty!");
		}
	};


	render(){
		return (
			<TouchableOpacity	//using touchable opacity as background
				activeOpacity={1.0}	//when clicked change active 
				onPress={this.blurTextInput} //add click event
				style={styles.logInContainer}>
				<View
					style={styles.inputBox}>
					<TextInput
						ref = "username"
						onChangeText={this.onUserNameChanged} //add value changing event
						style={styles.input}
						autoCapitalize='none' //cancel first letter capital
						underlineColorAndroid={'transparent'} //cancel under line
						placeholderTextColor ={'#ccc'}
						placeholder={'User ID'}
					/>
				</View>
				<View
					style={styles.inputBox}>
					<TextInput
						ref = "emailAddress"
						onChangeText={this.onEmailAddressChanged} //add value changing event
						style={styles.input}
						autoCapitalize='none' //cancel first letter capital
						underlineColorAndroid={'transparent'} //cancel under line
						placeholderTextColor ={'#ccc'}
						placeholder={'Email Address'}
					/>
				</View>
				<View
					style={styles.inputBox}>
					<TextInput
						ref = "password"
						onChangeText={this.onPasswordChanged} //add value changing event
						style={styles.input}
						secureTextEntry={true}
						autoCapitalize='none' //cancel first letter capital
						underlineColorAndroid={'transparent'} //cancel under line
						placeholderTextColor ={'#ccc'}
						placeholder={'Password'}
					/>
				</View>
				<View
					style={styles.inputBox}>
					<TextInput
						ref = "confirmPassword"
						onChangeText={this.onConfirmPasswordChanged} //add value changing event
						style={styles.input}
						secureTextEntry={true}
						autoCapitalize='none' //cancel first letter capital
						underlineColorAndroid={'transparent'} //cancel under line
						placeholderTextColor ={'#ccc'}
						placeholder={'Enter Password again'}
					/>
				</View>

				<TouchableOpacity
					onPress={this.register}
					style={styles.button}>
					<Text
						style={styles.btText}>Sign On</Text>
				</TouchableOpacity>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	logInContainer:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	input:{
		width:200,
		height:40,
		fontSize:20,
		color: '#fff',
	},
	inputBox:{
		flexDirection:'row',
		justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#66f',
        marginBottom: 8,
    },
    button:{
    	height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#66f',
        marginTop: 20,
    },
    btText:{
    	color: '#fff',
    	fontSize: 20,
    }
});