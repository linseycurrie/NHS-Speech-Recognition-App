import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import SearchBarComponent from './SearchBarComponent';

const SpeechComponent = ({onSearch, searchResult, onReset}) => {



    const { transcript, resetTranscript } = useSpeechRecognition()

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }
    
    const handleReset = function(){
        resetTranscript()
        return onReset()
        }

    return(
        <>
            <SearchBarComponent onSearch={onSearch} onClear={handleReset} transcript={transcript}/>
            <button onClick={SpeechRecognition.startListening}>Start Recording</button>
            {/* <button onClick={SpeechRecognition.stopListening}>Stop</button> */}
            <button onClick={handleReset}>Reset</button>
            <br /><br />
        </>
    )
}

export default SpeechComponent;