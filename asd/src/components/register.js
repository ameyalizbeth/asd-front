import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect,Link} from "react-router-dom";

const Register =(props)=>{
    const [message,setMessage]=useState('');
    function register(e){
        e.preventDefault();
        let request = {
            username:document.getElementById('username').value,
            password:document.getElementById('password').value,
            name:document.getElementById('name').value,
            email:document.getElementById('email').value,
            currentsem:document.getElementById('currentsem').value
      
          }
          axios.post('http://localhost:3000/register',request).then(r=>{
            if(r.status === 200)
            {
              console.log("succesfully registered");
              setMessage("registered succesfully");
              
              
            }
            
      
           }).catch(e=>{console.log(e)});
        
    }
    return(
    <div>
        <form onSubmit={(e)=>{register(e)}}>
            <input type="text" name="name" id="name"/>
            <input type="text" name="email" id="email"/>
            <input type="text" name="username" id="username"/>
            <input type="text" name="password" id="password"/>
            <input type="text" name="currentsem" id="currentsem"/>
            <button type="submit">register</button>

        </form>
            you have {message}
    </div>
    );
}
export default withRouter(Register);