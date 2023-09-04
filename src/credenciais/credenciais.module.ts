import { Module } from '@nestjs/common';
import { CredenciaisService } from './credenciais.service';
import { CredenciaisController } from './credenciais.controller';

@Module({
  controllers: [CredenciaisController],
  providers: [CredenciaisService],
})
export class CredenciaisModule {}
