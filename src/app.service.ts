import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Riya! I hope you are loving NEST =)';
  }
}
