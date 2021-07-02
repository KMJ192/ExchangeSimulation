import styled, { css } from "styled-components";

const header = {
    selected: {
        fontWeight: 1000,
        fontSize: 15
    },
    colorStrong: "rgba(60, 200, 255, .3)",
    colorWeak: "rgba(60, 200, 255, .1)"
}

const inputBox = {
    color: "#CED1AA",
    paddingRight: "6",
    height: "30",
    width: "293"
}

export const SellBuySt = {
    Container: styled.div`
        width: 470px;
        height: 469px;
        background: #ffffff;
        box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.2);
        margin-top: 20px;
        display: grid;
        grid-template-rows: 30px 440px;
    `,
    Header: styled.div`
        display: grid;
        grid-template-columns: repeat(2, 235px);
        button{
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

export const SellCompoSt = {
    Container: styled.div`
        display: grid;
        grid-template-columns: 150px 320px;
    `,
    Row1: styled.div`
        display: grid;
        grid-template-rows: repeat(5, 88px);
    `,
    Row2: styled.div`
        display: grid;
        grid-template-rows: repeat(5, 88px);
    `,
    PropertySet: styled.div`
        display: grid;
        grid-template-rows: repeat(2, 55px);
        div{
            padding-top: 10px;
            font-size: 13px;
            span{
                font-size: 10px;
            }
        }
        `,
    PropertySetInput: styled.div`
        display: grid;
        grid-template-columns: 270px 40px;
        input{
            border: none;
            background-color: ${inputBox.color};
            height: 28px;
            width: 250px;
            float: right;
            padding: 3px ${inputBox.paddingRight}px 0px 0px;
            margin-left: 10px;
            font-size: 13px;
            text-align:right;
            &::placeholder{
                float: right;
                padding-top: 3px;
                font-size: 11px;
            }
            &:focus{
                outline: none;
            }
        }
        button{
            border: none;
            font: 13px;
            height: 31px;
            background-color: #D1CFAA;
            transition: 0.5s;
            border-radius: 1px 1px;
            &:hover{
                background-color: #8F8F8F;
                color: white;
            }
        }
    `,
    PropertySettedVal: styled.div`
        display: grid;
        justify-content: right;
        padding-right: 15px;
        font-weight: 700;
    `,
    SellBuyCell: styled.div`
        display: grid;
        justify-content: center;
        padding-top: 30%;
        font-size: 13px;
        font-weight: 500;
    `,
    SellBuyInput: styled.input`
        border: none;
        background-color: ${inputBox.color};
        height: ${inputBox.height}px;
        width: ${inputBox.width}px;
        float: right;
        padding-top: 5px;
        padding-right: ${inputBox.paddingRight}px;
        margin-top: 35px;
        margin-right: 10px;
        font-size: 13px;
        text-align:right;
        &::placeholder{
            float: right;
            padding-top: 3px;
            font-size: 11px;
        }
        &:focus{
            outline: none;
        }
    `,
    SellBuyQuantity: styled.div`
        display: grid;
        grid-template-rows: repeat(2, 50px);
        justify-content: center;
        font-size: 13px;
        font-weight: 500;
    `,
    SellBuyQuantityInput: styled.input`
        margin-top: 10px;
        border: none;
        background-color: ${inputBox.color};
        height: ${inputBox.height}px;
        width: ${inputBox.width}px;
        text-align: right;
        padding-right: ${inputBox.paddingRight}px;
        &::placeholder{
            float: right;
            padding-top: 3px;
            font-size: 11px;
        }
        &:focus{
            outline: none;
        }
    `,
    SellBuyQuantityPer: styled.div`
        display: grid;
        grid-template-columns: repeat(5, 60px);
        button{
            margin: 10px 5px 0px 0px;
            height: 30px;
            border: none;
            background-color: #B2B2B2;
            border-radius: 3px 3px 3px;
            transition: 0.5s;
            &:hover{
                background-color: #9F9F9F;
            }
        }
        input{
            margin-top: 9px;
            height: 29px;
            border: none;
            background-color: ${inputBox.color};
            border-radius: 3px 3px;
            &::placeholder{
                font-size: 13px;
            }
            &:focus{
                outline: none;
            }
        }
    `,
    InitializeButton: styled.div`
        display: grid;
        justify-content: center;
        padding: 25px 25px;
        button{
            width: 100px;
            border: none;
            background-color: #878787;
            transition: 0.2s;
            border-radius: 3px 3px;
            &:hover{
                background-color: #686868;
            }
        }
    `,
    SellBuyButton: styled.div`
        display: grid;
        justify-content: center;
        padding-top: 25px;
        padding-bottom: 25px;
        button{
            transition: 0.3s;
            border-radius: 3px 3px;
            ${(props: any) => props.ask_bid === "매수" ? 
                css`
                    background-color: #124FFF;
                    &:hover{
                        background-color: red;
                    }
                ` :
                css`
                    background-color: red;
                    &:hover{
                        background-color: #124FFF;
                    }
                `
            }
            width: 300px;
            border: none;
            color: white;
        }
    `
}