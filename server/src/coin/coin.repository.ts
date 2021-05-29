import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { FilterQuery } from "typeorm";
import { Coin, CoinDocument } from "./schemas/coin.schema";

@Injectable()
export class CoinRepository{
    constructor(@InjectModel(Coin.name) private coinModel: Model<CoinDocument>){}

    // async findOne(coinFilterQuery: FilterQuery<Coin>): Promise<Coin> {
    //     return this.coinModel.findOne(coinFilterQuery);
    // }

    async findAll(): Promise<Coin[]>{
        return this.coinModel.find().exec();
    }

    async create(coin: Coin): Promise<Coin>{
        const newCoin = new this.coinModel(coin);
        console.log(coin);
        return newCoin.save();
    }
}