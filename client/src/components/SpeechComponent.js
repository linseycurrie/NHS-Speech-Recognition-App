import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import SearchBarComponent from './SearchBarComponent';

const SpeechComponent = ({onSearchCondition, onSearchPostCode, searchResult, onReset, placeHolder}) => {



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
            <p>Please start <b>typing</b> your search term into the below field or<br />click <b>"Start Recording"</b> and speak your search term and then click <b>"Search"</b>.</p>
            <SearchBarComponent onSearchCondition={onSearchCondition} onSearchPostCode={onSearchPostCode} onClear={handleReset} transcript={transcript} placeHolder={placeHolder}/>
            <button onClick={SpeechRecognition.startListening}>Start Recording</button>
            <button onClick={handleReset}>Reset</button>
            <br /><br />
        </>
    )
}

export default SpeechComponent;