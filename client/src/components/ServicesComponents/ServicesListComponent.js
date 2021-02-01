import React from 'react';
import ServicesIndividualComponent from './ServicesIndividualComponent';

const ServicesListComponent = ({serviceSearchResult, searchedPostcode}) => {

    if(!serviceSearchResult){
        return null
    } else if (serviceSearchResult.error) {
        return (
            "Please enter valid postcode."
        )
    } else {
        const serviceSearchResultNodes = serviceSearchResult.data.value.map((individualResult, index) => {
          return (
              <li key={index}>
                  <ServicesIndividualComponent individualResult={individualResult} searchedPostcode={searchedPostcode}/>
              </li>
          )  
        })
        return (
            <ul className="services-list">
                {serviceSearchResultNodes}
            </ul>
        )
    }
}

export default ServicesListComponent;