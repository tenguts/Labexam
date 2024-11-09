// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import Notification from '../components/Notification';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Home = () => {
    const [books, setBooks] = useState([]);
    const [notification, setNotification] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const fetchBooks = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/books');
            if (!response.ok) throw new Error('Failed to fetch books');
            const data = await response.json();
            setBooks(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const handleNotification = (message) => {
        setNotification(message);
        setTimeout(() => setNotification(''), 3000); // Automatically hide notification after 3 seconds
    };

    return (
        <div>
            <h1>Book List</h1>
            <BookList books={books} showViewButton={true} onNotify={handleNotification} />
            {notification && <Notification message={notification} />}
        </div>
    );
};

export default Home;
