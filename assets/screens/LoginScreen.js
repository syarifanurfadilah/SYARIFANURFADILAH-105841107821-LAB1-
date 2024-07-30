// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// export default function LoginScreen({ navigation }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Name</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={setName}
//         value={name}
//       />
//       <Text style={styles.label}>Email</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={setEmail}
//         value={email}
//       />
//       <Text style={styles.label}>Password</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={setPassword}
//         value={password}
//         secureTextEntry
//       />
//       <Button
//         title="Siap Punya Akun"
//         onPress={() => navigation.navigate('SignIn')}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   label: {
//     fontSize: 18,
//     marginVertical: 5,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//   },
// });
