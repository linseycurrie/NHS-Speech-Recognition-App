import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const InformationDetailComponent = ({searchResult}) => {

    if(!searchResult){

        return null
        
    } else {
        const newArray = []
        for(let resultsFirstArray of searchResult.mainEntityOfPage) {
            for(let resultsSecondArray of resultsFirstArray.mainEntityOfPage) {
                const text = resultsSecondArray.text
                    newArray.push(text);
            }
        }
  
        return(
            <>
                <h2>{searchResult.name}</h2>
                
                {ReactHtmlParser(newArray)}
            
            </>
        )
    }
}

export default InformationDetailComponent;

