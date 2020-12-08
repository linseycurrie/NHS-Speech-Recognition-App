import React from 'react';
import UserFormComponent from '../components/UserFormComponent';
import Request from '../helpers/request'
import HeaderComponent from '../components/Header_Footer_elements/HeaderComponent';

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