// src/pages/AddBook.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import BookForm from '../components/BookForm';
import Notification from '../components/Notification';

const AddBook = () => {
    const [notification, setNotification] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSuccess = (message) => {
        setNotification(message);
        setTimeout(() => {
            setNotification('');
            navigate('/'); // Navigate back to Home after 3 seconds
        }, 3000); // Automatically hide notification after 3 seconds
    };

    return (
        <div className="add-book-page">
            <h1>Add New Book</h1>
            <BookForm onSuccess={handleSuccess} />
            {notification && <Notification message={notification} />}
        </div>
    );
};

export default AddBook;
