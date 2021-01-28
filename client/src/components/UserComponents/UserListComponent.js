import React from 'react';
import './UserListComponent.css';


const UserListComponent = ({allUsers, onSelection}) => {
    
    if(!allUsers){
        return "UserListLoading ..."
    }

    const handleSelection = function(event){
        const id = event.target.value
        onSelection(id)
    }

    const userNodes = allUsers.map((user, index) => {
        return (
            <option  key={index} value={user.id}>
                {user.firstName} {user.lastName}
            </option>
           
        )
    })
    return(
        <>
            <label htmlFor="user-dropdown"><h2>Select a User:</h2></label>
            <select id="user-dropdown" defaultValue="Select User" onChange={handleSelection}>
                <option disabled>Select User</option>
                {userNodes}
            </select>
        </>
    )
}
export default UserListComponent;