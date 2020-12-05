import React, {useState} from 'react';
import SpeechComponent from './SpeechComponent';

const SearchBarComponent = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleSpeechInput = function(input){
        // const speechInput = event.target.value;
        setSearchTerm(input.transcript)

    }

    return(
        <>
            <p>Search:</p>
            <form>
                <input type="text" placeholder="e.g. flu" value={searchTerm} />
                <input type="submit" />
            </form>
            <SpeechComponent onSpeech={handleSpeechInput}/>
        </>
    )
}

export default SearchBarComponent;