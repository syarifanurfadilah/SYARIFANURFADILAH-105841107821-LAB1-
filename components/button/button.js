
import React from "react"
import {StyleSheet,Text, Image, View } from "react-native"
const ButtonCostum= ({color,text}) => {
    return (
<View style={{
    backgroundColor: color,
    width: 100,
    height: 50,
    borderRadius: 15,
    justifyContent:'center',

  }}>
    <Text style={{
      textAlign:'center',
      fontSize:30,
      color:'white',
      fontWeight:'bold',
    }}>{text}</Text>
    </View>
)
};

export default ButtonCostum;