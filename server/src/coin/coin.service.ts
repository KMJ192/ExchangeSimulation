import { Injectable } from '@nestjs/common';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { ResponseCType } from './types/coin.response.type';
import sleep from 'src/function/Sleep';

let db_config = require("../database/db_connect");
let conn = db_config.init();

@Injectable()
export class CoinService {

    tmpUrl = "https://api.upbit.com/v1/candles/minutes/1?market={_currency_}-{_code_}&count={_unit_}";
    marketCode = "https://api.upbit.com/v1/market/all";

    async GetRealTimeCoinPrice(){
        let unit : string = "1";
        let currency: string = "KRW";
        //let code: string = "BTC";
        let reqUrl: string = this.tmpUrl;
        reqUrl = reqUrl.replace("{_currency_}", currency);
        //reqUrl = reqUrl.replace("{_code_}", code);
        reqUrl = reqUrl.replace("{_unit_}", unit);

        let code: Object[] = await axios.get(this.marketCode).then(response => response.data);
        console.log(code[0]);
        console.log(code[1]);
        console.log(code[2]);
        console.log(code[3]);
        console.log(code.length);

        // let i: number = 3;
        // while(i){
        //     const data: ResponseCType = await axios.get(reqUrl)
        //         .then((response: AxiosResponse) => response.data)
        //         .catch((err: AxiosError) => err);
        //     console.log(data);

        //     sleep(3000);
            
        //     i--;
        // }
        return code;
    }
}

async function SQLQueryRun(sql : string){
    return new Promise((resolve, reject) => {
        conn.query(sql, function(err : string, result){
            if(err){
                reject(err);
            }
            resolve(result);
        });
    });
}