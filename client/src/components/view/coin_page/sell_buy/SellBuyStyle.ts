import styled, { css } from "styled-components";

const header = {
    selected: {
        fontWeight: 1000,
        fontSize: 15
    },
    colorStrong: "rgba(60, 200, 255, .3)",
    colorWeak: "rgba(60, 200, 255, .1)"
}

export const SellBuySt = {
    Container: styled.div`
        width: 470px;
        height: 469px;
        background: #ffffff;
        box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.2);
        margin-top: 20px;
        display: grid;
        grid-template-rows: 30px 340px;
    `,
    Header: styled.div`
        display: grid;
        grid-template-columns: repeat(2, 235px);
        button{
            border: 1px solid;
            display: grid;
            justify-content: center;
            padding-top: 3px;
            border-radius: 3px;
            color: #04040E;
            border: none;
        }
    `,
    SellButton: styled.button`
        ${(props: any) => props.toggle ?
            css`
                background-color: ${header.colorStrong};
                font-weight: ${header.selected.fontWeight};
                font-size: ${header.selected.fontSize}px;
            ` : 
            css`
                background-color: ${header.colorWeak};
            `
        }
    `,
    BuyButton: styled.button`
        ${(props: any) => props.toggle ?
            css`
                background-color: ${header.colorWeak};
            ` :
            css`
                background-color: ${header.colorStrong};
                font-weight: ${header.selected.fontWeight};
                font-size: ${header.selected.fontSize}px;
            `
        }
    `,
    Body: styled.div`
        display: grid;
    `
}