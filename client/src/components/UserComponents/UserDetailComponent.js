import React from 'react';
import User from './User';

const UserDetailComponent = ({selectedUser, onDelete}) => {
    
    const handleDelete = () => {
        onDelete(selectedUser.id)
    }

    if(!selectedUser){
        return null
    }
    return(
        <>
        <p>{selectedUser.firstName} {selectedUser.lastName}</p>
        <p>{selectedUser.age}</p>
        <p>{selectedUser.email}</p>
        <button onClick={handleDelete}>Delete</button>
        <br></br>
        </>
    )
}
export default UserDetailComponent;