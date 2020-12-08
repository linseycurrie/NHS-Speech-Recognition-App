import React from 'react';


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
        <p>{selectedUser.dob}</p>
        <p>{selectedUser.email}</p>
        <p>{selectedUser.postcode}</p>
        <button onClick={handleDelete}>Delete</button>
        <br></br>
        </>
    )
}
export default UserDetailComponent;