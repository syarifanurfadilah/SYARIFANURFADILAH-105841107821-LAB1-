// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'

// const { View } = require("react-native")

// // const App = () => {
// //   return (
// //    <View style ={{
// //     flex:1,
// //     }}>
// //       <View style ={{flex: 1, flexDirection: "row"}}>
// //         <View style={{flex:1, backgroundColor:'yellow'}}></View>
// //         <View style={{flex:1, backgroundColor:'green'}}></View>


// //       </View> 
// //       <View style={{flex:1, backgroundColor:'red'}}></View>
// //       <View style={{flex:1, backgroundColor:'blue'}}></View>
      
        
        
        

// //    </View>
// //   )
// // }
// // export default App

// import { StyleSheet,Text, View } from "react-native";
// import React from 'react';

// const App = () => {
//   return (
//     <View style={{flex : 1}}>
//      <View style={{
      
//       flex: 1, 
//       alignItems: 'flex-end', //BARIS
//       justifyContent: 'center', //KOLOM
//       flexDirection: 'row',
//       marginBottom: 100,
//       justifyContent: "space-evenly"

      

//     }}>
//       <View style ={{
//         backgroundColor: 'red', width: 180, height: 80,
//         justifyContent: 'center',
//         borderRadius: 10,
         
      
//       }}>
        
//         <Text style= {{
//           fontSize: 30, color: 'white',
//           textAlign: 'center',
//           fontWeight: 'bold',
//         }}>

//           login
//            </Text>
//       </View>

//       <View style ={{
//         backgroundColor: 'blue', width: 180, height: 80,
//         justifyContent: 'center',
//         borderRadius: 10,
        
//       }}>
        
//         <Text style= {{
//           fontSize: 30, color: 'white',
//           textAlign: 'center',
//           fontWeight: 'bold',
//         }}>

//           Register
//            </Text>
//       </View>
//      </View>
//      </View>
//   );
// }
// export default App


// import React from "react"
// import {StyleSheet,Text, Image, View } from "react-native"
// import ButtonCostum from "./components/button/button";


// const App = () => {
    
//   return (
//     <View style={{flex:1}}>
//         <View style={{
//             flex:1,
//             alignItems:'center',
//             justifyContent:'center'

//         }}>
//             <Text style={{
//                 fontSize:35,
//                 fontWeight:'bold'

//             }}>welcome</Text>
//     </View>

//     <View style={{
//         flex:1,
//         alignItems:'center',
//         justifyContent:'center',
//     }}>
//         <Image source={require('./shopeelogo.png')} style={{
//             width:250,
//             height:250,
//             borderRadius: 10,
//             justifyContent:'center',
    
//         }}/>
        
//     </View>

//     <View style={{
//         flex:1,
//         alignItems:'center',
//         justifyContent:'center',
//         flexDirection:'row',
//         justifyContent:'space-evenly'
//     }}>
//         <ButtonCostum color='red' text='masuk'/>
//         <ButtonCostum color='black' text='daftar'/>
//         </View>
//         </View>
//   )
// };


// // const StyleS = StyleSheet.create({
// //     image: {
// //         width:300,
// //         height:300,
// //         resizeMode:'contain',
// //     },
// // });
// export default App
  
// import { Text,View,TextInput } from "react-native";
// import React from "react";

// const App =() =>{
// const TextInputCustom =({name, color})=>{
//     return(
//          <TextInput
//             placeholder={`masukan ${name}`}
//             style={{
//                 height:40,
//                 width:200,
//                 borderColor:'tomato',
//                 borderWidth: 1,
//                 borderRadius: 10,
//                 margin : 10,
//                 padding:10,
//                 color : color,
//                 paddingLeft:10
//             }}
//         />
//     )
// }
// return(
//     <View style={{
//         flex: 1,
//         justifyContent:'center',
//         alignItems:'center',
//     }}>
//         <Text Style={{fontsize:20, fontweigth:'bold'}}>
//         from login
//         </Text>
//         <TextInputCustom name="Username"color="black"></TextInputCustom>
//         <TextInputCustom name="Email"color="black"></TextInputCustom>
//         <TextInputCustom name="password"color="black"></TextInputCustom>
//     </View>
// )
// }
// export default App

import {Text,View,Image,} from 'react-native'
import React from 'react'
import TextInputCustom from "./components/TextInputan/TextInputan"  
import ButtonCostum from './components/Button/Button'// abaikan garis merah ini, ga jelas emang   

const App=() =>{
    return(
        <View style={{flex:1}}>
            <View style = {{
                flexbox:1,
                justifyContent:'flex-end',
                justifyContent:'space-between',
                height:140
            }}>
                <Text style={{
                    fontWeight:'bold',
                    marginLeft:'40'
                }}>
                    11:06
                </Text>
                <Text style={{
                    fontSize:30,
                    fontWeight:'bold',
                    marginLeft:25
                }}>
                    login
                </Text>
            </View>

            <View style={{
                flex:1,
                flexDirection:'column',
                alignItems:'center',
                marginTop:80,
            }}>
                <TextInputCustom name="Nama"/>
                <TextInputCustom name="Email"/>
                <TextInputCustom name="Password"/>
                <Text style={{
                    fontSize:14,
                    fontWeight:'bold',
                    marginTop:10,
                    marginBottom:30,
                    textAlign:'right',
                    marginLeft:175,
                }}>
                    Already have an account?
                </Text>
                <ButtonCostum text ="login" color='red'borderRadius={30}/>
            </View>
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent:'flex-start',
            }}>
                <Text style={{
                    fontWeight:'bold',
                    marginTop:100
                }}>
                    Or sign up with social account
                </Text>
                <View style={{
                    flex:1,
                    flexDirection:'row',
                    justifyContent:'space-evenly',
                    marginTop:20,
                }}>
                    <View style={{
                        backgroundColor:'#eeeeee',
                        borderRadius:10,
                        justifyContent:'center',
                        width:92,
                        height:64,
                        alignItems:'center',
                    }}>
                        <Image source={require('./google.png')}
                        style={{width:50, height:50, alignItems:'center'}}/>
                    </View>
                    <View style={{
                        backgroundColor:'#eeeeee',
                        borderRadius:10,
                        justifyContent:'center',
                        width:92,
                        height:64,
                        alignItems:'center'
                    }}>
                        <Image source={require('./facebook.png')}
                        style={{width:50, height:50, alignItems:'center'}}/>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default App