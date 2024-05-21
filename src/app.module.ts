import { Module } from '@nestjs/common';
import { JogadoresController } from './jogadores/jogadores.controller';

@Module({
  imports: [],
  controllers: [JogadoresController],
  providers: [],
})
export class AppModule {}
