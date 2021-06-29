import styled, { css } from "styled-components";

const listItem = {
    border : "solid 1px rgba(0,0,0,.1)"
}

export const TradeListSt = {
    Container: styled.div`
        grid-template-rows: 30px 340px;
        font-size: 13px;
    `,
    TradeListItem : {
        ItemBody: styled.div`
            display: grid;
            grid-template-columns: repeat(3, 319px);
            div{
                display: grid;
                border-bottom: ${listItem.border};
                padding-top: 5px;
                padding-bottom: 5px;
            }
        `,
        Column1: styled.div`
            padding-left: 10px;
            white-space: nowrap;
        `,
        Column2: styled.div`
            display: grid;
            justify-content: center;
        `,
        Column3: styled.div`
            display: grid;
            justify-content: right;
            padding-right: 15px;
            ${(props: any) => props.ask_bid === "BID"?
                css`
                    color: red;
                ` : css`
                    color: blue;
                `
            }
        `,
    }
}