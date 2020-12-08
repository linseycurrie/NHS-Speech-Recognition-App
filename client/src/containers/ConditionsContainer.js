import React, {useState} from 'react';
import InformationDetailComponent from '../components/InformationDetailComponent';
import SpeechComponent from '../components/SpeechComponent';
import Request from '../helpers/request'



const HealthAppContainer = () => {

    const [searchResult, setSearchResult] = useState(null);



    const handleSearchRequest = function(searchTerm) {
        const request = new Request();
        request.get("https://api.nhs.uk/conditions/" + searchTerm.replace(/\s/g, '-'))
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