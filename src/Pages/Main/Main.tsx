

import React from 'react';
import '../../Assets/style/_grid.scss';
import TrendingTop from '../../Component/TrendingTop/TrendingTop';
import './Main.scss';



function App(props:any) {
    
    return (
        <>
            <div className='container'>
                <TrendingTop/>
            </div>
            <main>
                <h1 className='title'>첫편부터 </h1>
            </main>
            {/* <Footer/> */}
        </>
    );
}

export default App;
