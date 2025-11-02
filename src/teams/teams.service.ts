/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { premierLeagueTeams } from './entities/team.entity'

@Injectable()
export class TeamsService {
  private teams: CreateTeamDto[] = premierLeagueTeams;

  create(createTeamDto: CreateTeamDto) {
    return { createTeamDto };
  }

  findAll(): CreateTeamDto[] {
    return this.teams;
  }

  findOne(name: string) {
    return this.teams.find(team => team?.name === name);
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
