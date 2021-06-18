import styled, { css } from "styled-components";

const container = {
    width: 470,
    height: 469,
    header: 30,
    body: 440
};

const header = {
    column: 235,
    selected: {
        fontWeight: 1000,
        fontSize: 15
    },
    colorStrong: "rgba(60, 200, 255, .3)",
    colorWeak: "rgba(60, 200, 255, .1)"
}


export const OrderbookContainer = {
    Container: styled.div`
        width: ${container.width}px;
        height: ${container.height}px;
        grid-template-rows: ${container.header}px ${container.body}px;
    `,
    Header: styled.div`
        grid-template-columns: ${header.column}px ${header.column}px;
    `,
    HeaderCell: {
        First: styled.button`
        border-radius: 3px;
        color: #04040E;
        border: none;
        ${(props: any) => props.toggle ? 
            css`
                background-color: ${header.colorStrong};
                font-weight: ${header.selected.fontWeight};
                font-size: ${header.selected.fontSize}px;
            `:
            css`
                background-color: ${header.colorWeak};
            `
        }`,
        Second: styled.button`
        border-radius: 3px;
        color: #04040E;
        border: none;
        ${(props: any) => props.toggle ? 
            css`
                background-color: ${header.colorWeak};
            `:
            css`
                background-color: ${header.colorStrong};
                font-weight: ${header.selected.fontWeight};
                font-size: ${header.selected.fontSize}px;
            `
        }`
    }
}