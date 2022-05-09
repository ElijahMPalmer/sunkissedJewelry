import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo from './logo.svg';
import './App.css';
import particlesOptions from "./particles.json";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    const particlesInit = useCallback(stars => {
        loadFull(stars);
    }, [])


    return (
        <div className="App">
            <Header/>
            <Home/>
            <Footer/>
            <Particles 
            id='particles'
            options={particlesOptions} 
            init={particlesInit}/>

        </div>
    );
}

export default App;
