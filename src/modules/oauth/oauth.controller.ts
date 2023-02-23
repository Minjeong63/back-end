import {
  BadRequestException,
  Controller,
  Get,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { OauthService } from './oauth.service';
import { Request, Response } from 'express';
import { catchError, firstValueFrom, map } from 'rxjs';
import { HttpService } from '@nestjs/axios';

const REST_API_KEY = '5dc50ab226c6121b6d5984501f093ece';
const REDIRECT_URI = 'http://192.168.0.8:19003/oauth/kakao';

@Controller('oauth')
export class OauthController {
  constructor(
    private readonly oauthService: OauthService,
    private readonly httpService: HttpService,
  ) {}

  @Get('/kakao')
  //   @UseGuards(KakaoAuthGuard)
  async kakaoAuth(@Req() req: any) {
    console.log('zzzz');
  }

  @Post('kakao/callback')
  //   @UseGuards(KakaoAuthGuard)
  async kakaoAuthCallback(
    @Res({ passthrough: true }) res: Response,
    @Req() req: Request,
  ) {
    const { ACCESS_TOKEN } = req.body;

    const url = 'https://kapi.kakao.com/v2/user/me';
    const Header = {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };

    const tmp = await firstValueFrom(
      this.httpService.get(url, Header).pipe(
        map((response) => response.data),
        catchError((error) => {
          throw new BadRequestException();
        }),
      ),
    );

    if (tmp) return ACCESS_TOKEN;
    else throw new BadRequestException();
  }
}
