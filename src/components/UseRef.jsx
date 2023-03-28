import React from 'react';
import {useRef} from "react";
import PropTypes from 'prop-types';

UseRef.propTypes = {

};

function UseRef(props) {
    const inputElement = useRef(null);

    const focusInput = () => {
        console.log(inputElement.current.value)
        inputElement.current.focus()
    }

    return (
        <div>
            <input type={"text"} ref={inputElement}/>
            <button onClick={focusInput}>Click me!</button>
        </div>
    );
}

export default UseRef;