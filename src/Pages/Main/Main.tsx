
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react'
import './App.css';

import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';

function App(props:any) {
    
    return (
        <>
            <Header/>
            <Footer/>
        </>
    );
}

export default App;
