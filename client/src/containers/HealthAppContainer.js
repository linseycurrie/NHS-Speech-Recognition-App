import React, {useState, useEffect} from 'react';
import InformationDetailComponent from '../components/InformationDetailComponent';
import InformationListComponent from '../components/InformationListComponent';
import SearchBarComponent from '../components/SearchBarComponent';
import SpeechComponent from '../components/SpeechComponent';
import UserFormComponent from '../components/UserFormComponent';

const HealthAppContainer = () => {

    return(
        <>
            <p>Container</p>

        
            <SearchBarComponent></SearchBarComponent>
            <InformationListComponent></InformationListComponent>
            <InformationDetailComponent></InformationDetailComponent>
            <UserFormComponent></UserFormComponent>


        </>
    )
}

export default HealthAppContainer;