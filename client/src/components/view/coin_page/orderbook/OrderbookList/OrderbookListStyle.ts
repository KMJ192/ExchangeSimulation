import styled, { css } from "styled-components"

export const Def = {
    Container: styled.div`
        grid-template-rows: 410px 30px;
    `,
    List: styled.li`
        grid-template-columns: 235px 235px;
    `,
    Cell: styled.div`
        ${(props: any) => props.ask_bid === "ASK" ? 
            css`color: red;` :
            css`color: blue;`
        }
    `,
    Footer: styled.div`
        grid-template-columns: 160px 150px 160px;
    `
}