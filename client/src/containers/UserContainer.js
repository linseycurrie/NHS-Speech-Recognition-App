import React, {useState, useEffect} from 'react';
import UserFormComponent from '../components/UserComponents/UserFormComponent';
import UserDetailComponenet from '../components/UserComponents/UserDetailComponent';
import UserListComponent from "../components/UserComponents/UserListComponent";
import Request from '../helpers/request'

import HeaderComponent from '../components/Header_Footer_elements/HeaderComponent';

const UserContainer = () => {

    const [allUsers, setAllUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
   

    const requestAllUsers = function(){
        const request = new Request();
        request.get("api/users")
        .then((data) => {setAllUsers(data)})
        
    }

    const headerCopy = "Your Personal Details";
    const headerBanner = "/nhs.jpg";

    const handlePost = function(user){
        const request = new Request();
        request.post("/api/users", user)
        .then(() => window.location = "/user")
    }

    const findUserById = function(id){
        return allUsers.find((user) => {
            return user.id === parseInt(id);
        })
    }

    const handleDelete = function(id){
        const request = new Request();
        const url = "api/users/" + id
        request.delete(url)
        .then(() => window.location = "/user")
    }

    const handleUpdate = function(pirate){
        const request = new Request();
        request.patch("/api/users/" + pirate.id, pirate)
        .then(() => window.location = "/user")
    }

    const handleDisplayUserDetail = function(id){
        console.log(id)
        const user = findUserById(id)
        setSelectedUser(user)
    }
    
    useEffect(() => {
        requestAllUsers()
    }, [allUsers])


    if(!allUsers){
        return null
    }

    return(

        <>
        <HeaderComponent headerCopy={headerCopy} headerBanner={headerBanner} />

        <UserListComponent allUsers={allUsers} onSelection={handleDisplayUserDetail} />

        <UserDetailComponenet selectedUser={selectedUser}  onDelete={handleDelete}/>
      
        <UserFormComponent onCreate={handlePost} onUpdate={handleUpdate} />
        </>
    )
    
}
export default UserContainer;