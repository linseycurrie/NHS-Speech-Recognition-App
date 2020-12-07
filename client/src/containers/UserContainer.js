import React from 'react';
import UserFormComponent from '../components/UserFormComponent';

const UserContainer = () => {

    const handlePost = function(user){
        const request = new Request();
        request.post("/api/", user)
        .then(() => window.location = "/")
    }

    return(
        <UserFormComponent onCreate={handlePost} />
    )
}
export default UserContainer;