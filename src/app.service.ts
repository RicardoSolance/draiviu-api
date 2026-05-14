import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiInfo(): string {
    return 'Welcome to Draiviu API!';
  }
}
