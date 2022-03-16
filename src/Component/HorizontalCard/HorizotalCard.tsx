import React from 'react';

import './HorizotalCard.scss';
import '../../Assets/style/_reset.scss';

import HorizontalCardItems from './HorizontalCardItems/HorizontalCardItems';



function HorizontalCard(props:any) {
    
    const {HorizontalCard, cols} = props

    return (
        <div className= {`block-horizon ${ cols }`}>
            {
                HorizontalCard.map((items:any, index:any) => {
                    return (
                        <HorizontalCardItems
                            items={items}
                            index={index}
                            key={index}
                        />
                    )
                }) 
            }
        </div>
        
    );
}

export default HorizontalCard;
