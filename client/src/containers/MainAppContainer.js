import React from 'react';
import ConditionsContainer from './ConditionsContainer';
import ServicesContainer from './ServicesContainer';
import UserContainer from './UserContainer';
import NavBar from '../components/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const MainAppContainer = () => {

    return(
        <Router>
        <>
        <NavBar /> 
        <Switch>
            <Route exact path="/" component={ConditionsContainer} />

            <Route exact path="/services" component={ServicesContainer} />
            

            <Route exact path="/user" component={UserContainer} />
        </Switch>
        </>
        </Router>
    )
}

export default MainAppContainer;