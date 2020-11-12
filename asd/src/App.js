
import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect} from "react-router-dom";
import './App.css';
import Content from './components/content';
import Admin from './components/admin';
// import Register from './components/register';
import Error from './components/error';
// import Signup from './components/signup';



function App() {
  

    return (
        <Router>
          <Switch>
          <Route exact path={"/admin/:adminid"}   ><Admin /></Route>
          <Route exact path={"/admin/:adminid/registerstudents"}   ><Admin /></Route>
          <Route path="/" exact component={() => <Content />} />
          <Route   component={ Error } />
          {/* <Route path="/signup" exact component={() => <Signup />} /> */}
          </Switch>
            
        </Router>
    );
}

export default App;