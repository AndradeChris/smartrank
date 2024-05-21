import { Controller, Post } from '@nestjs/common';

@Controller('api/v1/jogadores')
export class PlayersController {
  @Post()
  async createUpdatePlayer() {
    return JSON.stringify({
      nome: 'Christian Andrade',
    });
  }
}
