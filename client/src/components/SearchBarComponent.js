import React, {useState} from 'react';
import SpeechComponent from './SpeechComponent';

const SearchBarComponent = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleSpeechInput = function(input){
        setSearchTerm(input.transcript)
    }

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
            <SpeechComponent onSpeech={handleSpeechInput}/>
        </>
    )
}

export default SearchBarComponent;