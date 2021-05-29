import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('/test')
  getMainPage(@Body() body : JSON){
    console.log(body);
    
    return body;
  }
}