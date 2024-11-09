// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import ViewBook from './pages/ViewBook';
import Menu from './components/Menu';
import './styles/styles.css';

const App = () => {
    return (
        <Router>
            <Menu />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddBook />} />
                    <Route path="/edit" element={<EditBook />} />
                    <Route path="/view/:id" element={<ViewBook />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
