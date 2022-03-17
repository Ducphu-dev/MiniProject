

import CardRecommend_3 from '../../Assets/images/HorizontalCard/resource (1).jpg';
import CardRecommend_4 from '../../Assets/images/HorizontalCard/resource (2).jpg';
import CardRecommend_2 from '../../Assets/images/HorizontalCard/resource (8).png';
import CardRecommend_1 from '../../Assets/images/HorizontalCard/resource.jpg';
import Title_badge from '../../Assets/images/HorizontalCard/title_badge.png';
import Title_badge_1 from '../../Assets/images/HorizontalCard/title_badge_1.png';
import Card_badge_time from '../../Assets/images/HorizontalCard/badge_time.png';
import Card_badge_10min from '../../Assets/images/HorizontalCard/badge_10min.png';
import Arrow_icon from '../../Assets/images/HorizontalCard/arrow_icon.svg';
import '../../Assets/style/_reset.scss';
import HorizontalCardNoRank from '../HorizontalCard/HorizontalCardNoRank';
import './RecommendList.scss';


function RecommendList(props:any) {
    
    
    const TopRecommendList = [
        {
            _id: 1,
            Card_image: CardRecommend_1,
            Card_title: {
                Card_title_name :"인민을 위해 복무하라",
                Card_title_badge :Title_badge,
            },
            Card_viewer: "2,650",
            Card_badgeTop: Card_badge_time,
        },
        {
            _id: 2,
            Card_image: CardRecommend_2,
            Card_title: {
                Card_title_name:"용과 주근깨 공주",
                Card_title_badgeTop :Title_badge,
            },
            Card_viewer: "2,986",
            Card_badgeTop: Card_badge_time,
        },
        {
            _id: 3,
            Card_image: CardRecommend_3,
            Card_title: {
                Card_title_name:"어 마우스풀 오브 에어",
                Card_title_badge :Title_badge_1,
            },
            Card_viewer: "50",
            Card_badgeTop: Card_badge_time,
        },
        {
            _id: 4,
            Card_image: CardRecommend_4,
            Card_title: {
                Card_title_name:"킹메이커",
                Card_title_badge :Title_badge_1,
            },
            Card_viewer: "733",
            Card_badgeTop: Card_badge_time,
        },
        {
            _id: 5,
            Card_image: CardRecommend_2,
            Card_title: {
                Card_title_name:"용과 주근깨 공주",
                Card_title_badge :Title_badge,
            },
            Card_viewer: "2,986",
            Card_badgeTop: Card_badge_time,
        },
    ]
    
    const TopRecommendList_1 = [
        {
            _id: 1,
            Card_image: CardRecommend_1,
            Card_title: {
                Card_title_name :"인민을 위해 복무하라",
                Card_title_badge :Title_badge,
            },
            Card_viewer: "2,650",
            Card_badgeBottom: "극장동시"
        },
        {
            _id: 2,
            Card_image: CardRecommend_2,
            Card_title: {
                Card_title_name:"용과 주근깨 공주",
                Card_title_badgeTop :Title_badge,
            },
            Card_viewer: "2,986",
        },
        {
            _id: 3,
            Card_image: CardRecommend_3,
            Card_title: {
                Card_title_name:"어 마우스풀 오브 에어",
                Card_title_badge :Title_badge_1,
            },
            Card_viewer: "50",
            Card_badgeTop: Card_badge_10min,
            Card_badgeBottom: "극장동시"
        },
        {
            _id: 4,
            Card_image: CardRecommend_4,
            Card_title: {
                Card_title_name:"킹메이커",
                Card_title_badge :Title_badge_1,
            },
            Card_badgeBottom: "극장동시"
        },
        {
            _id: 5,
            Card_image: CardRecommend_2,
            Card_title: {
                Card_title_name:"용과 주근깨 공주",
                Card_title_badge :Title_badge,
            },
            Card_viewer: "2,986",
        },
    ]
    
    
    

    
    return (
        <div className='block-recommend'>
            <div className='block-recommend_header'>
                <div className="block-recommend_header-right">
                    <div className="header-title">
                        <h3>기다리면 무료 VOD</h3>    
                    </div>
                </div>
                <div className="block-recommend_header-left">
                    <div className="header-link">
                        <a href="">더보기</a>    
                        <img src={Arrow_icon} />
                    </div>
                </div>
            </div>
            <HorizontalCardNoRank
                HorizontalCard={TopRecommendList}
                cols={"horizontal-4"}
                numberLimited={4}
            />
            
            
        </div>
        
    );
}

export default RecommendList;