import React from 'react';
import User from './User';

const UserDetailComponent = ({user, onDelete}) => {
    
    const handleDelete = () => {
        onDelete(user.id)
    }

    if(!user){
        return "Loading..."
    }
    return(
        <>
        <User user={user} />
        <p>{user.age}</p>
        <p>{user.email}</p>
        <button onClick={handleDelete}>Delete {user.firstName}</button>
        </>
    )
}
export default UserDetailComponent;