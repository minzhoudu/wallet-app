import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'WALLET_PROCESSOR',
        transport: Transport.TCP,
      },
    ]),
    TransactionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
