import React, { useEffect, useState } from 'react';
import ServicesComponent from '../components/ServicesComponents/ServicesComponent';
import HeaderComponent from '../components/Header_Footer_elements/HeaderComponent'
import Request from '../helpers/request'
import axios from 'axios';

const ServicesContainer = () => {

    const headerCopy = "Find a Service"
    const headerBanner = "/gp-surgery.jpg";

    const [serviceSearchResult, setServiceSearchResult] = useState(null);

    const handleSearchRequest = function(searchTerm) {

        let body = {
            "filter": "(OrganisationTypeID eq 'GPB')",
            "top": 5,
            "skip": 0,
            "count": true
        };
         
        const searchRequest = axios.post("https://api.nhs.uk/service-search/search-postcode-or-place?api-version=1&search=" + searchTerm, body, {
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
            <ServicesComponent onSearchPostCode={handleSearchRequest} serviceSearchResult={serviceSearchResult}/>
        </>
    )
}

export default ServicesContainer;