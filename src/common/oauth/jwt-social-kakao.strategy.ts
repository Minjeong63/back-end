import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-kakao';

@Injectable()
export class JwtKakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: '5dc50ab226c6121b6d5984501f093ece',
      clientSecret: '55ISSvrwuggsDT7Ejjt9EvOqH1BYsTIe',
      callbackURL: 'http://192.168.0.8:19003/oauth/kakao',
      //   scope: ['account_email', 'profile_nickname'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log('accessToken', accessToken);
    return {
      id: profile.id,
      //   name: profile.displayName,
      //   email: profile._json.kakao_account.email,
      //   password: profile.id,
      //   nickname: profile._json.kakao_account.profile.nickname,
    };
  }
}
