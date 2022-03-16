import React from 'react';

import './HorizotalCard.scss';
import '../../Assets/style/_reset.scss';

import HorizontalCardFourItems from './HorizontalCardItems/HorizontalCardFourItems';



function HorizontalCardNoRank(props:any) {
    
    const {HorizontalCard, cols,numberLimited} = props

    return (
        <div className= {`block-horizon ${ cols }`}>
            {
                HorizontalCard.map((items:any, index:any) => {
                    return (
                        <HorizontalCardFourItems
                            items={items}
                            index={index}
                            key={index}
                            noRank={"noRank"}
                        />
                    )
                }) 
                .filter((product:any,index:any) => index < numberLimited)
            }
        </div>
        
    );
}

export default HorizontalCardNoRank;
