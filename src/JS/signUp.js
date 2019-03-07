import React  from   "react";
import {firebase,firebaseDB} from "../firebase";


const SignUP = (props)=>{
  let  Validdataarray =[] 
  let validdata ={};
   const userdata ={
       Email:{
           name :'email',
           valid :false,
           value:"",
           Touched:false
       },
       Password:{
        name :'password',
        valid :false,
        value:"",
        Touched:false
    }
    }

  const Submit =(event)=>{
        event.preventDefault();  
        Validdataarray =[]
        for (let index in userdata ) {
           if (userdata[index].valid) {
              Validdataarray.push(
                userdata[index].value
              )
           } else {
             
           }
        }
        validdata ={ 
          Email: Validdataarray[0],
          Password :Validdataarray[1]
           }
           firebase.auth().createUserWithEmailAndPassword(
                  validdata.Email,
                  validdata.Password
           ).then( element=>{
             firebaseDB.ref(firebase.auth().currentUser.uid).set(
                {
                    "id": 1,
                    "Note": "Take out the trash",
                    "Done" : true
                }
            )
           }
           ).catch( element=>{

           }  
           )
          }
  const Validationemail =(event)=>{
    userdata.Email.Touched =true
    let email = event.target.value
      if (/\S+@\S+[.]\S/.test(email)) {
            userdata.Email.value =email
            document.getElementById("emailerror").textContent =""
            userdata.Email.valid =true
      } else {
         if (email ==="") {
          document.getElementById("emailerror").textContent=`${"You forgot to enter your email"}`
         }else{
         document.getElementById("emailerror").textContent=`${"Plaese "+ email +" is an invalid email "}`
         }
      }
  }
  const PasswordValidation=(event)=>{
    userdata.Password.Touched =true
    let password = event.target.value
    if (password.length>=10) {
      document.getElementById("passworderror").textContent=""
      userdata.Password.value =password
    } else {
      if (password ==="") {
        document.getElementById("passworderror").textContent=`${"You forgot to enter your password"}`
        }else{
        document.getElementById("passworderror").textContent=`${"Password length should be grater than 10 "}`
        }
    }
}

const RepeatValidation=(event)=>{
  let password =userdata.Password.value
  let repeatpassword =event.target.value
  if (password === repeatpassword) {
     userdata.Password.valid = true
     document.getElementById("reppassworderror").textContent="" 
  } else {
    document.getElementById("reppassworderror").textContent="Both password are not same" 
  }
}
      return (
        <div className ={" form w3-card-24"}>
        <div className= {"todolist"}>
          <div className ="">
       <form onSubmit={Submit}>
            <br/>
           <label className = "w3-label"> Email </label>
           <input onBlur={Validationemail} id="email" className="form-control" type="email" placeholder="Email"/>
            <p id="emailerror"  className="label_error" ></p>
           <br/>
           <label className = "w3-label"> Password </label>
           <input  onBlur={PasswordValidation}  className="form-control" type="password" placeholder="Password"/>
           <p id="passworderror" className={"label_error"}></p>
           <br/>
           <label className = "w3-label"> Repeat Password </label>
           <input onBlur={RepeatValidation}  className="form-control" type="password" placeholder="Password"/>
           <p id="reppassworderror" className={"label_error"}></p>
           <br/>
           <input className="btn btn-success btn-lg button_submit" type="submit" value="Sign Up"/>
       </form>
       </div>
       </div>
     </div>
      )
}
export default  SignUP