// src/components/BookList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const BookList = ({ books, onDelete, onEdit, showViewButton }) => {
    return (
        <div className="book-list">
            <div className="card-container">
                {books.map((book) => (
                    <div key={book.id} className="card">
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <div className="card-actions">
                            {showViewButton ? (
                                <Link to={`/view/${book.id}`}>
                                    <button className="view-button" aria-label={`View details for ${book.title}`}>View</button>
                                </Link>
                            ) : (
                                <>
                                    <button 
                                        onClick={() => onEdit(book.id)} 
                                        className="edit-button" 
                                        aria-label={`Edit ${book.title}`}>
                                        Edit
                                    </button>
                                    <button 
                                        onClick={() => onDelete(book.id)} 
                                        className="delete-button" 
                                        aria-label={`Delete ${book.title}`}>
                                        Delete
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;
