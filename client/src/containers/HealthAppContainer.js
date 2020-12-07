import React, {useState, useEffect} from 'react';
import InformationDetailComponent from '../components/InformationDetailComponent';
import SpeechComponent from '../components/SpeechComponent';
import UserFormComponent from '../components/UserFormComponent';
import Request from '../helpers/request'



const HealthAppContainer = () => {

    const [searchResult, setSearchResult] = useState(null);



    const handleSearchRequest = function(searchTerm) {
        const request = new Request();
        const searchRequest = request.get("https://api.nhs.uk/conditions/" + searchTerm.replace(/\s/g, '-'))
        .then((data) => {setSearchResult(data)})
    }

    return(
        <>
            <SpeechComponent onSearch={handleSearchRequest} />
            <InformationDetailComponent searchResult={searchResult} />
        </>
    )
}

export default HealthAppContainer;