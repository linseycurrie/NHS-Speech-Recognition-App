import React from 'react';
import './HeaderComponent.css';

const HeaderComponent = ({headerCopy}) => {
    return(
    <>
        <h1>{headerCopy}</h1>
        <img className="rainbow-seperator" src="/rainbow-seperator.png" alt=""></img>
        <br></br>
    </>
    )
}
export default HeaderComponent;