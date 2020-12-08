import React from 'react';
import ConditionsContainer from './ConditionsContainer';
import ServicesContainer from './ServicesContainer';
import UserContainer from './UserContainer';
import NavBar from '../components/Header_Footer_elements/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FooterComponent from '../components/Header_Footer_elements/FooterComponent';
import './MainAppContainer.css'

const MainAppContainer = () => {

    return(
        <Router>
        <>
        <NavBar /> 
        <section>
            <Switch>
                <Route exact path="/" component={ConditionsContainer} />

                <Route exact path="/services" component={ServicesContainer} />
                

                <Route exact path="/user" component={UserContainer} />
            </Switch>
        </section>
        <FooterComponent />
        </>
        </Router>
    )
}

export default MainAppContainer;