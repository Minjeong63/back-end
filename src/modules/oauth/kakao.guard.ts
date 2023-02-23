import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

export class KakaoAuthGuard extends AuthGuard('kakao') {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  handleRequest(err, user, info) {
    // lg.d('*** handleRequest in JwtAuthGuard (4/4)');
    // lg.d('error', err);
    // lg.d('user', user);
    // lg.d('info', info);

    // if (err || !user) {
    //   return null;
    // }
    return user;
  }
}
