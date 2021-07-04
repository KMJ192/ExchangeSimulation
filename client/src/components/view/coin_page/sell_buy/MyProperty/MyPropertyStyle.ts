import styled from "styled-components";

export const MyPropertySt = {
    Container: styled.div`
        display: grid;
        grid-template-rows: 50px 390px;
        font-size: 13px;
    `,
    DisplayInitData: styled.div`
        display: grid;
        grid-template-columns: repeat(2, 236px);
    `,
    DisplayInitDataHeader: styled.div`
        display: grid;
        justify-content: center;
        padding-top: 3px;
        border-bottom: solid 1px rgba(0, 0, 0, .1);
        background-color: rgba(199, 199, 199, 0.8);
        div{
            display: grid;
            justify-content: center;
        }
    `,
    DisplayMyPropertyDetail: styled.div`
        display: grid;
        grid-template-rows: 40px 350px;
        overflow: auto;
        &::-webkit-scrollbar{
            width: 2px;
            height: 5px;
        }
        &::-webkit-scrollbar-thumb { 
            background-color: rgba(5, 5, 5, 0.3);
        }
    `,
    MyPropertyDetail: styled.div`
        padding-top: 10px;
        padding-left: 30px;
        border-bottom: solid 1px rgba(0, 0, 0, .1);
        background-color: rgba(199, 199, 199, 0.3);;
    `,
    MyPropertyDetailLi: styled.div`
        ul{
            padding: 0px;
            margin: 0px;
            list-style: none;
        }
        li{
            padding: 10px 0px 10px 30px;
            list-style: none;
            border-bottom: solid 1px rgba(0, 0, 0, .3);
            &:hover{
                background-color: rgba(0, 0, 0, .3);
            }
        }
    `,
    NullProperty: styled.div`
        display: grid;
        justify-content: center;
        padding-top: 30px;
    `
}