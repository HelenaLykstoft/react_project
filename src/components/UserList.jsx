import React from 'react';
import User from "./User.jsx";
import PropTypes from "prop-types";


function UserList({users}) {
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>
            )}
        </div>
    );
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList;