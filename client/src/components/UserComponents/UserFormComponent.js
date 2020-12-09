import React, {useState} from 'react';
import './UserFormComponent.css';

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
            <h3>Add a new user:</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-userDetails">
                    <label htmlFor="firstName">First Name:</label>
                    <input text="text" id="firstName" name="firstName" onChange={handleChange}></input><br />
                    <label htmlFor="lastName">Last Name:</label>
                    <input text="text" id="lastName" name="lastName" onChange={handleChange}></input><br />
                    <label htmlFor="age">Age:</label>
                    <input text="number" id="age" name="age" onChange={handleChange}></input><br />
                    <label htmlFor="email">Email:</label>
                    <input text="String" id="email" name="email" onChange={handleChange}></input><br />
                    <label htmlFor="postcode">PostCode:</label>
                    <input text="String" id="postcode" name="postcode" onChange={handleChange}></input><br />
                    <button type="submit">Submit</button>
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