import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Peliculas from './components/Peliculas';
import About from './components/About';
import Home from './components/Home';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/peliculas" element={<Peliculas />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;