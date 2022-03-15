
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react'
import './Main.scss';

import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';

function App(props:any) {
    
    return (
        <>
            {/* <Header/> */}
            <main>
                <h1 className='title'>첫편부터 </h1>
            </main>
            {/* <Footer/> */}
        </>
    );
}

export default App;
