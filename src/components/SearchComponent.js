import React, { useState } from 'react';

const SearchComponent = () => {
    const [text, setText] = useState('');
    const [recording, setRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioURL, setAudioURL] = useState('');

    // start recording audio
    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const mediaRecorder = new MediaRecorder(stream);
                setMediaRecorder(mediaRecorder);
                mediaRecorder.start();
                setRecording(true);
                setText('');
            })
            .catch(error => {
                console.log('Error: ', error);
            });
    };

    // stop recording audio
    const stopRecording = () => {
        mediaRecorder.stop();
        mediaRecorder.ondataavailable = (e) => {
            const audioBlob = new Blob([e.data], { type: 'audio/mp3' });
            const audioURL = URL.createObjectURL(audioBlob);
            setAudioURL(audioURL);
            setRecording(false);
        };
    };

    // delete saved audio
    const deleteAudio = () => {
        setAudioURL('');
    };

    // submit form
    const submitForm = () => {
        if (text || audioURL) {
            console.log('Text: ', text);
            console.log('Audio URL: ', audioURL);
            alert('Form submitted successfully!');
        } else {
            console.log('Please enter text or record audio');
            alert('Please enter text or record audio');
        }
    };

    return (
        <>
            <div className="tutorial-text">
                <h1>How to use Raiven</h1>
                <p>Click on the squares to reveal the color. If you click on a square that is not the same color as the one in the top left corner, you lose. If you click on all the squares that are the same color as the one in the top left corner, you win!</p>
            </div>
            <div className="search-bar">
                <textarea
                    placeholder="Enter text here"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={audioURL || recording ? 1 : 5}
                    cols={30}
                    disabled={recording || audioURL}
                />
            </div>
            <div className='functional-buttons'>
                <div className="voice-recorder">
                    {audioURL ? (
                        <div className="saved-voice">
                            <audio src={audioURL} controls />
                            <button className='sc-button' onClick={deleteAudio}>Delete Audio</button>
                        </div>
                    ) : (
                        <div>
                            <button className='sc-button' onClick={startRecording} disabled={recording}>
                                {recording ? <div className="recording-animation" /> : 'Start Recording'}
                            </button>
                            <button className='sc-button' onClick={stopRecording} disabled={!recording}>
                                Stop Recording
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <button className='sc-button' onClick={submitForm}>Submit</button>
        </>
    );
};

export default SearchComponent;
