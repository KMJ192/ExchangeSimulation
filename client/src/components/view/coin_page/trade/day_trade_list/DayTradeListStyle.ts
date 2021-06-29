import styled from "styled-components";

const listItem = {
    border : "solid 1px rgba(0,0,0,.1)"
}

export const DayTradeListSt = {
    Container: styled.div`
        display: grid;
        grid-template-rows: 30px 340px;
        //border: 1px solid;
    `,
    Header: styled.div`
        display: grid;
        grid-template-columns: 240px 240px 240px 240px;
        div{
            display: grid;
            justify-content: center;
            padding-top: 5px;
            border-bottom: ${listItem.border};
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
    `
}