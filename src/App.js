import React, { Component } from 'react';
import {BrowserRouter, Route, Switch,Redirect} from "react-router-dom"
import './App.css';
import { firebase } from "./firebase";
import  Header from "./JS/header"
import  Login from "./JS/Login"
import  SignUp from "./JS/signUp"
import Container from './JS/container';
 
const Note =(props)=>{
   if (props.status) {
        return  <Route  path ="/note" component ={Container} />
   } else {
       return <Redirect to="/Login"/>
   }
}
const AuthfalseRoutes =(props)=>{
    if (props.status ===false) {
         return (
             <div>
              <Route  path ="/SignUP" component ={SignUp} />
              <Route  path ="/Login" component ={Login} />
            </div>
            )
    } else {
        return <Redirect to="/note"/>
    }
 }
class App extends Component {
   state ={
       Authstatus:true
   }
     componentDidMount(){
          firebase.auth().onAuthStateChanged(user=>{
              this.setState({
                Authstatus : user ?  true :false
              })
          })     }
   render() {
    
    return (
        <div>
           <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                          <AuthfalseRoutes status ={this.state.Authstatus}/>
                          <Note status ={this.state.Authstatus}/>
                    </Switch>
                      
                </div>
           </BrowserRouter>
        </div>
    );
  }
}

export default App;
