//이름, 날짜, 시가(일별), 종가(일별)
// export interface CoinType{
//     coinName: string;
//     date: string;
//     open_price: string;
//     close_price: string;
// }

//이름, 시간, 고가(colum별), 저가(colum별), 시가(colum별), 종가(colum별)
// export interface CoinDataType{
//     coinName: string;
//     time: string;
//     highPrice: string;
//     lowPrice: string;
//     openPrice: string;
//     closePrice: string;
// }

//이름, 날짜, 시간, 시가(일별), 종가(일별), 고가(colum별), 저가(colum별), 시가(colum별), 종가(colum별)
export interface CoinType{
    coinName: string;
    time: string;
    date: string;
    openPriceOfDay: string;
    closePriceOfDay: string;
    highPrice: string;
    lowPrice: string;
    openPriceOfCol: string;
    closePriceofCol: string;
}