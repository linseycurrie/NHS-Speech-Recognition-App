import React from 'react';
import UserFormComponent from '../components/UserFormComponent';
import ReminderComponent from '../components/ReminderComponent';
import Request from '../helpers/request'
import HeaderComponent from '../components/HeaderComponent';

const UserContainer = () => {

    const headerCopy = "Your Personal Details"

    const handlePost = function(user){
        const request = new Request();
        request.post("/api/", user)
        .then(() => window.location = "/")
    }

    return(
        <>
            <HeaderComponent headerCopy={headerCopy} />
            <UserFormComponent onCreate={handlePost} />
        </>
    )
}
export default UserContainer;