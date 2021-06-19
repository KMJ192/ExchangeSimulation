import styled, { css, keyframes } from "styled-components";

const listItemGrid = {
    first: 170,
    second: 90,
    third: 110,
    fourth: 120
}

export const Container = {
    Box: styled.div`
        grid-template-rows: 36px 40px 450px;
    `,
    SearchBox : {
        InputBox: styled.input`
            padding: 7px;
            width: 495px;
        `,
    },
    Header: styled.div`
        width: 495px;
        grid-template-columns: ${listItemGrid.first}px ${listItemGrid.second}px ${listItemGrid.third}px ${listItemGrid.fourth}px;
    `,
    RealTimeList : styled.div`
        width: 510px;
        height: 1340px;
    `
};

const iFlash = keyframes`
    0% { border: none; }
    10% { border: solid 1px red; }
    50% { border: none; }
`
const dFlash = keyframes`
    0% { border: none; }
    10% { border: solid 1px blue; }
    50% { border: none; }
`

export const ListItem = {
    ListItemBox : styled.div`
        grid-template-columns: ${listItemGrid.first}px ${listItemGrid.second}px ${listItemGrid.third}px ${listItemGrid.fourth}px;
    `,
    Cell: styled.div`
        ${(props: any) => props.ud === "RISE" ?
            css`color: red;` :
            (props: any) => props.ud === "FALL" && css`color: blue;`
        }
    `,
    FlashCell: styled.div`
        ${(props: any) => props.flash === "i" ?
        css`
            animation: ${iFlash} 0.5s step-end;
            width: 100px;
            height: 30px;
        `:
        props.flash === "d" && 
        css`
            animation: ${dFlash} 0.5s step-end;
            width: 100px;
            height: 30px;
        `}
    `
}

