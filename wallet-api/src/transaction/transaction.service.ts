import { Injectable } from '@nestjs/common';
import { TransactionDTO } from 'src/dto/transaction.dto';
import { Chunk } from 'src/interfaces/chunk.interface';

@Injectable()
export class TransactionService {
  private createNewChunk(): Chunk {
    return {
      transactions: [],
      totalValue: 0,
      timeLeft: 1000,
    };
  }

  private addTransaction(chunk: Chunk, transaction: TransactionDTO) {
    chunk.transactions.push(transaction);
    chunk.totalValue += transaction.value;
    chunk.timeLeft -= transaction.latency;
  }

  private splitTransactions(transactions: TransactionDTO[], chunks: Chunk[]) {
    const chunk = this.createNewChunk();

    for (let i = transactions.length - 1; i >= 0; i--) {
      if (chunk.timeLeft >= transactions[i].latency) {
        this.addTransaction(chunk, transactions[i]);
        transactions.splice(i, 1);
      }
    }

    chunks.push(chunk);

    if (transactions.length) {
      this.splitTransactions(transactions, chunks);
    }

    return chunks;
  }

  sendTransactionsToProcessor(transactions: TransactionDTO[]) {
    const chunks: Chunk[] = [];
    const sortedTransactions = transactions.sort((a, b) => a.value - b.value);

    return this.splitTransactions(sortedTransactions, chunks);
  }
}
