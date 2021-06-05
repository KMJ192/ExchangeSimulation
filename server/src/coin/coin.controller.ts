import { Controller, Post, Get } from '@nestjs/common';
import { CoinService } from './coin.service';

@Controller()
export class CoinController {
    constructor(private readonly coinService : CoinService){}

    //DB에 저장하는 거
    @Get("/real_time_coin_price")
    async getRealTimeCoinPrice(){
        return this.coinService.GetRealTimeCoinPrice();
    }
    
    @Get("/market_code")
    getAllCode(){

    }
}