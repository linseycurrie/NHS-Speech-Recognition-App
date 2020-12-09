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
            <h3>Search a condition:</h3>
            <p>You can type your search term into the below field OR you can click "Start" and speak your search term and then hit "Submit".</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g. flu" value={searchTerm} onChange={handleTypedInput} required />
                <input type="submit" />
            </form>
        </>
    )
}

export default SearchBarComponent;   