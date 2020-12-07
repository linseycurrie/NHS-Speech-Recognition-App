import React, { useState } from 'react';
import ServicesComponent from '../components/ServicesComponent';
import Request from '../helpers/request'

const ServicesContainer = () => {

    const [serviceSearchResult, setServiceSearchResult] = useState(null);

    const handleSearchRequest = function(searchTerm) {
        const request = new Request();
        const body = {
            "filter": "(OrganisationTypeID eq 'DEN') or (OrganisationTypeID eq 'GPB') or (OrganisationTypeID eq 'HOS')",
            "top": 25,
            "skip": 0,
            "count": true
        }
        const searchRequest = request.post("https://api.nhs.uk/service-search/search-postcode-or-place?api-version=1&search=newark", body)
        .then((data) => {setServiceSearchResult(data)})
    }

    return(
        <>
            <h1>Services Container</h1>
            <ServicesComponent />
        </>
    )
}

export default ServicesContainer;