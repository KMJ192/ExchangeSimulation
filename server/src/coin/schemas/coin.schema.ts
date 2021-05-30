import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

//coin db 연결
//column
//1. 코인이름 : string
//2. 시간 : string(date to string typecasting)?
//3. 단위(BTC) : string
//4. 시간별 시세(시가, 종가, 고가, 저가) : string
//5. 일별(시가, 종가)
//6. 등락률
//Connect to mongodb for react chart painting

export type CoinDocument = Coin & Document;

@Schema()
export class Coin{
    @Prop()
    coin_name: string;

    @Prop()
    time: string;
    
    @Prop()
    open_price: string;

    @Prop()
    close_price: string;

    @Prop()
    high_price: string;

    @Prop()
    low_price: string;
}

export const CoinSchema = SchemaFactory.createForClass(Coin);