import React from 'react';
import { RecommendListImg } from '../../Assets/data/Recommend';
import { cardList1, cardList2, cardList3, cardList4, cardList5, cardList6, cardList7, cardList8, cardList9 } from '../../Assets/data/verticalCard';
import '../../Assets/style/_grid.scss';
import Recommend from '../../Component/Recommend/Recommend';
import TrendingTop from '../../Component/TrendingTop/TrendingTop';
import VerticalCard from '../../Component/VerticalCard/VerticalCard';
import './Main.scss';

function App(props: any) {
    return (
        <>
            <div className="container">
                <TrendingTop />
            </div>
            <main>
                <VerticalCard cardList={cardList1} title="기다리면 무료 웹툰" volume="( 3,577 )" />
                <VerticalCard cardList={cardList2} title="인기 웹툰" volume="( 124 )" />
                <VerticalCard cardList={cardList3} title="기다리면 무료 소설" volume="( 4,548 )" />
                <VerticalCard cardList={cardList4} title="인기 웹 소설" volume="( 82 )" />
                <VerticalCard cardList={cardList5} title="실시간 랭킹" volume="" rank={true} />
                <VerticalCard cardList={cardList6} title="도전 ! 밀리언 페이지 웹툰" volume="" />
                <VerticalCard cardList={cardList7} title="밀리언 페이지 소설" volume="" />
                <VerticalCard cardList={cardList8} title="화제 의 베스트셀러" volume="" />
                <VerticalCard cardList={cardList9} title="화제 의 베스트셀러" volume="" title1="방송" title2="핫픽" />
                <Recommend img={RecommendListImg} />
            </main>
            {/* <Footer/> */}
        </>
    );
}

export default App;
