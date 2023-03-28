import React from 'react';
import Person from "./Person.jsx";
import PropTypes from "prop-types";


function PersonList({persons}) {
    return (
        <div>
            {persons.map(person =>
            <Person key={person.id} person={person}/>
            )}
        </div>
    );
}

PersonList.propTypes = {
    persons: PropTypes.array.isRequired
}

export default PersonList;