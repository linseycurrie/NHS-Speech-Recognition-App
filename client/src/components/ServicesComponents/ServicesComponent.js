import React from 'react';
import SearchBarComponent from '../SearchBarComponent';
import ServicesListComponent from './ServicesListComponent';

const ServicesComponent = ({onSearchPostCode, serviceSearchResult}) => {

    const placeHolder = "e.g. SW1A 1AA"

    return(
        <>
            <h3>Search for your local GP:</h3>
            <SearchBarComponent placeHolder={placeHolder} onSearchPostCode={onSearchPostCode}/>
            <ServicesListComponent serviceSearchResult={serviceSearchResult}/>
        </>
    )
}

export default ServicesComponent;