import React, {useEffect, useRef, useState} from 'react';

function UseRefPreviousState(props) {
    const [inputValue, setInputValue] = useState();
    const previousInputValue = useRef();

    useEffect(()=> {
        previousInputValue.current = inputValue;
    },[inputValue]);

    return (
        <div>
            <input type="text" defaultValue={inputValue}
            onChange={(event) => setInputValue(event.target.value)}/>
            <h2>Current value: {inputValue}</h2>
            <h2>Previous value: {previousInputValue.current}</h2>
        </div>
    );
}

export default UseRefPreviousState;