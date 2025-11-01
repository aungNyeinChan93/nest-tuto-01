/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayersService {
  private players: CreatePlayerDto[] = [
    { "id": 1, "name": "Cristiano Ronaldo", "number": 7, "team": "Al Nassr", "age": 39 },
    { "id": 2, "name": "Lionel Messi", "number": 10, "team": "Inter Miami", "age": 37 },
    { "id": 3, "name": "Kylian Mbappé", "number": 9, "team": "Real Madrid", "age": 26 },
    { "id": 4, "name": "Erling Haaland", "number": 9, "team": "Manchester City", "age": 25 },
    { "id": 5, "name": "Neymar Jr", "number": 11, "team": "Al Hilal", "age": 33 },
    { "id": 6, "name": "Kevin De Bruyne", "number": 17, "team": "Manchester City", "age": 34 },
    { "id": 7, "name": "Mohamed Salah", "number": 11, "team": "Liverpool", "age": 33 },
    { "id": 8, "name": "Harry Kane", "number": 9, "team": "Bayern Munich", "age": 32 },
    { "id": 9, "name": "Luka Modrić", "number": 10, "team": "Real Madrid", "age": 40 },
    { "id": 10, "name": "Vinícius Júnior", "number": 7, "team": "Real Madrid", "age": 25 }
  ];

  create(createPlayerDto: CreatePlayerDto) {
    const newPlayer = {
      ...createPlayerDto,
      id: Date.now(),
    }
    this.players.push(newPlayer);
    return this.players;
  }

  findAll(): CreatePlayerDto[] {
    return this.players;
  }

  findOne(id: number): CreatePlayerDto | undefined {
    return this.players.find(player => player?.id === id);
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    this.players = this.players.map(player => player.id === id ? { ...player, ...updatePlayerDto } : player)
    return this.findOne(id);
  }

  remove(id: number): CreatePlayerDto[] {
    const hasPlayer = this.players.find(player => player?.id === id);
    if (!hasPlayer && hasPlayer === undefined) {
      throw new NotFoundException('Player not found')
    }
    this.players = this.players.filter(player => player?.id !== id);
    return this.players;
  }

  getPlayersByNumber(number: number): CreatePlayerDto[] {
    const players = this.players.filter(player => player.number === number);
    return players;
  }
}
