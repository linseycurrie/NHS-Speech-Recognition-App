import React from 'react';
import {Link} from 'react-router-dom';

const User = ({user}) => {

    if(!user){
        return "UserLoading ..."
    }

    const url = "/user/" + user.id

    return (
        <>
        <Link to = {url} >
        <p>{user.firstName} {user.lastName} </p>
        </Link>
     
        </>
    )
}
export default User;