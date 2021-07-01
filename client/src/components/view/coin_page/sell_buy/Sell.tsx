import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux-module/RootReducer';

function Sell() {
    const price = useSelector((state: RootState) => state.selected_price.price);
    
    

    return (
        <div>
            sell
        </div>
    )
}

export default React.memo(Sell);
