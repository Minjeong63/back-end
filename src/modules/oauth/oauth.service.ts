import { Injectable } from '@nestjs/common';

@Injectable()
export class OauthService {
  async oauthLogin({ req, res }) {
    // res.redirect('https://auth.expo.io/@minjeong63/todolist');
    res.send('ok');
  }
}
