import React, { useState, useEffect, useRef } from 'react';
import { createChart, CrosshairMode, IChartApi } from 'lightweight-charts'  

import { priceData } from './MockData';

interface ChartTimeType{
    year: number;
    month: number;
    day: number;
}

export interface CandleChartOption {
    time: ChartTimeType;
    open: number;
    high: number;
    low: number;
    close: number;
}
interface Props{
    data: CandleChartOption[] | undefined;
}

function ChartComponent({data}: Props) {
    const [mount, setMount] = useState(true);
    const chartContainerRef = useRef<any>(null);
    const chart = useRef<IChartApi>();
    //console.log(data);
    //console.log(priceData);

    useEffect(() => {
        if(data && mount) {
            setMount(false);
            chart.current = createChart(chartContainerRef.current, {
                width: 960,
                height: 472,
                layout: {
                    backgroundColor: "#f6f6f6",
                    textColor: "#00000099"
                },
                grid: {
                    vertLines:{
                        color: 'rgba(129, 129, 129, 0.5)',
                    },
                    horzLines:{
                        color: 'rgba(129, 129, 129, 0.5)',
                    }
                },
                crosshair:{
                    mode: CrosshairMode.Normal
                },
                rightPriceScale: {
                    borderColor: 'rgba(197, 203, 206, 0.8)',
                },
                timeScale:{
                    borderColor: 'rgba(197, 203, 206, 0.8)',
                },
            });
            const color = {
                upColor: "rgba(255, 0, 0, .7)",
                downColor: "rgba(0,0,255,.5)"
            }
            const candleSeries = chart.current.addCandlestickSeries({
                upColor: color.upColor,
                downColor: color.downColor,
                borderUpColor: color.upColor,
                borderDownColor: color.downColor,
                wickUpColor: color.upColor,
                wickDownColor: color.downColor,
            });
            //setData 옵션 => time, open, high, low, close
            candleSeries.setData(priceData);
            //candleSeries.setData(data);
        }
    }, [data, mount]);

    if(!data){
        return <div>loading...</div>;
    }

    return (
        <div ref={chartContainerRef}/>
    );
}

export default React.memo(ChartComponent);