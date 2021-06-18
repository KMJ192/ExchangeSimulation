import styled, { css } from "styled-components";

const container = {
    width: 470,
    height: 469,
    header: 30,
    body: 415,
    footer: 30
};

const header = {
    column: 235,
    selected: {
        fontWeight: 1000,
        fontSize: 15
    }
}


export const OrderbookContainer = {
    Container: styled.div`
        width: ${container.width}px;
        height: ${container.height}px;
        grid-template-rows: ${container.header}px ${container.body}px ${container.footer}px;
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
                background-color: rgba(60, 200, 255, .8);
                font-weight: ${header.selected.fontWeight};
                font-size: ${header.selected.fontSize}px;
            `:
            css`
                background-color: rgba(60, 200, 255, .2);
            `
        }`,
        Second: styled.button`
        border-radius: 3px;
        color: #04040E;
        border: none;
        ${(props: any) => props.toggle ? 
            css`
                background-color: rgba(60, 200, 255, .2);
            `:
            css`
                background-color: rgba(60, 200, 255, .8);
                font-weight: ${header.selected.fontWeight};
                font-size: ${header.selected.fontSize}px;
            `
        }`
    },
    Footer: styled.div`
        grid-template-columns: 120px 230px 120px;
    `
}