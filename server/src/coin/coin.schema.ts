import { Prop, Schema } from "@nestjs/mongoose";
import { Unique } from "typeorm";

//coin db 연결
//column
//1. 코인이름 : string
//2. 시간 : string(date to string typecasting)?
//3. 단위(BTC) : string
//4. 시간별 시세(시가, 종가, 고가, 저가) : string
//Connect to mongodb for react chart painting
@Schema()
export class Coin{
    @Prop(Unique)
    coin_name: string;

    @Prop()
    time: string;

    @Prop()
    unit : string;

    @Prop()
    open_price: string;

    @Prop()
    close_price: string;

    @Prop()
    high_price: string;

    @Prop()
    low_price: string;
}