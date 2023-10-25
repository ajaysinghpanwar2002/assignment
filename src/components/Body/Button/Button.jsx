import React from 'react';
import './Button.css'

function Button(props) {
    const { text, onClick, disabled } = props;
    return (
        <button onClick={onClick} disabled={disabled} className='button-style'>
            {text}
        </button>
    );
}

export default Button;
