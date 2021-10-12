
import React from 'react';

const User = (props) => {
    const { displayName, email, photoURL } = props.user;
    return (
      <div>
        <h5>Name: {displayName}</h5>
        <p>Email: {email}</p>
        <img src={photoURL} alt="" />
      </div>
    );
};

export default User;