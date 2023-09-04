import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CredenciaisModule } from './credenciais/credenciais.module';
import { NotasModule } from './notas/notas.module';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [PrismaModule, UserModule, CredenciaisModule, NotasModule, CardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}




