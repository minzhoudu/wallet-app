import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { Chunk } from './interfaces/chunk.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('chunks_created')
  handleChunks(chunks: Chunk[]) {
    this.appService.handleChunks(chunks);
  }
}
