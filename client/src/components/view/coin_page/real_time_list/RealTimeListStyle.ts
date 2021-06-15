import styled from "styled-components";

const listItemGrid = {
    first: 140,
    second: 140,
    third: 120,
    fourth: 120
}

export const Container = {
    Box: styled.div`
        grid-template-rows: 38px 40px 450px;
    `,
    SearchBox : {
        Container : styled.div`
            grid-template-columns: 485px 50px;
            width: 450px;
            height: 30px;
        `,
        InputBox: styled.input`
            padding: 7px;
            width: 516px;
        `,
        Button: styled.div`
            padding: 5px 5px 5px 5px;
            font: 7px;
        `
    },
    Header: styled.div`
        grid-template-columns: ${listItemGrid.first}px ${listItemGrid.second}px ${listItemGrid.third}px ${listItemGrid.fourth}px;
    `,
    RealTimeList : styled.div`
        width: 530px;
        height: 910px;
    `
};

export const ListItem = {
    ListItemBox : styled.div`
        grid-template-columns: ${listItemGrid.first}px ${listItemGrid.second}px ${listItemGrid.third}px ${listItemGrid.fourth}px;
    `
}