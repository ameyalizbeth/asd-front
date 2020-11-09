import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect,Link} from "react-router-dom";
import Register from './register';
const Admin = (props)=>{
    // const { params: { adminid } } = match;
   const username= props.match.params.adminid;
   const [name,setName] = useState('');
   const [email,setEmail] = useState('');
//    console.log( JSON.stringify(match));

 useEffect(()=>{
     axios.get('http://localhost:3000/admin/'+username).then(r=>{
        setName(r.data.name);
        setEmail(r.data.email);

        console.log(r);
        }).catch(err=>console.log(err));


 });
    return <div>
        
        <div>
hello {name} hope you have a great day this is your dashboard!!!!
email:{email}

        </div>

        <Router>
            <Link to={`/admin/${username}/registerstudents`}>register students</Link>
            <Switch>
            <Route exact path= {`/admin/${username}/registerstudents`} component={()=><Register />} />

            

            </Switch>
            

        </Router>
        {/* <a>register student</a> */}
    </div>
}

export default withRouter(Admin);