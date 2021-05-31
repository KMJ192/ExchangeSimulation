import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('/test')
  getMainPage(@Body() body : JSON){
    console.log(body);
    
    return body;
  }

  @Post('/cors_test')
  corsTest(@Body() body: JSON, @Res() response: Response){

    console.log(body);
    
    response.json({
      test: "test"
    });
  }
}