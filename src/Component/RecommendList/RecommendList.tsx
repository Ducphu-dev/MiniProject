


import Arrow_icon from '../../Assets/images/HorizontalCard/arrow_icon.svg';
import '../../Assets/style/_reset.scss';
import HorizontalCard_2 from '../HorizontalCard/HorizontalCard_2';
import './RecommendList.scss';



function RecommendList(props:any) {

    const {TopRecommendList,title,title_1,numberLimited,cols} = props
    return (
        <div className='block-recommend'>
            <div className='block-recommend_header'>
                <div className="block-recommend_header-right">
                    <div className="header-title">
                        {
                            title.length > 1 ?
                            <>
                                <h3 className={`title ${title[1]}`}>{title[0]}</h3>    
                                <div className='title-dash'>|</div>
                                <h3 className='title'>{title_1}</h3>    
                            </> 
                            : 
                            <h3 className='title'>{title}</h3>    
                        }
                        
                    </div>
                </div>
                <div className="block-recommend_header-left">
                    <div className="header-link">
                        <a href="">더보기</a>    
                        <img src={Arrow_icon} />
                    </div>
                </div>
            </div>
            <HorizontalCard_2
                HorizontalCard={TopRecommendList}
                cols={cols}
                numberLimited={numberLimited}
            />
            
            
        </div>
        
    );
}

export default RecommendList;
