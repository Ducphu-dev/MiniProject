import React from 'react';
import './Main.scss';

import resource1 from '../../Assets/images/VerticalCard/resource1.png';
import resource2 from '../../Assets/images/VerticalCard/resource2.jpg';
import icon_new from '../../Assets/images/VerticalCard/icon_new.svg';
import icon_up from '../../Assets/images/VerticalCard/icon_up.svg';
import icon_time from '../../Assets/images/VerticalCard/badge_time.png';
import VerticalCard from '../../Component/VerticalCard/VerticalCard';
import icon_number from '../../Assets/images/VerticalCard/icon_15.png';
import icon_text from '../../Assets/images/VerticalCard/badge_novel.png';
import icon_cup from '../../Assets/images/VerticalCard/badge_right_million.png';
import icon_point from '../../Assets/images/VerticalCard/badge_point.png';

const cardList1 = [
    {
        img: resource1,
        title: '스폰 테 데이',
        content: '이 이야기 는 널 위한 게 될 거야',
        view: '10.1 만명',
        author: '마노 , 잭 라빈',
        icon: icon_new,
        icon_time: icon_time,
    },

    {
        img: resource1,
        title: '에스티 오',
        content: '날 부른 게 당신 입니까 ?',
        view: '32.8 만명',
        author: '탱커 , 뿡빠 , 공든 탑',
        icon: icon_up,
        icon_time: icon_time,
    },

    {
        img: resource1,
        title: '영원 의 주인 [ 개정판 ]',
        content: '따뜻함 이 번져가 는 학원 로맨스 !',
        view: '15.1 만명',
        author: '볕',
        icon: icon_new,
        icon_time: icon_time,
    },
    {
        img: resource1,
        title: '못난이 공녀 가 되었습니다',
        content: '이젠 , 내 마음대로 하겠어요',
        view: '71.9 만명',
        author: '강세 아 , 정 하임',
        icon: icon_up,
        icon_time: icon_time,
    },
];

const cardList2 = [
    {
        img: resource1,
        title: '나 오세요 , 로미오',
        content: '당신 , 스스로 나오게 될 거야',
        view: '41.4 만명',
        author: '양혜석 , ini',
        icon: icon_up,
        icon_time: icon_text,
    },

    {
        img: resource1,
        title: '우리집 이 거든요 !',
        content: '게스트 하우스 상속녀 !',
        view: '17.6 만명',
        author: '공룡',
        icon: icon_up,
        icon_time: icon_text,
        icon_number: icon_number,
    },

    {
        img: resource1,
        title: '엔젤릭 레이디',
        content: '나도 네가 불행 해 졌으면 좋겠어 .',
        view: '42.4 만명',
        author: '와플 푸 , 수수',
        icon: icon_up,
        icon_time: icon_text,
    },
    {
        img: resource1,
        title: '파멸 의 공주님',
        content: '복권 당첨 날 차원 이동 되다 ? !',
        view: '43.1 만명',
        author: '한세 람 , 개 냥빠',
        icon: icon_up,
        icon_time: icon_text,
    },
];

const cardList3 = [
    {
        img: resource1,
        title: '부활 한 악녀 를 찾지 마세요',
        content: '쟤네 그냥 망하게 두면 안 되나요 ?',
        view: '15.9 만명',
        author: '딸기 모카',
        icon: icon_new,
        icon_time: icon_time,
    },

    {
        img: resource1,
        title: '고용주 님 뜻 대로',
        content: '큰일 이에요 , 계속 좋아 져서',
        view: '12.7 만명',
        author: '서 아랑',
        icon: icon_up,
        icon_time: icon_time,
        icon_number: icon_number,
    },

    {
        img: resource1,
        title: '악마 의 주인님 이 되어 버렸다',
        content: '가장 강한 남자 를 제게 주세요 .',
        view: '21.5 만명',
        author: '꾸꾸 즈',
        icon: icon_new,
        icon_time: icon_time,
    },
    {
        img: resource1,
        title: '짙게 물든 사이',
        content: '당신 에게 미친 짓 을 해 보려고 .',
        view: '16.1 만명',
        author: '지아 진',
        icon: icon_up,
        icon_time: icon_time,
        icon_number: icon_number,
    },
];

const cardList4 = [
    {
        img: resource1,
        title: '이런 여 주인공 자리 는 사양 합니다',
        content: '남주 후보 님들 , 저 빼고 싸워 주세요 !',
        view: '1.2 만명',
        author: '체 르티',
        icon: icon_new,
        icon_time: icon_text,
    },

    {
        img: resource1,
        title: '안영 경찰서 형사 1 팀 에 어서 오세요',
        content: '경위 님 , 혹시 저 좋아 하세요 ?',
        view: '3,912 명',
        author: '김노운',
        icon: icon_up,
        icon_time: icon_text,
        icon_number: icon_number,
    },

    {
        img: resource1,
        title: '유령 공작 의 딸 이 되었다',
        content: '웬 곰 인형 에게 능력 을 들켜 버렸다 !',
        view: '2.8 만명',
        author: '유예 랑',
        icon: icon_new,
        icon_time: icon_text,
    },
    {
        img: resource1,
        title: '나는 킹 메이커 가 아니야',
        content: '나는 안빈 낙도 의 삶 을 즐길 거야 !',
        view: '9,806 명',
        author: 'graiyo',
        icon: icon_up,
        icon_time: icon_text,
        icon_number: icon_number,
    },
];

const cardList6 = [
    {
        img: resource1,
        title: '만렙 공녀 는 오늘도 무료 하다',
        content: '제자 들이 날 너무 사랑한다 .',
        view: '51.3 만명',
        author: '가을 , 로열 B',
        icon_time: icon_time,
    },

    {
        img: resource1,
        title: '악역 인데 , 인기 가 너무 많다',
        content: '나 악역 인데 , 너네 .. … 날 이렇게 좋아해 도 되는 거야 ?',
        view: '20.1 만명',
        author: '율자 , 거기 치킨 좀',
        icon_time: icon_time,
    },

    {
        img: resource1,
        title: '쪽쪽이 를 주세요',
        content: '쪽쪽이 는 나의 힘 !',
        view: '55 만명',
        author: '히엥 , 자은 향',
        icon_time: icon_time,
    },
];

const cardList7 = [
    {
        img: resource1,
        title: '사내 맞선',
        content: '잘리 느냐 , 결혼 하느냐 ?',
        view: '115.1 만명',
        author: '해화',
        icon_time: icon_time,
        icon_cup: icon_cup,
    },

    {
        img: resource1,
        title: '만렙 영웅님 께서 귀환 하신다 !',
        content: '천년 동안 굴렀 으면 됐 잖아 ? !',
        view: '82.7 만명',
        author: '악마 꼬리',
        icon_time: icon_time,
        icon: icon_up,
        icon_cup: icon_cup,
    },

    {
        img: resource1,
        title: '이차원 용병',
        content: '백수 , 악마 ( ? ) 와 계약 하다',
        view: '74.7 만명',
        author: '금호',
        icon_time: icon_time,
        icon_cup: icon_cup,
    },
];

const cardList8 = [
    {
        img: resource1,
        title: '알 잖아 , 소중한 너 인걸',
        content: "음원 차트 를 휩쓴 2002 의 주인공 ' 앤 마리 ' 에세이",
        view: '2.3 만명',
        author: '앤 마리',
        icon: icon_new,
        icon_time: '',
    },

    {
        img: resource1,
        title: '불편한 편의점',
        content: '불편한데 자꾸 가고 싶은 편의점 이 있다 !',
        view: '4.9 만명',
        author: '김호연',
        icon_time: '',
    },

    {
        img: resource1,
        title: '소소 하게 초인 들이 모여서 , 소 초모 !',
        content: '히어로 를 꿈꾸는 소소한 초인 들이 모였다 !',
        view: '5.4 만명',
        author: '권 시우',
        icon_time: icon_point,
        icon: icon_new,
    },
];

function App(props: any) {
    return (
        <>
            {/* <Header/> */}
            <main>
                <h1 className="title">첫편부터 </h1>
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
