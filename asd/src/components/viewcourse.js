import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect} from "react-router-dom";

import {withRouter} from 'react-router';

const Viewcourse = ()=>{
    return(
        <div>
            <input type="text" name="courseid" />/* drop down on select course view the form with details*/

           
        </div>

    );

}
export default withRouter(Viewcourse);