import styled from "styled-components";

export const MainChartSize = {
    width: 960,
    height: 512,
    header: 40
}

export const MainChartSt = {
    Container: styled.div`
        width: ${MainChartSize.width}px;
        height: ${MainChartSize.height}px;
        display: grid;
        grid-template-rows: ${MainChartSize.header}px ${MainChartSize.height-MainChartSize.header}px;
    `,
    Header: styled.div`
        display: grid;
        grid-template-columns: repeat(4, 50px);
        padding: 5px 5px;
        button{
            margin-right: 5px;
            font-size: 11px;
            border: none;
            background-color: rgba(150, 255, 255, .5);
            border-radius: 3px 3px;
            &:hover{
                background-color: rgba(100, 255, 255, .5);
            }
        }
    `,
    ChartBody: styled.div`
    
    `
}