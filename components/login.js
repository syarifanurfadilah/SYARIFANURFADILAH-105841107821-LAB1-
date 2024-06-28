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
                    login
                </Text>
            </View>

            <View style={{
                flex:1,
                flexDirection:'column',
                alignItems:'center',
                marginTop:80,
            }}>
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