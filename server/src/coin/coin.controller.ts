import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CoinService } from './coin.service';

@Controller()
export class CoinController {
    constructor(private readonly coinService : CoinService){}

    //저장
    // @Post('/save_coin')
    // coinRegist(@Body() data: CoinType){
    //     return this.coinService.CoinDataRegist(data);
    // }

    // @Post('/save_coin_data')
    // coinDataRegist(){
        
    // }

    // //coin이름으로 시간별 dataGet
    // @Post('/get_coin/:coin_name')
    // getCoinData(@Param("coin_name") coinName: string, @Body() data: CoinType){
    //     return this.coinService.GetCoinData(coinName, data);
    // }

    // @Get('/get_all_coin_data')
    // getAllCoinData(){
    //     return this.coinService.GetAllCoinData();
    // }
}
