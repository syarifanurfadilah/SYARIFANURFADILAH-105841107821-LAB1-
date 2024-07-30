import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const stack = createStackNavigator();
function LoginScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <TextInput placeholder="Nama" style={styles.input}/>
            <TextInput placeholder="Email" style={styles.input}/>
            <TextInput placeholder="Password" secureTextEntry style={styles.input}/>
            <Button title="Siap Punya Akun?" onPress={() => navigation.navigate('SignIn')}/>
        </View>
    );
}

function SignInScreen({ navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sign In</Text>
            <TextInput placeholder="Email" style={styles.input}/>
            <TextInput placeholder="Password" secureTextEntry style={styles.input}/>
            <Button title="Sign In" onPress={() => alert('Signed In')}/>
            <Button title="Lupa Password?" onPress={() => navigation.navigate('ForgotPassword')}/>
        </View>
    );
}

function ForgotPasswordScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Lupa password</Text>
            <TextInput placeholder="Masukkan Email" style={styles.input}/>
            <Button title="Reset Password" onPress={() => alert('Password Reset Link Sent')}/>
        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="Login">
                <stack.Screen name="Login" component={LoginScreen}/>
                <stack.Screen name="SignIn" component={SignInScreen}/>
                <stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
            </stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding : 16,
        backgroundColor: '#ffc0cb', // warna pink
    },
    header: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input:{
        height: 40,
        borderColor: '#3c784d',// warna hijau tua
        borderWidth: 1,
        borderRadius: 14,
        marginBottom: 12,
        paddingHorizontal: 8,
        backgroundColor: ' #fff',


    },
});

