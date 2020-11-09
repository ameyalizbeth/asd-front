
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect} from "react-router-dom";
import './App.css';
import axios from 'axios';
import Admin from './components/admin';
// import Signup from './components/signup';

function Content(){
  // const [username1,setUsername1] = useState('');
    let history = useHistory();

    function login(e){
      let request = {
        username:document.getElementById('username').value,
        password:document.getElementById('password').value
  
      }
      e.preventDefault();
      
      axios.post('http://localhost:3000/login',request).then(r=>{
        if(r.status === 200)
        {
          console.log("hi");
          console.log("/admin/"+request.username);
          history.push("/admin/"+request.username);
          
        }
        
  
       }).catch(e=>{console.log(e)});
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

function App() {
  

    return (
        <Router>
          <Switch>
          <Route exact path={"/admin/:adminid"}  component={() => <Admin  />} />
          <Route path="/" exact component={() => <Content />} />
          {/* <Route path="/signup" exact component={() => <Signup />} /> */}
          </Switch>
            
        </Router>
    );
}

export default App