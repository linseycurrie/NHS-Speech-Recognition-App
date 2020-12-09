import React, { useEffect, useState } from 'react';
import ServicesComponent from '../components/ServicesComponent';
import HeaderComponent from '../components/Header_Footer_elements/HeaderComponent'
import Request from '../helpers/request'

const ServicesContainer = () => {

    const headerCopy = "Find a Service"
    const headerBanner = "/gp-surgery.jpg";

    const [serviceSearchResult, setServiceSearchResult] = useState(null);

    const handleSearchRequest = function(searchTerm) {
        const request = new Request();
        const body = {
            "filter": "(OrganisationTypeID eq 'DEN') or (OrganisationTypeID eq 'GPB') or (OrganisationTypeID eq 'HOS')",
            "top": 25,
            "skip": 0,
            "count": true
        }
        const searchRequest = request.post("https://api.nhs.uk/service-search/search-postcode-or-place?api-version=1&search=lacock", body)
        .then((data) => {setServiceSearchResult(data)})
    }

    useEffect(() => {
        handleSearchRequest();
    }, [])

    return(
        <>
            <HeaderComponent headerCopy={headerCopy} headerBanner={headerBanner} />
            <ServicesComponent />
        </>
    )
}

export default ServicesContainer;