import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect,Link} from "react-router-dom";
import '../App.css';

const Register =(props)=>{
  console.log(props);
    const [message,setMessage]=useState('');
    function register(e){
        e.preventDefault();

        
          const  username=document.getElementById('username').value;
          const  password=document.getElementById('password').value;
          const  name=document.getElementById('name').value;
          const  email=document.getElementById('email').value;
          const  currentsem=document.getElementById('currentsem').value;
      
          fetch('http://localhost:3000/register',{
            
        method:"POST",
        headers:{
          'Content-Type':'application/json',
          Authorization:'Bearer '+localStorage.getItem('token')+ ' '+localStorage.getItem('user')
        },
        body:JSON.stringify({
            username:username,
            password:password,
            name:name,
            email:email,
            currentsem:currentsem,
            currentuser:props.match.params.adminid
      

          })
        }).then(r=>{
            if(r.status === 500){
              alert("token expired login again to continue");
            return <Redirect to='/' />
              // throw new Error("token exired");
            }
            if(r.status === 401){
              alert("not authenticated to do this action");
              return <Redirect to='/' />
              // throw new Error("not authenticated");
            }
            if(r.status === 403){
              alert("student already registered!!");
              // return <Redirect to='/' />
               throw new Error("cant add existing student");
            }
            
            return r.json().then(res =>{
              console.log(res);
              setMessage(" YOU HAVE REGISTERED A STUDENT SUCCESFULLY");
              alert("registered succesfully");
             
            }).catch(err=>console.log(err));;
          }).then(r=>{console.log(r)}).catch(err=>console.log(err));
          
        
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
            {message}
    </div>
    );
}
export default withRouter(Register);