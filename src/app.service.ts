import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const msg = process.env.MSG || 'default fallback';
    return `Hello World - via ${msg}`;
  }
}
