import React, { useState } from 'react';

const SearchComponent = () => {
    const [text, setText] = useState('');
    const [recording, setRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioURL, setAudioURL] = useState('');
    let audioBlob = null;

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
            audioBlob = new Blob([e.data], { type: 'audio/mp3' });
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
            if (text && !audioURL) {
                fetch('http://your-backend-url.com/api/endpoint', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        text
                    })
                })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.error(error))
            }
            else if (!text && audioURL) {
                const formData = new FormData();
                formData.append('audio', audioBlob);
                fetch('http://your-backend-url.com/api/endpoint', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.error(error))
            }
            deleteAudio();
            setText('');
        } else {
            console.log('Please enter text or record audio');
            alert('Please enter text or record audio');
        }
    };

    return (
        <>
            <div className="tutorial-text" id="UseTheRaiven">
                <h1>How to use Raiven</h1>
                <p>You can use the Raiven either typing or speaking. There is a panel for both us methods.
                    Write your demands in the text box or click the record button, speak what you want and stop recording.
                    After indicating your demands, click the submit button. After a brief time rAIven gives you the best recommendation based on your wants.
                    The possible locations of the hotels also will be displayed in the map. </p>
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
