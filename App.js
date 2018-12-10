import React from 'react';
import Navigator from './src/AppNavigator'
import LoginForm from './src/LoginForm';
import {connect,Provider} from 'react-redux'; 
import {store} from './src/store'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isUserLoggedIn:false, 
      userName:'',
      password:'',
    }
  }
  changeUserName=(value)=>{
    this.setState({userName:value})
  }
  changeUserPassword=(value)=>{
    this.setState({password:value})
  }
  changeUserState=()=>{
    if(this.state.password== "Admin" && this.state.userName == "Admin")
    {
      this.setState({isUserLoggedIn:true});
    }
    else 
    {
        alert("failure")
    }
  }
  render() {
    if(this.state.isUserLoggedIn)
    return (<Navigator />)
    else 
    return(<LoginForm changeUserState={this.changeUserState} changeUserName={this.changeUserName} changeUserPassword={this.changeUserPassword} />)
  }
}
const mapStateToProps=(state)=>{
  isUserLoggedIn: state.isUserLoggedIn
}
const AppContainer=connect(mapStateToProps)

export default class  ReduxApp extends React.Component{
  render(){
    return(
      <Provider store={store}>
      <AppContainer />
      </Provider>
    )
  }
}