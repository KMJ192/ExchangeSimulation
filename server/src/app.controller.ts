import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

interface BodyType{
  content: string;
  nickName: string;
}

@Controller("/test")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/post-test")
  postTest(@Body() body: BodyType){
    const nowTime = new Date();
    return{
      _id: 1,
      content: body.content,
      nickName: body.nickName,
      createdAt: nowTime.getDate(),
      __v: "v1"
    }
  }

  @Get("/get-test")
  getTest(){
    const nowTime = new Date();
    console.log("도착");
    return{
      _id: 1,
      content: "내용",
      nickName: "별명",
      createdAt: nowTime.getDate(),
      __v: "v1"
    }
  }
}