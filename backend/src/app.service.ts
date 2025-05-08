import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // Just comment this line to see the difference
    return 'Hello World! I am the backend service.';
  }
}
