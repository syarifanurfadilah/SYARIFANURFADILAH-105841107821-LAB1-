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


import React from "react"
import {StyleSheet,Text, Image, View } from "react-native"
import ButtonCostum from "./components/button/button";


const App = () => {
    
  return (
    <View style={{flex:1}}>
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'

        }}>
            <Text style={{
                fontSize:35,
                fontWeight:'bold'

            }}>welcome</Text>
    </View>

    <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }}>
        <Image source={require('./shopeelogo.png')} style={{
            width:250,
            height:250,
            borderRadius: 10,
            justifyContent:'center',
    
        }}/>
        
    </View>

    <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        justifyContent:'space-evenly'
    }}>
        <ButtonCostum color='red' text='masuk'/>
        <ButtonCostum color='black' text='daftar'/>
        </View>
        </View>
  )
};


// const StyleS = StyleSheet.create({
//     image: {
//         width:300,
//         height:300,
//         resizeMode:'contain',
//     },
// });
export default App
  
     