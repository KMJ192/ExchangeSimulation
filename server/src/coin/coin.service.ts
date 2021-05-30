import { Injectable } from '@nestjs/common';
import { CoinType } from './coin.type';

let db_config = require("../database/db_connect");
let conn = db_config.init();

@Injectable()
export class CoinService {

    async CoinDataRegist(saveData: CoinType){
        console.log(saveData);
        // const sql : string = "";
        // await SQLQueryRun(sql);
        return {
            "response" : true
        }
    }

    async CoinRegist(saveData: CoinType){
        console.log(saveData);
    }

    async GetCoinData(coinName : string, data: CoinType){
        console.log(coinName);
        console.log(data);
    }

    async GetAllCoinData(){
        
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