import React, {useState, useEffect} from 'react';

const SearchBarComponent = ({onSearch, transcript, }) => {

    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        setSearchTerm(transcript)
    }, [transcript])
    

    const handleTypedInput = function(event){
        const typedInput = event.target.value;
        const lowerCaseInput = typedInput.toLowerCase()
        setSearchTerm(lowerCaseInput)
    }

    const handleSubmit = function(event) {
        event.preventDefault();
        onSearch(searchTerm) ;
        setSearchTerm("")
    }

    

    return(
        <>
            <h2>Search a condition:</h2>
            <p>Please start <b>typing</b> your search term into the below field or<br />click <b>"Start Recording"</b> and speak your search term and then hit <b>"Submit"</b>.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g. flu" value={searchTerm} onChange={handleTypedInput} required />
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default SearchBarComponent;   