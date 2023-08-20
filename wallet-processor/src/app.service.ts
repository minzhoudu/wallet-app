import { Injectable } from '@nestjs/common';
import { Chunk } from './interfaces/chunk.interface';

@Injectable()
export class AppService {
  handleChunks(chunks: Chunk[]) {
    console.log('handleChunks - COMMUNICATION', chunks);
  }
}
