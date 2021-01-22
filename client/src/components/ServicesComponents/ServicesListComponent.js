import React from 'react';

const ServicesListComponent = ({serviceSearchResult}) => {

    if(!serviceSearchResult){
        return <p>Loading ....</p>
    } else if(serviceSearchResult.error) {
        return (
            "Sorry please enter valid postcode."
        )
    } else {

    return(
        <>
            <p>Services List</p>
            
        </>
    )
}
}

export default ServicesListComponent;