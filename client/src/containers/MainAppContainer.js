import React, {useState, useEffect} from 'react';
import ConditionsContainer from './ConditionsContainer';
import ServicesContainer from './ServicesContainer';
import UserContainer from './UserContainer';
import ReminderContainer from './ReminderContainer';
import NavBar from '../components/Header_Footer_elements/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FooterComponent from '../components/Header_Footer_elements/FooterComponent';
import './MainAppContainer.css'
import Request from '../helpers/request';

const MainAppContainer = () => {
    const [selectedUser, setSelectedUser] = useState({});
    const [allUsers, setAllUsers] = useState([]);

    const requestAllUsers = function(){
        const request = new Request();
        request.get("api/users")
        .then((data) => {setAllUsers(data)})
        console.log("reload homepage :)")
    }

    const handleDisplayUserDetail = function(id){
        console.log(id)
        const user = findUserById(id)
        setSelectedUser(user)
    }

    const findUserById = function(id){
        return allUsers.find((user) => {
            return user.id === parseInt(id);
        })
    }

    useEffect(() => {
        requestAllUsers()
    }, [])

    return(
        <Router>
        <>
        <NavBar  allUsers={allUsers} onSelection={handleDisplayUserDetail}/> 
        <section>
            <Switch>
                <Route exact path="/" component={ConditionsContainer} />

                <Route exact path="/services" component={ServicesContainer} />
                
                <Route exact path="/user" render={props => <UserContainer onSelection={handleDisplayUserDetail} allUsers={allUsers} selectedUser={selectedUser} />} />

                <Route exact path='/reminders' component={ReminderContainer} />
        </Switch>
        </section>
        <FooterComponent />
        </>
        </Router>
    )
}

export default MainAppContainer;