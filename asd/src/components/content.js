
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect} from "react-router-dom";

import {withRouter} from 'react-router';

const Content =(props)=>{
    let history = useHistory();

    function login(e){
      const password = document.getElementById('password').value;
      const username = document.getElementById('username').value;
     
      e.preventDefault();

      fetch('http://localhost:3000/login',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
            username:username,
            password:password
      

          })
        }).then(r=>{
            if(r.status === 401){
              alert("invalid password");
             
              throw new Error("invalid password");
            }
            if(r.status === 404){
              alert("no user found");
              
              throw new Error("no user found");
            }
            
            return r.json();
          }).then(res =>{
            console.log(res.userid);
            localStorage.setItem('token', res.token);
            localStorage.setItem('isloggedin', true);
            localStorage.setItem('user', res.userid);
            if(res.status === 'admin'){
            history.push(`/admin/${username}`);}
            else{
              history.push(`/student/${username}`);
            }
          }).catch(err=>console.log(err));
        }
        
      
      
      
    

   
    
    return (
        
      <div className="App">
      <form onSubmit={(e)=>login(e)
        }>
      <input type="text" name="username" id="username" 
        
      />
      <input type="password" name="password" id="password"/>
      <button type="submit">submit</button>
      </form>
        </div>
    )




}
export default withRouter(Content);