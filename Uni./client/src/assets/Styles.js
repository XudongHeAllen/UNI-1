import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    logInContainer: {
        flex: 1,
        backgroundColor: '#4db0f2',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 30
    },
    currActContainer: {
        flex: 1,
        backgroundColor: '#4db0f2',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    imageContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logInFormContainer: {
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginBottom: 10,
        color: '#FFFFFF',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    },
    clickableText: {
        color: '#FFF',
        textDecorationLine: 'underline',
        textAlign: 'center',
        paddingVertical: 15,
        fontSize: 20,
    }
});