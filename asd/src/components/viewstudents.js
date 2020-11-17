import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import Dropdown from 'react-dropdown';
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect} from "react-router-dom";

import {withRouter} from 'react-router';

const Viewstudents = ()=>{
    const [dept,setDept] = useState('');
    const [semester,setSemester] = useState('');
    const [user,setUser] = useState('');
    const department = ['cs','ec','eee','mec','civil'];
    const sem =['s1','s2','s3','s4','s5','s6','s7','s8'];
    const username = [];

    function search(e){
        console.log(dept);
        console.log(semester);
        console.log(user);

        e.preventDefault();
        fetch(`http://localhost:3000/students`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                Authorization:'Bearer '+localStorage.getItem('token')+ ' '+localStorage.getItem('user')
            },
            body:JSON.stringify({
                username:user,
                semester:semester,
                department:dept
          
    
              })
        }).then(r=>r.json()).then(data=>{
          console.log(data);
        // data.username.map(e=>{
        //     username.push(e);
            
            
        // })

        }).catch(err=>console.log(err));

    }
    useEffect(()=>{
        fetch(`http://localhost:3000/students`,{
            headers:{
                Authorization:'Bearer '+localStorage.getItem('token') +' '+localStorage.getItem('user')
            }
        }).then(r=>r.json()).then(data=>{
        // console.log(data);
        data.username.map(e=>{
            username.push(e);
            
            
        })

        }).catch(err=>console.log(err));

        

    });
    return(
        <div>
            <Dropdown options={department} onChange={(text)=>{
                setDept(text.value);
                
            }} placeholder="Select department" />
            <Dropdown options={sem} onChange={(text)=>{
                setSemester(text.value)
            }}  placeholder="Select semester" />
            <Dropdown options={username} onChange={(text)=>{
                setUser(text.value)
            }}  placeholder="Select username" />

           <Button onClick={(e)=>{search(e)}}>SEARCH</Button>
        </div>

    );

}
export default withRouter(Viewstudents);