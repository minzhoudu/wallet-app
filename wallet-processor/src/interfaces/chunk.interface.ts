import { TransactionDTO } from 'src/dto/transaction.dto';

export interface Chunk {
  transactions: TransactionDTO[];
  totalValue: number;
  timeLeft: number;
}
