import { TransactionService } from './transaction.service';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TransactionDTO } from 'src/dto/transaction.dto';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  //TODO: FIX THE VALIDATION
  @UsePipes(new ValidationPipe({ whitelist: true }))
  createTransport(@Body() transactions: TransactionDTO[]) {
    const chunks =
      this.transactionService.sendTransactionsToProcessor(transactions);

    return chunks;
  }
}
