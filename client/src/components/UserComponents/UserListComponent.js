import React from 'react';
import User from './User';

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

        <select onChange={handleSelection}>
        <option selected disabled>Select User</option>
        {userNodes}
        </select>
    )
}
export default UserListComponent;