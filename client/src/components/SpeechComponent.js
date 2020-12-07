import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import SearchBarComponent from './SearchBarComponent';

const SpeechComponent = ({onSearch}) => {

    const { transcript, resetTranscript } = useSpeechRecognition()

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }
    
    return(
        <>
            <SearchBarComponent onSearch={onSearch} transcript={transcript}/>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <br />
        </>
    )
}

export default SpeechComponent;