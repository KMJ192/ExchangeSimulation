import styled from "styled-components";

export const RealTimeTableStyled = styled.div`
    width: 450px;
    height: 1000px;
`;

export const MainChartStyled = styled.div`
    width: 960px;
    height: 512px;
`;

export const PSGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 300px);
    grid-column-gap: 190px;
`;

const wh = {
    width: 470,
    height: 469
};
export const DealStateStyled = styled.div`
    width: ${wh.width}px;
    height: ${wh.height}px;
`;

export const SellBuyStyled = styled.div`
    width: ${wh.width}px;
    height: ${wh.height}px;
`;