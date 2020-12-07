import React, { useEffect, useState } from 'react';
import ServicesComponent from '../components/ServicesComponent';
import Request from '../helpers/request'
import axios from 'axios';
// const axios = require('axios');

const ServicesContainer = () => {

    const [serviceSearchResult, setServiceSearchResult] = useState(null);

    useEffect(() => {
        handleSearchRequest("lacock")
    }, [])

    const handleSearchRequest = function(searchTerm) {
        // const request = new Request();
        // let body = {
        //     "filter": "(OrganisationTypeID eq 'DEN') or (OrganisationTypeID eq 'GPB') or (OrganisationTypeID eq 'HOS')",
        //     "top": 25,
        //     "skip": 0,
        //     "count": true
        // }
        // request.post("https://api.nhs.uk/service-search/search-postcode-or-place?api-version=1&search=" + searchTerm, body)
        // .then((data) => {setServiceSearchResult(data)})

        let body = {
            "filter": "(OrganisationTypeID eq 'DEN')",
            "top": 10,
            "skip": 0,
            "count": true
        };
         
        let request = axios.post("https://api.nhs.uk/service-search/search-postcode-or-place?api-version=1&search=" + searchTerm, body, {
            headers: {
                "Content-Type": "application/json",
                "subscription-key": "ca7e563eca174a80ad82eef61fc40776"
            }
        });

        request.then((data) => {
            setServiceSearchResult(data);
        });
    }

    return(
        <>
            <h1>Services Container</h1>
            <ServicesComponent />
        </>
    )
}

export default ServicesContainer;