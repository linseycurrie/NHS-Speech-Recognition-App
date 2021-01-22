import React from 'react';
import SearchBarComponent from '../components/SearchBarComponent';

const ServicesComponent = ({onSearchPostCode}) => {

    const placeHolder = "e.g. SW1A 1AA"

    return(
        <>
            <h3>Search for your local GP:</h3>
            <SearchBarComponent placeHolder={placeHolder} onSearchPostCode={onSearchPostCode}/>
        </>
    )
}
 
export default ServicesComponent;