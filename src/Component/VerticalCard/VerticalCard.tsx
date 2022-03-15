import { Card } from 'antd';
import React from 'react';
import VerticalCardItemFour from './VerticalCardItemFour/VerticalCardItemFour';
import './VerticalCard.scss';
import iconArrow from '../../Assets/images/VerticalCard/icon-arrow.svg';
import useWindowSize from './useWindowSize';
import VerticalCardItemThree from './VerticalCardItemThree/VerticalCardItemThree';

type Props = {
    cardList: any;
    title: string;
    volume: string;
};

const VerticalCard = ({ cardList, title, volume }: Props) => {
    const { width, height } = useWindowSize();

    return (
        <div className="vertical-card">
            <Card style={{ width: `${width < 1279 ? '1024' : '720'}` }}>
                <div className="header">
                    <div className="header-left">
                        <a className="header-left-title" href="/#">
                            {title}
                        </a>
                        <a className="header-left-volume" href="/#">
                            {volume}
                        </a>
                    </div>
                    <div className="header-right">
                        <p className="header-right-more">더보기</p>
                        <img src={iconArrow} alt="" className="icon-arrow" />
                    </div>
                </div>
                {cardList.length % 2 ===0 ? (
                    <div className="card-list">
                        {cardList.map((item: any, index: number) => (
                            <VerticalCardItemFour key={index} cardItem={item} />
                        ))}
                    </div>
                ) : (
                    <div className="card-list-three">
                        {cardList.map((item: any, index: number) => (
                            <VerticalCardItemThree key={index} cardItem={item}  />
                        ))}
                    </div>
                )}
            </Card>
        </div>
    );
};

export default VerticalCard;
