import React from 'react';

const InformationDetailComponent = ({searchResult}) => {

    if(!searchResult){
        return null
        
    } else {
        const newArray = []
            for(let resultsFirstArray of searchResult.mainEntityOfPage) {
                for(let resultsSecondArray of resultsFirstArray.mainEntityOfPage) {
                    const text = resultsSecondArray.text
                        let parser = new DOMParser();
                        let htmlText = parser.parseFromString(text, 'text/html');
                        newArray.push(htmlText.body);
                }
            }

            

        return(
            <>
                <h2>{searchResult.name}</h2>
                <h4>{searchResult.description}</h4>
                    {newArray}
                {/* {searchResult.mainEntityOfPage[1].mainEntityOfPage[0].text} */}
                
            
            </>
        )
    }
}

export default InformationDetailComponent;

