import React, { useState } from 'react';
import HeaderComponent from '../components/Header_Footer_elements/HeaderComponent'
import SpeechComponent from '../components/SpeechComponent';
import ServicesListComponent from '../components/ServicesComponents/ServicesListComponent';
import axios from 'axios';

const ServicesContainer = () => {

    const headerCopy = "Find a Service"
    const headerBanner = "/gp-surgery.jpg";
    const placeHolder = "e.g. SW1A 1AA"

    const [serviceSearchResult, setServiceSearchResult] = useState(null);
    const [searchedPostcode, setSearchedPostcode] = useState("");

    const handleSearchRequest = function(searchTerm) {

        setSearchedPostcode(searchTerm);

        let body = {
            "filter": "(OrganisationTypeID eq 'GPB')",
            "top": 5,
            "skip": 0,
            "count": true
        };
         
        axios.post("https://api.nhs.uk/service-search/search-postcode-or-place?api-version=1&search=" + searchTerm, body, {
            headers: {
                "Content-Type": "application/json",
                "subscription-key": "ca7e563eca174a80ad82eef61fc40776"
            }
        })
        .then((data) => {setServiceSearchResult(data)});
    }

    return(
        <>
            <HeaderComponent headerCopy={headerCopy} headerBanner={headerBanner} />
            <h2>Search for your local GP:</h2>
            <SpeechComponent placeHolder={placeHolder} onSearchPostCode={handleSearchRequest}/>
            <ServicesListComponent serviceSearchResult={serviceSearchResult} searchedPostcode={searchedPostcode}/>
        </>
    )
}

export default ServicesContainer;