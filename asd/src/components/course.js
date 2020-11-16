import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect} from "react-router-dom";

import {withRouter} from 'react-router';

const Course = (props)=>{
  const [message,setMessage] = useState('');
    function register(e){
        e.preventDefault();

        
          const  courseid=document.getElementById('courseid').value;
          const  coursename=document.getElementById('coursename').value;
          const  credit=document.getElementById('credit').value;
          const  staff=document.getElementById('staff').value;
          const  semester=document.getElementById('semester').value;
          
      
          fetch('http://localhost:3000/registercourses',{
            
        method:"POST",
        headers:{
          'Content-Type':'application/json',
          Authorization:'Bearer '+localStorage.getItem('token')+ ' '+localStorage.getItem('user')
        },
        body:JSON.stringify({
           courseid:courseid,
           coursename:coursename,
           credit:credit,
           staff:staff,
           semester:semester,
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
              alert("course already registered!!");
              // return <Redirect to='/' />
               throw new Error("cant add existing student");
            }
            
            return r.json().then(res =>{
              console.log(res);
              setMessage(" YOU HAVE REGISTERED A course SUCCESFULLY");
              alert("registered succesfully");
             
            }).catch(err=>console.log(err));;
          }).then(r=>{console.log(r)}).catch(err=>console.log(err));
          
        
    }
    return(
        <div>
            <form onSubmit={(e)=>{ register(e) }}>
                <input type="text" name ="courseid" id="courseid"/>
                <input type="text" name ="coursename" id="coursename"/>
                <input type="number" name ="credit" step="0.1" id="credit"/>
                <input type="text" name ="staff" id="staff"/>
                <input type="text" name ="semester" id="semester"/>
                <button type="submit">register course</button>
            </form>
            {message}
           
        </div>

    );

}
export default withRouter(Course);