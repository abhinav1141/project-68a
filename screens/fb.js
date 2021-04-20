import * as React from "react"
import {Text,View,TouchableOpacity} from "react-native"

export default class FbScreen extends React.Component{
    render(){
        return(
            <View style={{ flex: 1 ,backgroundColor:"yellow"}}>
                <Text style={{backgroundColor:"red",marginTop:0,fontSize:30,alignSelf:"center"}}>BUZZ APP</Text>
                <Text style={{color:"blue",fontSize:30,alignSelf:"center",marginTop:250}}>FACEBOOK</Text>
                <a href="https://www.facebook.com/">FACEBOOK</a>
                 </View>
        
        )
    }
}