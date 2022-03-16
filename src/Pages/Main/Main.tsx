import React from 'react';
import { cardList1, cardList2, cardList3, cardList4, cardList6, cardList7, cardList8 } from '../../Assets/data/verticalCard';
import '../../Assets/style/_grid.scss';
import TrendingTop from '../../Component/TrendingTop/TrendingTop';
import VerticalCard from '../../Component/VerticalCard/VerticalCard';
import './Main.scss';



function App(props: any) {
    return (
        <>
            <div className='container'>
                <TrendingTop/>
            </div>
            <main>
                <VerticalCard cardList={cardList1} title="기다리면 무료 웹툰" volume="( 3,577 )" />
                <VerticalCard cardList={cardList2} title="인기 웹툰" volume="( 124 )" />
                <VerticalCard cardList={cardList3} title="기다리면 무료 소설" volume="( 4,548 )" />
                <VerticalCard cardList={cardList4} title="인기 웹 소설" volume="( 82 )" />
                <VerticalCard cardList={cardList6} title="도전 ! 밀리언 페이지 웹툰" volume="" />
                <VerticalCard cardList={cardList7} title="밀리언 페이지 소설" volume="" />
                <VerticalCard cardList={cardList8} title="화제 의 베스트셀러" volume="" />
            </main>
            {/* <Footer/> */}
        </>
    );
}

export default App;
