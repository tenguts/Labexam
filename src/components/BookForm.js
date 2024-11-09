// src/components/BookForm.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const BookForm = ({ onSuccess, onNotify, book }) => { // Added onNotify as a prop
    const { id } = useParams(); // For edit mode, get ID from route parameters
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        published_year: '',
        genre: '',
        description: '',
    });

    // Populate form data if editing an existing book
    useEffect(() => {
        if (book) {
            setFormData(book);
        } else if (id) {
            // Fetch book data if navigating directly to edit route without prop
            fetchBook(id);
        }
    }, [book, id]);

    const fetchBook = async (bookId) => {
        try {
            const response = await fetch(`http://localhost:8000/api/books/${bookId}`);
            const data = await response.json();
            setFormData(data);
        } catch (error) {
            console.error("Error fetching book:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = id || book ? 'PUT' : 'POST';
        const url = id || book ? `http://localhost:8000/api/books/${id || book.id}` : 'http://localhost:8000/api/books';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) throw new Error('Failed to save book');
            const successMessage = id || book ? 'Book updated successfully!' : 'Book added successfully!';
            onSuccess(successMessage);
            onNotify(successMessage); // Notify Home component
            navigate('/'); // Navigate back to the book list
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="book-form">
                <h2>{id || book ? 'Edit Book' : 'Add New Book'}</h2>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
                <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
                <input
                    type="number"
                    name="published_year"
                    placeholder="Published Year"
                    value={formData.published_year}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
                <input
                    type="text"
                    name="genre"
                    placeholder="Genre"
                    value={formData.genre}
                    onChange={handleChange}
                    required
                    className="form-input"
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                />
                <div className="button-group">
                    <button type="submit" className="submit-button">{id || book ? 'Update Book' : 'Add Book'}</button>
                    <button type="button" onClick={() => navigate('/')} className="cancel-button">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default BookForm;
