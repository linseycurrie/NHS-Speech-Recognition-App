import React from 'react';
import './HeaderComponent.css';

const HeaderComponent = ({headerCopy, headerBanner}) => {
    return(
    <>
        <h1>{headerCopy}</h1>
        <img className="rainbow-seperator" src="/rainbow-seperator.png" alt=""></img>
<<<<<<< HEAD
        <img className="header-image" src={headerBanner} alt=""></img>
=======
        <br></br>
>>>>>>> f49c60c6e3546e9551b009f4b9cb43706e0e0223
    </>
    )
}
export default HeaderComponent;