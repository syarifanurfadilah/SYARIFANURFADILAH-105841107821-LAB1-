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
                    fontSize:45,
                    fontWeight:'bold',
                    marginLeft:20,
                }}>
                    {'<'}
                </Text>
                <Text style={{
                    fontSize:30,
                    fontWeight:'bold',
                    marginLeft:25
                }}>
                    Forgot Password
                </Text>
            </View>

            <View style={{
                flex:1,
                flexDirection:'column',
                alignItems:'center',
                marginTop:80,
            }}>
                <Text style={{
                    fontSize:20,
                    marginLeft:25,
                    marginRight:25,
                    marginBottom:30,

                }}>Please, enter your email address. You will receive a link to create a new password via email.a</Text>
                <TextInputCustom name="Email"/>
                <Text style={{
                    marginBottom:30,
                }}>
                </Text>
                <ButtonCostum text ="SEND" color='red'borderRadius={30}/>
            </View>
            
        </View>
    )
}
export default App