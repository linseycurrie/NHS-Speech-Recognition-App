import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './InformationDetailComponent.css';

const InformationDetailComponent = ({searchResult}) => {

    if(!searchResult){
        return null
    } else if(searchResult.error) {
        return (
            "Sorry, we do not hold information about that condition."
        )
    } else {
        const newArray = []
        for(let resultsFirstArray of searchResult.mainEntityOfPage) {
            for(let resultsSecondArray of resultsFirstArray.mainEntityOfPage) {
                const text = resultsSecondArray.text
                newArray.push(text);
            }
        }
  
        return(
            <div className="info-panel">
                <h2>{searchResult.name}</h2>
                <h3>{searchResult.description}</h3>
                {ReactHtmlParser(newArray.join(""))}
            </div>
        )
    }
}

export default InformationDetailComponent;

