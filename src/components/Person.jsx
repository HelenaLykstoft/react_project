import React from 'react';
import PropTypes from "prop-types";

function Person({person}) {
    return (
        <div>
            <h3>Name: {person.name}</h3>
            <p>Email: {person.email}</p>
        </div>
    );
}

Person.propTypes = {
    person: PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    })
}

export default Person;