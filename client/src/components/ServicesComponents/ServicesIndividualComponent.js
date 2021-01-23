import React from 'react';

const ServicesIndividualComponent = ({individualResult}) => {

    if (!individualResult) {
        return 'Loading...'
    }

    let telNum = Number(individualResult.Contacts.replace(/\D+/g, '').slice(0, 11));

    return (
        <>
            <h3>{individualResult.OrganisationName}</h3>
            <h5>{individualResult.distanceMiles.toFixed(2)} miles away</h5>
            <p>{individualResult.Address1} {individualResult.City} {individualResult.Postcode}</p>
            <p><a href="tel:Number(individualResult.Contacts.replace(/\D+/g, '').slice(0, 11))">{individualResult.Contacts.replace(/\D+/g, '').slice(0, 11)}</a></p>
        </>
    )
}

export default ServicesIndividualComponent;