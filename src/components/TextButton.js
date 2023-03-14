import React, { useState, useRef, useEffect } from 'react';

function TextButton() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [textValue, setTextValue] = useState('');
    const textAreaRef = useRef(null);

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    };

    const handleInputChange = (event) => {
        setTextValue(event.target.value);
    };

    const handleTextAreaClick = (event) => {
        event.stopPropagation();
    };

    const handleRemoveButtonClick = () => {
        setIsExpanded(false);
        setTextValue('');
    };

    const handleSubmitClick = (event) => {
        event.preventDefault();
        alert(`Text submitted: ${textValue}`);
        setIsExpanded(false);
        setTextValue('');
    };

    useEffect(() => {
        if (isExpanded) {
            textAreaRef.current.focus();
        }
    }, [isExpanded]);

    return (
        <div className="button-container">
            {isExpanded ? (
                <form className="text-block" onSubmit={handleSubmitClick}>
                    <input
                        className="text-input"
                        value={textValue}
                        onChange={handleInputChange}
                        onClick={handleTextAreaClick}
                        onKeyDown={(e) => {
                            if (e.target.tagName.toLowerCase() !== 'input') {
                                e.stopPropagation();
                            }
                        }}
                        placeholder="Type what you want..."
                        ref={textAreaRef}
                    />
                    <br />
                    <button className="submit-button" type="submit">Submit</button>
                    <button className="remove-button" onClick={handleRemoveButtonClick}>
                        Close
                    </button>
                </form>
            ) : (
                <button className="button" onClick={handleButtonClick}>
                    Click me to Type
                </button>
            )}
        </div>
    );
}

export default TextButton;