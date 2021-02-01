import React from 'react';

const UserDetailComponent = ({selectedUser, onDelete}) => {
    
    const handleDelete = () => {
        onDelete(selectedUser.id)
    }

    if(!selectedUser){
        return null
    }
    return(
        <div className="user-details">
        <h3>Currently selected User:</h3>
        <p><b>Name: </b>{selectedUser.firstName} {selectedUser.lastName}</p>
        <p><b>Date of Birth: </b>{selectedUser.dob}</p>
        <p><b>Email: </b>{selectedUser.email}</p>
        <p><b>Postcode: </b>{selectedUser.postcode}</p>
        <button onClick={handleDelete}>Delete</button>
        <br></br>
        </div>
    )
}
export default UserDetailComponent;