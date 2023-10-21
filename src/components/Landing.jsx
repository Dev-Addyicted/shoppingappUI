import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Login from './Login';
import Product from './Product';

const Landing = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Landing;