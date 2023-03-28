import React from 'react';
import PropTypes from "prop-types";

function User({user}) {
    const {name, email, phone} = user;
    return (
        <div>
            <h4>Name: {name}</h4>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
        </div>
    );
}

User.propTypes = {
    user: PropTypes.exact({
        name: PropTypes.string.isRequired,
        phone: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired
    })
}

export default User;