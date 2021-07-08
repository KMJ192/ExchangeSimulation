import React from 'react'

export interface CandleChartOption {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
}

function ChartComponent() {
    return (
        <div>
            
        </div>
    )
}

export default React.memo(ChartComponent);