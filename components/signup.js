// import { Text, View, Image } from 'react-native';
// import React from 'react';
// import TextInputCustom from "./components/TextInputan/TextInputan";  
// import ButtonCostum from './components/Button/Button'; // abaikan garis merah ini, ga jelas emang   

// const App = () => {
//     return (
//         <View style={{ flex: 1 }}>
//             <View style={{
//                 flex: 1,
//                 justifyContent: 'flex-end',
//                 height: 140,
//                 marginBottom: 20, // Menambahkan margin bawah untuk pemisahan
//             }}>
//                 <Text style={{
//                     fontFamily: 'Metropolis-Bold', // Ganti dengan nama font bold Anda
//                     marginLeft: 40,
//                     fontSize: 20, // Menambahkan ukuran font agar lebih terlihat
//                 }}>
//                     11:06
//                 </Text>
//                 <Text style={{
//                     fontSize: 30,
//                     fontFamily: 'Metropolis-Bold', // Ganti dengan nama font bold Anda
//                     marginLeft: 25,
//                 }}>
//                     Sign up
//                 </Text>
//             </View>

//             <View style={{
//                 flex: 1,
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 marginTop: 40,
//             }}>
//                 <TextInputCustom name="Nama" />
//                 <TextInputCustom name="Email" />
//                 <TextInputCustom name="Password" />
//                 <Text style={{
//                     fontSize: 14,
//                     fontFamily: 'Metropolis-Medium', // Ganti dengan nama font medium Anda
//                     marginTop: 10,
//                     marginBottom: 30,
//                     textAlign: 'right',
//                     marginLeft: 175,
//                     color: 'gray', // Warna lebih lembut
//                 }}>
//                     Already have an account?
//                 </Text>
//                 <ButtonCostum text="SIGN UP" color='red' borderRadius={30} />
//             </View>
//             <View style={{
//                 flex: 1,
//                 alignItems: 'center',
//                 justifyContent: 'flex-start',
//             }}>
//                 <Text style={{
//                     fontFamily: 'Metropolis-Bold', // Ganti dengan nama font bold Anda
//                     marginTop: 100,
//                     fontSize: 16, // Menambahkan ukuran font agar lebih terlihat
//                 }}>
//                     Or sign up with social account
//                 </Text>
//                 <View style={{
//                     flex: 1,
//                     flexDirection: 'row',
//                     justifyContent: 'space-evenly',
//                     marginTop: 20,
//                 }}>
//                     <View style={{
//                         backgroundColor: '#eeeeee',
//                         borderRadius: 10,
//                         justifyContent: 'center',
//                         width: 92,
//                         height: 64,
//                         alignItems: 'center',
//                     }}>
//                         <Image source={require('./google.png')}
//                             style={{ width: 50, height: 50, alignItems: 'center' }} />
//                     </View>
//                     <View style={{
//                         backgroundColor: '#eeeeee',
//                         borderRadius: 10,
//                         justifyContent: 'center',
//                         width: 92,
//                         height: 64,
//                         alignItems: 'center'
//                     }}>
//                         <Image source={require('./facebook.png')}
//                             style={{ width: 50, height: 50, alignItems: 'center' }} />
//                     </View>
//                 </View>
//             </View>
//         </View>
//     );
// }

// export default App;
