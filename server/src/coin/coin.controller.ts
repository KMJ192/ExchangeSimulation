import { Controller, Post, Get } from '@nestjs/common';
import { CoinService } from './coin.service';

@Controller()
export class CoinController {
    constructor(private readonly coinService : CoinService){}

    // tmpUrl = "https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=1";
    // sleep(ms : number) {
    //     const wakeUpTime = Date.now() + ms;
    //     while (Date.now() < wakeUpTime) {}
    // }

    //DB에 저장하는 거
    @Get("/real_time_coin_price")
    async getRealTimeCoinPrice(){
        return this.coinService.GetRealTimeCoinPrice();
    }
    
    @Get("/market_code")
    getAllCode(){

    }
}