
import { useEffect, useState } from 'react';
import CardImage_1 from '../../Assets/images/HorizontalCard/resource.png';
import CardImage_2 from '../../Assets/images/HorizontalCard/resource (1).png';
import CardImage_3 from '../../Assets/images/HorizontalCard/resource (2).png';
import CardImage_4 from '../../Assets/images/HorizontalCard/resource (3).png';
import CardImage_5 from '../../Assets/images/HorizontalCard/resource (4).png';
import CardImage_6 from '../../Assets/images/HorizontalCard/resource (5).png';
import CardImage_7 from '../../Assets/images/HorizontalCard/resource (6).png';
import CardImage_8 from '../../Assets/images/HorizontalCard/resource (7).png';

import '../../Assets/style/_reset.scss';
import HorizontalCard from '../HorizontalCard/HorizotalCard';
import './TrendingTop.scss';





function TrendingTop(props:any) {
    
    const TopTrendingList = [
        {
            _id: 1,
            Card_image: CardImage_1,
            Card_title: "악녀는 마리오네트",
            Card_viewer: 118.1,
            Card_rank: "9.9",
            Card_category: 4
        },
        {
            _id: 2,
            Card_image: CardImage_2,
            Card_title: "도굴왕",
            Card_viewer: 202.3,
            Card_rank: "9.9",
            Card_category: 2
        },
        {
            _id: 3,
            Card_image: CardImage_3,
            Card_title: "궁귀검신",
            Card_viewer: 52.5,
            Card_rank: "10.0",
            Card_category: 1
        },
        {
            _id: 4,
            Card_image: CardImage_4,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.6",
            Card_category: 2
        },
        {
            _id: 5,
            Card_image: CardImage_5,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.8",
            Card_category: 3
        },
        {
            _id: 6,
            Card_image: CardImage_6,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.9",
            Card_category: 1
        },
        {
            _id: 7,
            Card_image: CardImage_7,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.9",
            Card_category: 5
        },
        {
            _id: 8,
            Card_image: CardImage_8,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "8.9",
            Card_category: 4
        },
        {
            _id: 9,
            Card_image: CardImage_4,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "10.0",
            Card_category: 3
        },
        {
            _id: 10,
            Card_image: CardImage_1,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.7",
            Card_category: 4
        },
        {
            _id: 11,
            Card_image: CardImage_2,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "10.0",
            Card_category: 1
        },
        {
            _id: 1,
            Card_image: CardImage_1,
            Card_title: "악녀는 마리오네트",
            Card_viewer: 118.1,
            Card_rank: "9.9",
            Card_category: 4
        },
        {
            _id: 2,
            Card_image: CardImage_2,
            Card_title: "도굴왕",
            Card_viewer: 202.3,
            Card_rank: "9.9",
            Card_category: 2
        },
        {
            _id: 3,
            Card_image: CardImage_3,
            Card_title: "궁귀검신",
            Card_viewer: 52.5,
            Card_rank: "10.0",
            Card_category: 1
        },
        {
            _id: 4,
            Card_image: CardImage_4,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.6",
            Card_category: 2
        },
        {
            _id: 5,
            Card_image: CardImage_5,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.8",
            Card_category: 3
        },
        {
            _id: 6,
            Card_image: CardImage_6,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.9",
            Card_category: 1
        },
        {
            _id: 7,
            Card_image: CardImage_7,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.9",
            Card_category: 5
        },
        {
            _id: 8,
            Card_image: CardImage_8,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "8.9",
            Card_category: 4
        },
        {
            _id: 9,
            Card_image: CardImage_4,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "10.0",
            Card_category: 3
        },
        {
            _id: 10,
            Card_image: CardImage_1,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.7",
            Card_category: 4
        },
        {
            _id: 11,
            Card_image: CardImage_2,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "10.0",
            Card_category: 1
        },{
            _id: 1,
            Card_image: CardImage_1,
            Card_title: "악녀는 마리오네트",
            Card_viewer: 118.1,
            Card_rank: "9.9",
            Card_category: 4
        },
        {
            _id: 2,
            Card_image: CardImage_2,
            Card_title: "도굴왕",
            Card_viewer: 202.3,
            Card_rank: "9.9",
            Card_category: 2
        },
        {
            _id: 3,
            Card_image: CardImage_3,
            Card_title: "궁귀검신",
            Card_viewer: 52.5,
            Card_rank: "10.0",
            Card_category: 1
        },
        {
            _id: 4,
            Card_image: CardImage_4,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.6",
            Card_category: 2
        },
        {
            _id: 5,
            Card_image: CardImage_5,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.8",
            Card_category: 3
        },
        {
            _id: 6,
            Card_image: CardImage_6,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.9",
            Card_category: 1
        },
        {
            _id: 7,
            Card_image: CardImage_7,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.9",
            Card_category: 5
        },
        {
            _id: 8,
            Card_image: CardImage_8,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "8.9",
            Card_category: 4
        },
        {
            _id: 9,
            Card_image: CardImage_4,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "10.0",
            Card_category: 3
        },
        {
            _id: 10,
            Card_image: CardImage_1,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.7",
            Card_category: 4
        },
        {
            _id: 11,
            Card_image: CardImage_2,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "10.0",
            Card_category: 1
        },{
            _id: 1,
            Card_image: CardImage_1,
            Card_title: "악녀는 마리오네트",
            Card_viewer: 118.1,
            Card_rank: "9.9",
            Card_category: 4
        },
        {
            _id: 2,
            Card_image: CardImage_2,
            Card_title: "도굴왕",
            Card_viewer: 202.3,
            Card_rank: "9.9",
            Card_category: 2
        },
        {
            _id: 3,
            Card_image: CardImage_3,
            Card_title: "궁귀검신",
            Card_viewer: 52.5,
            Card_rank: "10.0",
            Card_category: 1
        },
        {
            _id: 4,
            Card_image: CardImage_4,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.6",
            Card_category: 2
        },
        {
            _id: 5,
            Card_image: CardImage_5,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.8",
            Card_category: 3
        },
        {
            _id: 6,
            Card_image: CardImage_6,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.9",
            Card_category: 1
        },
        {
            _id: 7,
            Card_image: CardImage_7,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.9",
            Card_category: 5
        },
        {
            _id: 8,
            Card_image: CardImage_8,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "8.9",
            Card_category: 4
        },
        {
            _id: 9,
            Card_image: CardImage_4,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "10.0",
            Card_category: 3
        },
        {
            _id: 10,
            Card_image: CardImage_1,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.7",
            Card_category: 4
        },
        {
            _id: 11,
            Card_image: CardImage_2,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "10.0",
            Card_category: 1
        },{
            _id: 1,
            Card_image: CardImage_1,
            Card_title: "악녀는 마리오네트",
            Card_viewer: 118.1,
            Card_rank: "9.9",
            Card_category: 4
        },
        {
            _id: 2,
            Card_image: CardImage_2,
            Card_title: "도굴왕",
            Card_viewer: 202.3,
            Card_rank: "9.9",
            Card_category: 2
        },
        {
            _id: 3,
            Card_image: CardImage_3,
            Card_title: "궁귀검신",
            Card_viewer: 52.5,
            Card_rank: "10.0",
            Card_category: 1
        },
        {
            _id: 4,
            Card_image: CardImage_4,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.6",
            Card_category: 2
        },
        {
            _id: 5,
            Card_image: CardImage_5,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.8",
            Card_category: 3
        },
        {
            _id: 6,
            Card_image: CardImage_6,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.9",
            Card_category: 1
        },
        {
            _id: 7,
            Card_image: CardImage_7,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.9",
            Card_category: 5
        },
        {
            _id: 8,
            Card_image: CardImage_8,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "8.9",
            Card_category: 4
        },
        {
            _id: 9,
            Card_image: CardImage_4,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "10.0",
            Card_category: 3
        },
        {
            _id: 10,
            Card_image: CardImage_1,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.7",
            Card_category: 4
        },
        {
            _id: 11,
            Card_image: CardImage_2,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "10.0",
            Card_category: 1
        },{
            _id: 1,
            Card_image: CardImage_1,
            Card_title: "악녀는 마리오네트",
            Card_viewer: 118.1,
            Card_rank: "9.9",
            Card_category: 4
        },
        {
            _id: 2,
            Card_image: CardImage_2,
            Card_title: "도굴왕",
            Card_viewer: 202.3,
            Card_rank: "9.9",
            Card_category: 2
        },
        {
            _id: 3,
            Card_image: CardImage_3,
            Card_title: "궁귀검신",
            Card_viewer: 52.5,
            Card_rank: "10.0",
            Card_category: 1
        },
        {
            _id: 4,
            Card_image: CardImage_4,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.6",
            Card_category: 2
        },
        {
            _id: 5,
            Card_image: CardImage_5,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.8",
            Card_category: 3
        },
        {
            _id: 6,
            Card_image: CardImage_6,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.9",
            Card_category: 1
        },
        {
            _id: 7,
            Card_image: CardImage_7,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.9",
            Card_category: 5
        },
        {
            _id: 8,
            Card_image: CardImage_8,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "8.9",
            Card_category: 4
        },
        {
            _id: 9,
            Card_image: CardImage_4,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "10.0",
            Card_category: 3
        },
        {
            _id: 10,
            Card_image: CardImage_1,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "9.7",
            Card_category: 4
        },
        {
            _id: 11,
            Card_image: CardImage_2,
            Card_title: "다정한 그대를 지키는 방법",
            Card_viewer: 89.6,
            Card_rank: "10.0",
            Card_category: 1
        },
    ]
    const SortHeader = [
        {
            sort_name:"웹툰",
            sort_key: 1,
            sort_active: true
        },
        {
            sort_name:"웹소설",
            sort_key: 2,
            sort_active: false
        }
    ]
    const SortTrending = [
        {
            sort_name:"월",
            sort_key: "all",
            
        },
        {
            sort_name:"화",
            sort_key: 2,
            
        },
        {
            sort_name:"수",
            sort_key: 3,
            
        },
        {
            sort_name:"목",
            sort_key: 3,
            
        },
        {
            sort_name:"금",
            sort_key: 4,
            
        },
        {
            sort_name:"토",
            sort_key: 5,
            
        },
        {
            sort_name:"일",
            sort_key: 6,
            
        },
        {
            sort_name:"완결",
            sort_key: 7,
            
        },
    ]
    const [filterTrending, setfilterTrending] = useState<any>([])
    const [toggleTabs, setToggleTabs] = useState(0)
    const changeTabRecommend = (index:any,items:any) =>{
        setToggleTabs(index)
        FilterTrending(items.sort_key)
    }
    
    useEffect(() => {
        FilterTrending(0)
    }, [])


    function FilterTrending (items:any){
        const filter = TopTrendingList
        .filter(product=>{
            if(items === 0 || items === "all"){
                return product
            }
            if(items !== 0){

                return product.Card_category === items
            }
        })
        setfilterTrending(filter)
    }

    
    

    
    return (
        <div className='block-toptrending'>
            <div className='block-toptrending_header'>
                <div className="block-toptrending_header-right">
                    <div className="header-title">
                        <h3>요일 연재 TOP</h3>    
                    </div>
                    <div className="header-amount">
                        <h3>({TopTrendingList.length})</h3>    
                    </div>
                </div>
                <ul className="block-toptrending_header-left">
                    {
                        SortHeader.map((items:any, index:any)=>{
                            return (
                                <li className= {`header-sort_items ${ items.sort_active === true ? "active":"" }`} key={index}>
                                    <p>{items.sort_name}</p>
                                    <div className='dot'></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#999" fill-rule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-.5 4c-.828 0-1.5.672-1.5 1.5v4c0 .139.019.273.053.4-.128.485-.004 1.023.372 1.405l3.812 3.868.018.018c.557.545 1.451.536 1.997-.022.558-.57.557-1.483-.003-2.051l-3.277-3.327c.018-.094.028-.191.028-.291v-4c0-.828-.672-1.5-1.5-1.5z"/>
                                    </svg>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='block-toptrending_nav'>
                <ul className='trending_nav'>
                    {
                        SortTrending.map((items:any, index:any)=>{
                            return (
                                <li onClick={()=>changeTabRecommend(index,items)} className= {`trending_nav-items ${ toggleTabs === index ? "active":"" }`} key={index}>
                                    <p>{items.sort_name}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <HorizontalCard
                HorizontalCard={filterTrending}
                cols={"horizontal-5"}
            />
            
        </div>
        
    );
}

export default TrendingTop;
