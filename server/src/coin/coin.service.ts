import { Injectable } from '@nestjs/common';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { ResponseCType, MarketType } from './types/coin.response.type';
import sleep from 'src/function/Sleep';

let db_config = require("../database/db_connect");
let conn = db_config.init();

@Injectable()
export class CoinService {

    async GetRealTimeCoinPrice(){
        
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