import { Module } from '@nestjs/common';
//import { MongooseModule } from '@nestjs/mongoose';
import { CoinController } from './coin.controller';
import { CoinService } from './coin.service';
//import { Coin, CoinSchema } from './schemas/coin.schema';

@Module({
  // imports: [MongooseModule.forFeature([{
  //     name: Coin.name,
  //     schema: CoinSchema
  //   }])],
  controllers: [CoinController],
  providers: [CoinService]
})
export class CoinModule {}
