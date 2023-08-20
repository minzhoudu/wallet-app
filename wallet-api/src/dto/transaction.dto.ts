import { IsNumber } from 'class-validator';

export class TransactionDTO {
  @IsNumber()
  value: number;

  @IsNumber()
  latency: number;

  @IsNumber()
  customerId: number;
}
