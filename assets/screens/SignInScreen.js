import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={() => { /* Add your sign-in logic here */ }} />
      <Button title="Lupa Password?" onPress={() => navigation.navigate('ForgotPassword')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const Stack = createStackNavigator();

// function LoginScreen({ navigation }) {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>Login</Text>
//             <TextInput placeholder="Nama" style={styles.input} />
//             <TextInput placeholder="Email" style={styles.input} />
//             <TextInput placeholder="Password" secureTextEntry style={styles.input} />
//             <Button title="Siap Punya Akun?" onPress={() => navigation.navigate('SignIn')} />
//         </View>
//     );
// }

// function SignInScreen({ navigation }) {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>Sign In</Text>
//             <TextInput placeholder="Email" style={styles.input} />
//             <TextInput placeholder="Password" secureTextEntry style={styles.input} />
//             <Button title="Sign In" onPress={() => alert('Signed In')} />
//             <Button title="Lupa Password?" onPress={() => navigation.navigate('ForgotPassword')} />
//         </View>
//     );
// }

// function ForgotPasswordScreen() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>Lupa Password</Text>
//             <TextInput placeholder="Masukkan Email" style={styles.input} />
//             <Button title="Reset Password" onPress={() => alert('Password Reset Link Sent')} />
//         </View>
//     );
// }

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Login">
//                 <Stack.Screen name="Login" component={LoginScreen} />
//                 <Stack.Screen name="SignIn" component={SignInScreen} />
//                 <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         padding: 16,
//         backgroundColor: '#f0f0f0',
//     },
//     header: {
//         fontSize: 24,
//         marginBottom: 16,
//         textAlign: 'center',
//     },
//     input: {
//         height: 40,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         borderRadius: 4,
//         marginBottom: 12,
//         paddingHorizontal: 8,
//         backgroundColor: '#fff',
//     },
// });
