import React from 'react';
import '../styles/styles.css';

const Notification = ({ message }) => {
    return (
        <div className="notification">
            {message}
        </div>
    );
};

export default Notification;
