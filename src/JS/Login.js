import React  from   "react";
import {Link} from "react-router-dom"
import {firebase ,GoogleAuth}  from '../firebase'

const Login = (props)=>{  
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
  
             console.log(validdata)
             alert(validdata)
      }
  
      // GoogleSign is a function that sign in to google
      const GoogleSign=()=>{
        firebase.auth().signInWithPopup(GoogleAuth);
          console.log(GoogleAuth)
      }
          //  Validationemail is a function that validate the email 
        const Validationemail =(event)=>{
          userdata.Email.Touched =true
          userdata.Email.value =""
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
         



        // PasswordValidation is a funtion that validate the password
        const PasswordValidation=(event)=>{
            userdata.Password.Touched =true
            userdata.Password.value =""
            let password = event.target.value
              if (password.length>=10) {
                document.getElementById("passworderror").textContent=""
                userdata.Password.value =password
                userdata.Password.valid= true
              } else {
                if (password ==="") {
                  document.getElementById("passworderror").textContent=`${"You forgot to enter your password"}`
                  }else{
                  document.getElementById("passworderror").textContent=`${"Password length should be grater than 10 "}`
                  }
              }
        }
        return (
        
        <div className ={" form w3-card-24"}>
            <div className= {"todolist"}>
                <div className ="">
                  <button onClick={GoogleSign} className={" btn btn-danger btn-lg button "}>
                    Sign in with google
                  </button>
                      <form onSubmit={Submit}>
                            <br/>
                            <label className = "w3-label"> Email </label>
                            <input onBlur={Validationemail} className="form-control" type="email" placeholder="Email"/>
                            <p id="emailerror" className ="label_error"></p>
                            <br/>
                            <label className = "w3-label"> Password </label>
                            <input onBlur={PasswordValidation} className="form-control" type="password" placeholder="Password"/>
                            <p id="passworderror" className ="label_error"></p>
                            <br/>
                            <input  className="btn btn-success btn-lg button_submit" type="submit" value="Sign IN"/>
                      </form>
                </div>
              <Link className="btn btn-primary" to="/SignUp"> click here to Sign up</Link>
            </div>
        </div>

      
      )
}
export default  Login