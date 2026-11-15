import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Miguel!';
  }

  postHello(): string {
    return 'Hello Miguel from POST!';
  }
}
