import styled from "styled-components";

const width = 450;

export const Container = {
    Box: styled.div`
        grid-template-rows: 40px ${width}px;
    `,
    RealTimeList : styled.div`
        width: ${width}px;
        height: 960px;
    `,
    SearchBox : {
        Container : styled.div`
            width: ${width}px;
            height: 30px;
        `,
        InputBox: styled.input`
            padding: 7px;
            width: ${width - 60}px;
            heigth: 100px;
        `,
        Button: styled.div`
            padding: 5px 5px 5px 5px;
            font: 7px;
        `
    }
};