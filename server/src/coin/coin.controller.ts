import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CoinService } from './coin.service';
import axios from 'axios';

@Controller()
export class CoinController {
    constructor(private readonly coinService : CoinService){}

    //저장
    @Get("/real_time_coin_price")
    getRealTimeCoinPrice(){
        // while(1){
        //     // const data = axios.get("").then(response => response).catch(err => err);
        //     // console.log(data);
        //     let minute : number = 0;
        //     console.log(minute);

        // }
        for(let i = 0; i < 5; i++){
            console.log("?");
        } 
        return {
            test : "test"
        }
    }
}
