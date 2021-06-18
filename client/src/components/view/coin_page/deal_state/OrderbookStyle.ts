import styled, { css } from "styled-components";

const container = {
    width: 470,
    height: 469
};

const header = {
    column: 235 
}

export const OrderbookContainer = {
    Container: styled.div`
        width: ${container.width}px;
        height: ${container.height}px;
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
            `
        }`
    }
}