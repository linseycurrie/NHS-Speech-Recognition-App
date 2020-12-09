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
            <h2>Add a new user:</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-userDetails">
                    <label htmlFor="firstName">First Name: </label>
                    <input text="text" id="firstName" name="firstName" onChange={handleChange} required></input><br /><br />
                    <label htmlFor="lastName">Last Name: </label>
                    <input text="text" id="lastName" name="lastName" onChange={handleChange} required></input><br /><br />
                    <label htmlFor="age">Date of Birth: </label>
                    <input text="number" id="dob" name="dob" placeholder="DD/MM/YYYY" onChange={handleChange} required></input><br /><br />
                    <label htmlFor="email">Email: </label>
                    <input text="String" id="email" name="email" onChange={handleChange} required></input><br /><br />
                    <label htmlFor="postcode">PostCode: </label>
                    <input text="String" id="postcode" name="postcode" onChange={handleChange} required></input><br /><br />
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