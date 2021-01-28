import React, {useState, useEffect} from 'react';

const SearchBarComponent = ({onSearchCondition, onSearchPostCode, transcript, placeHolder}) => {

    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        setSearchTerm(transcript)
    }, [transcript])
    

    const handleTypedInput = function(event){
        const typedInput = event.target.value;
        setSearchTerm(typedInput)
    }

    const handleSubmit = function(event) {
        event.preventDefault();
        if(/^[A-Z]{1,2}[0-9]{1,2}[A-Z]{0,1} ?[0-9][A-Z]{2}$/i.test(searchTerm)) {
            onSearchPostCode(searchTerm)
            console.log("Postcode is: ", searchTerm);
        } else {
            onSearchCondition(searchTerm);
        }
        setSearchTerm("")
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search-field">Search:</label>
                <input type="text" id="search-field" placeholder={placeHolder} value={searchTerm} onChange={handleTypedInput} required />
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default SearchBarComponent;   