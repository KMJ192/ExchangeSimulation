import { Injectable } from '@nestjs/common';

let db_config = require("../database/db_connect");
let conn = db_config.init();

@Injectable()
export class CoinService {

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