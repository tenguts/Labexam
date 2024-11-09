// src/components/EditBook.js
import React, { useState, useEffect } from 'react';
import BookForm from '../components/BookForm';
import Notification from '../components/Notification';
import '../styles/styles.css';

const EditBook = ({ onNotify }) => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [notification, setNotification] = useState('');

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/books');
            const data = await response.json();
            setBooks(data);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    const handleEdit = (book) => {
        setSelectedBook(book);
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:8000/api/books/${id}`, { method: 'DELETE' });
            setBooks(books.filter((book) => book.id !== id));
            const successMessage = 'Book deleted successfully!';
            setNotification(successMessage);
            setTimeout(() => setNotification(''), 3000);
            onNotify(successMessage);
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    };

    const handleSuccess = (message) => {
        setNotification(message);
        setSelectedBook(null);
        fetchBooks();
        setTimeout(() => setNotification(''), 3000);
        onNotify(message); // Pass notification to Home component
    };

    return (
        <div className="edit-book-container">
            <h1>Edit Books</h1>
            <div className="book-list">
                {books.map((book) => (
                    <div key={book.id} className="card">
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <button onClick={() => handleEdit(book)}>Edit</button>
                        <button onClick={() => handleDelete(book.id)}>Delete</button>
                    </div>
                ))}
            </div>
            {selectedBook && (
                <div className="edit-book-form">
                    <h2>Edit Book</h2>
                    <BookForm 
                        onSuccess={handleSuccess} 
                        onNotify={onNotify} // Pass onNotify to handle notifications
                        book={selectedBook} 
                    />
                </div>
            )}
            {notification && <Notification message={notification} />}
        </div>
    );
};

export default EditBook;
