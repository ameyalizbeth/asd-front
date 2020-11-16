import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect,Link} from "react-router-dom";
import Register from './register';
import Course from './course';

const Student = (props)=>{
    // const { params: { adminid } } = match;
    let history = useHistory();
   const username= props.match.params.studentid;
   console.log(props);
   const [name,setName] = useState('');
   const [email,setEmail] = useState('');
//    console.log( JSON.stringify(match));

 useEffect(()=>{
     fetch(`http://localhost:3000/student/${username}`,{
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
           
            <Link to={`/student/${username}/registercourses`}> course registeration</Link>
            
            <Link to={`/student/${username}/certificates`}>upload certificates</Link>
            <Link to={`/student/${username}/results`}>view results</Link>
            <Link to={`/student/${username}`}>  personel</Link>
           
            <Switch>
            <Route exact path= {`/student/:studentid/certificates`}  render={()=> (<div>
        
        
       upload certificates

</div>
    )
} ></Route>
            <Route exact path= {`/student/:studentid/registercourses`} render={()=> (<div>
        
        
        course registeration done here

</div>
    )
} ></Route>
            <Route exact path= {`/student/:studentid/results`} render={()=> (<div>
        
        
        results are uploaded here

</div>
    )
} ></Route>
            <Route exact path="/student/:studentid" render={()=> (<div>
        
        
                hello {name} this is your dashboard .email:{email}

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

export default withRouter(Student);