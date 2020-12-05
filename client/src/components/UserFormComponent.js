import React, {useState} from 'react';

const UserFormComponent = ({onCreate}) => {

    const [stateUser, setStateUser] = useState(
        {
            firstName: "",
            lastName: "",
            age: ""
        }
    )



    const handleChange = function(event){
        let propertyName = event.target.name;
        let copiedUser = {...stateUser}
        copiedUser[propertyName] =event.target.value;
        setStateUser(copiedUser);
    }

    const handleSubmit = function(event){
        event.preventDefault();
        onCreate(stateUser);
        }

    return(
        <>
            <p>UserForm</p>
            <form onSubmit={handleSubmit}>
                <div className="form-userDetails">
                    <label for="firstName">First Name:</label>
                    <input text="text" id="firstName" name="firstName" onChange={handleChange}></input>
                    <label for="lastName">Last Name:</label>
                    <input text="text" id="lastName" name="lastName" onChange={handleChange}></input>
                    <label for="age">Age:</label>
                    <input text="number" id="age" name="age" onChange={handleChange}></input>
                </div>
                {/* <div className="form-conditionDetails">
                    <label for="conditionName">Condition Name:</label>
                    <input text="text" id="conditionName" name="conditionName"></input>
                    <label for="conditionName">Condition Type:</label>
                    <input text="text" id="lastName" name="lastName"></input>
                    <label for="age">Age:</label>
                    <input text="number" id="age" name="age"></input>
                </div> */}
            </form>
        </>
    )
}

export default UserFormComponent;