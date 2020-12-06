import React, {useState, useEffect} from 'react';
import InformationDetailComponent from '../components/InformationDetailComponent';
import InformationListComponent from '../components/InformationListComponent';
import SearchBarComponent from '../components/SearchBarComponent';
import UserFormComponent from '../components/UserFormComponent';
import Request from '../helpers/request'

const HealthAppContainer = () => {

    const [condition, setCondition] = useState({});

    const requestAll = function(){
        const request = new Request();
        const conditionRequest = request.get("https://api.nhs.uk/conditions/?category=b&synonyms=false&childArticles=false")
        .then((data) => {setCondition(data)})
       
    }

    useEffect(() => {
        requestAll()
    }, [])

    const handlePost = function(user){
        const request = new Request();
        request.post("/api/", user)
        .then(() => window.location = "/")
    }

    return(
        <>
            <p>Container</p>
            
            
        
            <SearchBarComponent></SearchBarComponent>
            <InformationListComponent></InformationListComponent>
            <InformationDetailComponent></InformationDetailComponent>
            <UserFormComponent onCreate={handlePost}></UserFormComponent>


        </>
    )
}

export default HealthAppContainer;