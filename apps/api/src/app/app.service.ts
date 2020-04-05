import { Injectable } from '@nestjs/common';
import { Message } from '@type-safe-full-stack/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
