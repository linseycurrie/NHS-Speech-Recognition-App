import React from 'react';
import User from './User';
import UserFormComponent from './UserFormComponent';

const UserList = ({allUsers}) => {
    
    if(!allUsers){
        return "Loading ...UserList"
    }
    
    const userNodes = allUsers.map((user, index) => {
        return (
            <>
            <div>
            <li key={index}>
                <User user={user} />
            </li>
            </div>
            
            </>
        )
    })
    return(
        <ul>
        {userNodes}
        </ul>
    )
}
export default UserList;