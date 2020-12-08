import React, {useState, useEffect} from 'react';
import UserFormComponent from '../components/UserComponents/UserFormComponent';
import UserDetailComponenet from '../components/UserComponents/UserDetailComponent';
import UserListComponent from "../components/UserComponents/UserListComponent";
import Request from '../helpers/request'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import HeaderComponent from '../components/Header_Footer_elements/HeaderComponent';

const UserContainer = () => {

    const [allUsers, setAllUsers] = useState([]);
   

    const requestAllUsers = function(){
        const request = new Request();
        request.get("api/users")
        .then((data) => {setAllUsers(data)})
        
    }

    const headerCopy = "Your Personal Details"

    const handlePost = function(user){
        const request = new Request();
        request.post("/api/", user +"s")
        .then(() => window.location = "/user")
    }

    const findUserById = function(id){
        return allUsers.find((user) => {
            return user.id === parseInt(id);
        })
    }

    const handleDelete = function(id){
        const request = new Request();
        const url = "/api/users/" + id
        request.delete(url)
        .then(() => window.location = "/user")
      }
    
    useEffect(() => {
        requestAllUsers()
    }, [allUsers])


    if(!allUsers){
        return null
    }

    return(
        <Router>
        <>
        <HeaderComponent headerCopy={headerCopy} />
        


        
        <Route exact path="/user" render={() => {
            return <UserFormComponent onCreate={handlePost} />
        }} />

        <Route exact path="/user/:id" render={(props) => {
            const id = props.match.params.id;
            const user = findUserById(id);
            return <UserDetailComponenet user={user} onDelete={handleDelete}/>
        }} />

        <Route render={() => {
            return <UserListComponent allUsers={allUsers} />
        }} />
        
  
        </>
        </Router>
    )
    
}
export default UserContainer;