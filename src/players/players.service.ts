import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { Player } from './interfaces/player.interface';
import { randomUUID } from 'crypto';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  async createUpdatePlayer(
    createPlayerDto: CreatePlayerDto,
  ): Promise<Player[]> {
    this.create(createPlayerDto);
    return this.players;
  }

  private async create(createPlayerDto: CreatePlayerDto) {
    const { email, name, phoneNumber } = createPlayerDto;

    const player: Player = {
      _id: randomUUID(),
      name,
      email,
      phoneNumber,
      ranking: 'A',
      rankingPosition: 1,
      urlPhoto: 'www.google.com/photo123.png',
    };

    this.players.push(player);
  }
}
