import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import Dropdown from 'react-dropdown';
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect} from "react-router-dom";

import {withRouter} from 'react-router';

const Viewcourse = ()=>{
    const options = [];
    const details = [];
    useEffect(()=>{
        fetch(`http://localhost:3000/courses`,{
            headers:{
                Authorization:'Bearer '+localStorage.getItem('token') +' '+localStorage.getItem('user')
            }
        }).then(r=>r.json()).then(data=>{
        //    console.log(data);
        data.courses.map(e=>{
            options.push(e.courseid);
            details.push(e);
            
        })

        }).catch(err=>console.log(err));

        

    });
    return(
        <div>
            <Dropdown options={options} onChange={(id)=>{
                
              console.log(  details.find(x=>x.courseid===id.value))

            }} placeholder="Select course" />

           
        </div>

    );

}
export default withRouter(Viewcourse);