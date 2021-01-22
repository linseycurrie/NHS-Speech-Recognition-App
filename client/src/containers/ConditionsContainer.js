import React, {useState} from 'react';
import InformationDetailComponent from '../components/ConditionInformationComponents/InformationDetailComponent';
import SpeechComponent from '../components/SpeechComponent';
import HeaderComponent from '../components/Header_Footer_elements/HeaderComponent';
import Request from '../helpers/request'



const ConditionsContainer = () => {

    const headerCopy = "Welcome to your NHS Health App";
    const headerBanner = "/nhs-staff-2.jpg";
    const placeHolder = "e.g. flu";

    const [searchResult, setSearchResult] = useState(null);

    const handleSearchRequest = function(searchTerm) {
        const request = new Request();
        request.get("https://api.nhs.uk/conditions/" + searchTerm.replace(/\s/g, '-').toLowerCase())
        .then((data) => {setSearchResult(data)})
    }

    const clearSearchResult = function(){
        setSearchResult(null)
    }

    return(
        <>
            <HeaderComponent headerCopy={headerCopy} headerBanner={headerBanner}/>
            <SpeechComponent searchResult={searchResult} onReset={clearSearchResult} onSearchCondition={handleSearchRequest} />
            <InformationDetailComponent searchResult={searchResult} />
        </>
    )
}

export default ConditionsContainer;