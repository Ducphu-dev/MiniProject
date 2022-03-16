

import React from 'react';
import '../../Assets/style/_grid.scss';
import TrendingTop from '../../Component/TrendingTop/TrendingTop';
import RecommendList from '../../Component/RecommendList/RecommendList';
import './Main.scss';



function App(props:any) {
    
    
    return (
        <>
            <main>
                <div className='container'>
                    <TrendingTop/>
                    <RecommendList/>
                    <RecommendList/>
                </div>
            </main>
            {/* <Footer/> */}
        </>
    );
}

export default App;
