import React, {useState, useEffect} from 'react';

const SearchBarComponent = ({transcript}) => {

    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        setSearchTerm(transcript)
    }, [transcript])
    

    const handleTypedInput = function(event){
        const typedInput = event.target.value;
        setSearchTerm(typedInput)
    }

    const handleSubmit = function() {
        return(
            <p>This is the handleSubmit function return</p>
        )
    }

    return(
        <>
            <p>Search:</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g. flu" value={searchTerm} onChange={handleTypedInput} />
                <input type="submit" />
            </form>
        </>
    )
}

export default SearchBarComponent;   