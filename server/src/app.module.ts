import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CoinModule } from './coin/coin.module';
// import { MongooseModule } from '@nestjs/mongoose';
// import { connect_mongodb } from './database/mongoDB/duizinda';

@Module({
  imports: [
    //MongooseModule.forRoot(connect_mongodb),
    UserModule, 
    //CoinModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
