import React, {useState} from "react";
import PropTypes from 'prop-types';

Counter.propTypes = {
    
};

function Counter(props) {

    const {count, setCount} = props
    const clickAddHandler = () => {
        setCount(count+1);
    }
    const clickSubtractHandler = () => {
        setCount(count-1);
    }
    const clickResetHandler = () => {
        setCount(0);
    }
    return (
        <div>
           Count: {props.count}
            <button onClick={clickAddHandler}>Add</button>
            <button onClick={clickSubtractHandler}>Subtract</button>
            <button onClick={clickResetHandler}>Reset</button>
        </div>
    );
}

export default Counter;