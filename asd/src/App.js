
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect} from "react-router-dom";
import './App.css';
import Content from './components/content';
import Admin from './components/admin';
import Student from './components/student';
// import Register from './components/register';
import Error from './components/error';
// import Signup from './components/signup';



function App() {
  

    return (
        <Router>
          <Switch>
          <Route exact path={"/admin/:adminid"}   ><Admin /></Route>
          <Route exact path={"/admin/:adminid/registerstudents"}   ><Admin /></Route>
          <Route exact path={"/admin/:adminid/viewstudents"}   ><Admin /></Route>
          <Route exact path={"/admin/:adminid/registercourses"}   ><Admin /></Route>
          <Route exact path={"/admin/:adminid/viewcourses"}   ><Admin /></Route>
          <Route exact path={"/admin/:adminid/results"}   ><Admin /></Route>
          <Route exact path={"/admin/:adminid/viewresults"}   ><Admin /></Route>
          <Route path="/" exact component={() => <Content />} />
          <Route exact path={"/student/:studentid"}   ><Student /></Route>
          <Route exact path={"/student/:studentid/registercourses"}   ><Student /></Route>
          <Route exact path={"/student/:studentid/certificates"}   ><Student /></Route>
          <Route exact path={"/student/:studentid/results"}   ><Student /></Route>





          <Route   component={ Error } />
          {/* <Route path="/signup" exact component={() => <Signup />} /> */}
          </Switch>
            
        </Router>
    );
}

export default App;