import styled, { css } from "styled-components";

const listItem = {
    border : "solid 1px rgba(0,0,0,.1)",
    gridTemplateCol: "240px 240px 240px 240px"
}

export const DayTradeListSt = {
    Container: styled.div`
        display: grid;
        grid-template-rows: 30px 340px;
        //border: 1px solid;
    `,
    Header: styled.div`
        display: grid;
        grid-template-columns: ${listItem.gridTemplateCol};
        div{
            background-color: rgba(199, 199, 199, 0.3);
            display: grid;
            justify-content: center;
            padding-top: 5px;
            font-size: 13px;
        }
        
    `,
    List: styled.div`
        display: grid;
        border-bottom: ${listItem.border};
        overflow: auto;
        &::-webkit-scrollbar{
            width: 3px;
            height: 5px;
        }
        &::-webkit-scrollbar-thumb { 
            background-color: rgba(5, 5, 5, 0.3);
        }
        ul{
            padding: 0px;
            margin: 0px;
            list-style: none;
        }
    `,
    Item: {
        Box: styled.div`
            display: grid;
            justify-content: center;
            grid-template-columns: ${listItem.gridTemplateCol};
            font-size: 13px;
            div{
                display: grid;
                border-bottom: ${listItem.border};
                padding-top: 5px;
                padding-bottom: 5px;
            }
        `,
        Col1: styled.div`
            justify-content: left;
            padding-left: 10px;
        `,
        Col2: styled.div`
            justify-content: center;
        `,
        Col3: styled.div`
            justify-content: center;
            ${(props: any) => props.change_price >= 0 ?
                css`color: red;`
                :
                css`color: blue;`
            }
        `,
        Col4: styled.div`
            justify-content: right;
            padding-right: 10px;
        `,
    }
}