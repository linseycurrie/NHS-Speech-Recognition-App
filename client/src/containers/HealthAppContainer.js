import React, {useState, useEffect} from 'react';
import InformationDetailComponent from '../components/InformationDetailComponent';
import InformationListComponent from '../components/InformationListComponent';
import SpeechComponent from '../components/SpeechComponent';
import UserFormComponent from '../components/UserFormComponent';
import ReminderComponent from '../components/ReminderComponent';
import Request from '../helpers/request'

const HealthAppContainer = () => {

    const [condition, setCondition] = useState({});
    const [searchResult, setSearchResult] = useState(null);

    // const requestAll = function(){
    //     const request = new Request();
    //     const conditionRequest = request.get("https://api.nhs.uk/conditions/?category=b&synonyms=false&childArticles=false")
    //     .then((data) => {setCondition(data)})
       
    // }

    // useEffect(() => {
    //     requestAll()
    // }, [])

    const handlePost = function(user){
        const request = new Request();
        request.post("/api/", user)
        .then(() => window.location = "/")
    }

    const handleSearchRequest = function(searchTerm) {
        const request = new Request();
        const searchRequest = request.get("https://api.nhs.uk/conditions/" + searchTerm.replace(/\s/g, '-'))
        .then((data) => {setSearchResult(data)})
    }

    return(
        <>
            <p>Container</p>
        
            <SpeechComponent onSearch={handleSearchRequest}/>
            <InformationListComponent />
            <InformationDetailComponent searchResult={searchResult} />
            <UserFormComponent onCreate={handlePost} />
        </>
    )
}

export default HealthAppContainer;