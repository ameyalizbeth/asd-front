import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect,Link} from "react-router-dom";
import Register from './register';
import Viewcourse from './viewcourse';
import Course from './course';
import Viewstudents from './viewstudents';

const Admin = (props)=>{
    // const { params: { adminid } } = match;
    let history = useHistory();
   const username= props.match.params.adminid;
   console.log(props);
   const [name,setName] = useState('');
   const [email,setEmail] = useState('');
//    console.log( JSON.stringify(match));

 useEffect(()=>{
     fetch(`http://localhost:3000/admin/${username}`,{
         headers:{
             Authorization:'Bearer '+localStorage.getItem('token') +' '+localStorage.getItem('user')
         }
     }).then(r=>r.json()).then(result=>{
        setName(result.name);
        setEmail(result.email);

        // console.log(result);
    })
        
        .catch(err=>console.log(err));

    //  axios.get('http://localhost:3000/admin/'+username).then(r=>{
    //     setName(r.data.name);
    //     setEmail(r.data.email);

    //     // console.log(r);
    //     }).catch(err=>console.log(err));


 });
 if(localStorage.getItem('isloggedin')){
    return (<div>

        <Router>
            <Link to={`/admin/${username}/registerstudents`}>register students</Link>
            <Link to={`/admin/${username}/registercourses`}>register courses</Link>
            <Link to={`/admin/${username}/viewcourses`}>view courses</Link>
            <Link to={`/admin/${username}/viewstudents`}>view students</Link>
            <Link to={`/admin/${username}/results`}>publish results</Link>
            <Link to={`/admin/${username}/viewresults`}>view results</Link>
            <Link to={`/admin/${username}`}>  personel</Link>
           
            <Switch>
            <Route exact path= {`/admin/:adminid/registerstudents`}  ><Register /></Route>
            <Route exact path= {`/admin/:adminid/registercourses`}  ><Course /></Route>
            <Route exact path= {`/admin/:adminid/viewcourses`}  ><Viewcourse/></Route>
            <Route exact path= {`/admin/:adminid/viewstudents`}  ><Viewstudents/></Route>
            <Route exact path="/admin/:adminid" render={()=> (<div>
        
        
                hello {name} hope you have a great day this is your dashboard!!!!
                email:{email}

        </div>
            )
        }/>

            

            </Switch>
            

        </Router>
        <Button onClick={()=>{
            localStorage.clear();
            history.push('/')}}>LOGOUT</Button>
        
        {/* <a>register student</a> */}
    </div>
    )}
    else{
        return(
            <div>
            <div>you are not logged in</div>
            <Button onClick={()=>{
                 history.push("/")
            }}>LOGIN</Button>
            
            </div> 
        
        );
    }
}

export default withRouter(Admin);