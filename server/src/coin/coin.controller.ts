import { Controller, Post } from '@nestjs/common';
import { CoinService } from './coin.service';

@Controller('coin')
export class CoinController {
    constructor(private readonly coinService : CoinService){}

    @Post('/save_coin_price')
    saveCoinPrice(){
        
    }
}
