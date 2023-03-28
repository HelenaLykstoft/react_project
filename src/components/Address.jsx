import React from 'react';
import PropTypes from "prop-types";
import Person from "./Person.jsx";


function Address(addr) {
    const{street, number, city} = addr;
    return (
        <div>
            <h2>Address</h2>
            <p>Street: {addr.street}</p>
            <p>Number: {addr.number}</p>
            <p>City: {city}</p>
        </div>
    );
}

Address.propTypes = {
    address: PropTypes.exact({
        street: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired
    })
}


// function Address(props) {
//     return (
//         <div>
//             <h2>Adresse</h2>
//             <p>Street: {props.address.street}</p>
//             <p>Number: {props.address.number}</p>
//             <p>City: {props.address.city}</p>
//         </div>
//     );
// }

export default Address;