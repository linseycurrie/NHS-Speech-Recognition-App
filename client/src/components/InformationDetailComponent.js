import React from 'react';

const InformationDetailComponent = ({searchResult}) => {

    if(!searchResult){
        console.log("Null", searchResult);
        return null
        
    } else {
        console.log("else:" , searchResult)
        // const firstArray = searchResult.mainEntityOfPage.map((result, index) => {
        //     return result
        // })
        // const secondArray = firstArray.mainEntityOfPage.map((nestedResult, index) =>{
        //     return nestedResult
        // })
        return(
            <>
                <h2>{searchResult.name}</h2>
                <h4>{searchResult.description}</h4>
                <h5>{searchResult.mainEntityOfPage[0].mainEntityOfPage[0].text}</h5>
                
            
            </>
        )
    }
}

export default InformationDetailComponent;

