import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechComponent = ({onSpeech}) => {

    const { transcript, resetTranscript } = useSpeechRecognition()

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    } 

    const onStop = () => {
        console.log("onStop is being run");
        SpeechRecognition.stopListening()
        onSpeech({transcript})
    }
    
    return(
        <>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={onStop}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>You said: {transcript}</p>
        </>
    )
}

export default SpeechComponent;