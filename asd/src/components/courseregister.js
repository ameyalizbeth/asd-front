

import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import register from './register';
 

const Courseregister=(props)=>{
    const options = [
        's1', 's2', 's3','s4','s5','s6','s7','s8'
      ];
      
      
    const username = props.match.params.studentid;
function register(newV){
    console.log(newV);
    fetch(`http://localhost:3000/student/${username}/registercourses/${newV.value}`,{
         headers:{
             Authorization:'Bearer '+localStorage.getItem('token') +' '+localStorage.getItem('user')
         }
  }).then(r=>r.json())
  .then(result=>{
        console.log(result);
    })
        
        .catch(err=>console.log(err));
}
 return(
     <div>
         courses !!
         <Dropdown options={options} onChange={(newV)=>{register(newV)}} placeholder="Select semester" />
     </div>
 )

}

export default withRouter(Courseregister);