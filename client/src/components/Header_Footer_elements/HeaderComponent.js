import React from 'react';
import './HeaderComponent.css';

const HeaderComponent = ({headerCopy, headerBanner}) => {
    return(
    <>
        <h1>{headerCopy}</h1>
        
        <img className="header-image" src={headerBanner} alt=""></img>

        <img className="rainbow-seperator" src="/rainbow-seperator.png" alt=""></img>
        
        <br />
    </>
    )
}
export default HeaderComponent;