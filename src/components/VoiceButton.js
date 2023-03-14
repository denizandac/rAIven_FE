import React, { useState, useRef } from 'react';

function VoiceButton() {
    const [isRecording, setIsRecording] = useState(false);
    const [recordings, setRecordings] = useState([]);
    const mediaRecorderRef = useRef(null);

    const handleStartRecording = () => {
        setIsRecording(true);

        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const mediaRecorder = new MediaRecorder(stream);
                mediaRecorderRef.current = mediaRecorder;

                const chunks = [];
                mediaRecorder.addEventListener("dataavailable", event => {
                    chunks.push(event.data);
                });

                mediaRecorder.addEventListener("stop", () => {
                    const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
                    setRecordings(prevRecordings => [...prevRecordings, blob]);
                });

                mediaRecorder.start();
            });
    };

    const handleStopRecording = () => {
        setIsRecording(false);
        mediaRecorderRef.current.stop();
    };

    const handleDeleteRecording = (index) => {
        setRecordings(prevRecordings => prevRecordings.filter((_, i) => i !== index));
    };

    const [showRecorder, setShowRecorder] = useState(false);
    const [showButton, setShowButton] = useState(true);

    const handleShowRecorder = () => {
        setShowRecorder(true);
        setShowButton(false);
    };

    const handleCloseRecorder = () => {
        setShowRecorder(false);
        setShowButton(true);
    };

    return (
        <div className='voutercontainer'>
            {showButton && <button className='vbutton' onClick={handleShowRecorder}>Click me to Talk</button>}
            {showRecorder && (
                <div className="vinnercontainer">
                    <button className='Record-button' onClick={handleStartRecording} disabled={isRecording}>Record</button>
                    <button className='Stop-button' onClick={handleStopRecording} disabled={!isRecording}>Stop</button>
                    <ul>
                        {recordings.map((recording, index) => (
                            <li key={index}>
                                <audio src={URL.createObjectURL(recording)} controls />
                                <button className='Delete-button' onClick={() => handleDeleteRecording(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                    <button className='Close-button' onClick={handleCloseRecorder}>Close</button>
                </div>
            )}
        </div>
    );
}

export default VoiceButton;
