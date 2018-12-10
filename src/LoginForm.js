import React,{Component} from 'react'
import {KeyboardAvoidingView ,Image} from 'react-native'
import Password from './Password';
import LoginBtn from './LoginBtn';
import UserName from './UserName'

export default class LoginForm  extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <KeyboardAvoidingView style={{flex:1,justifyContent:'center',alignItems:"center"}} behavior="padding" enabled>
            <Image source={require("./resources/geek.jpg")} style={{height:300,width:300}} />
                <UserName ParentUserNameChanged={this.props.changeUserName}/>
                <Password ParentPasswordChanged={this.props.changeUserPassword}/>
                <LoginBtn changeUserState={this.props.changeUserState}/>
            </KeyboardAvoidingView>
            )
    }
}