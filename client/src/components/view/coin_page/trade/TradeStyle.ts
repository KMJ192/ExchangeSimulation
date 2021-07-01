import styled, { css } from "styled-components";

const container = {
    width: 960,
    height: 400,
    col1: 30,
    col2: 370
}

const header = {
    col1: 480,
    col2: 480,
    selected: {
        fontWeight: 1000,
        fontSize: 15
    },
    colorStrong: "rgba(60, 200, 255, .3)",
    colorWeak: "rgba(60, 200, 255, .1)"
}

export const TradeBox = {
    Container: styled.div`
        width: ${container.width}px;
        height: ${container.height}px;
        grid-template-rows: ${30}px ${370}px;
    `,
    Header: styled.div`
        grid-template-columns: ${header.col1}px ${header.col2}px;
        button{
            border-radius: 3px;
            color: #04040E;
            border: none;
        }
    `,
    HeaderCell: {
        First: styled.button`
            ${(props: any) => props.toggle ? 
                css`
                    background-color: ${header.colorStrong};
                    font-weight: ${header.selected.fontWeight};
                    font-size: ${header.selected.fontSize}px;
                `: 
                css`
                    background-color: ${header.colorWeak};
                `}
        `,
        Second: styled.button`
            ${(props: any) => props.toggle ? 
                css`
                    background-color: ${header.colorWeak};
                `:
                css`
                    background-color: ${header.colorStrong};
                    font-weight: ${header.selected.fontWeight};
                    font-size: ${header.selected.fontSize}px;
                `}
        `
    }
}