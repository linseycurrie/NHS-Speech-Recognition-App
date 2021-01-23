import React from 'react';

const ServicesIndividualComponent = ({individualResult}) => {

    if (!individualResult) {
        return null
    }

    let telNum = "tel:" + individualResult.Contacts.replace(/\D+/g, '').slice(0, 11)
    let placeUrl = individualResult.URL

    const lat = individualResult.Geocode.coordinates[0]
    const lng = individualResult.Geocode.coordinates[1]
    let googleMapUrl = "https://www.google.com/maps/search/?api=1&query=" + lng + "," + lat

    return (
        <>
            <h3>{individualResult.OrganisationName}</h3>
            <h5>{individualResult.distanceMiles.toFixed(2)} miles away</h5>
            <p>{individualResult.Address1} {individualResult.Address2} {individualResult.Address3} {individualResult.City} {individualResult.Postcode}</p>
            <p><a href={telNum}>{individualResult.Contacts.replace(/\D+/g, '').slice(0, 11)}</a></p>
            <p><a href={placeUrl} target="_blank" rel="noreferrer">{placeUrl}</a></p>
            <p><a href={googleMapUrl} target="_blank" rel="noreferrer">Map & directions</a></p>
            <hr width="800px"></hr>
        </>
    )
}

export default ServicesIndividualComponent;