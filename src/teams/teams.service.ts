import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamEntity } from './team.entity';

@Injectable()
export class TeamsService {

    constructor(@InjectRepository(TeamEntity) private rep:Repository<TeamEntity>){

    }

    async getAllTeams(): Promise<TeamEntity[]>{
        return await this.rep.find();
    }

    async getTeam(_id:number):Promise<TeamEntity[]>{
        return await this.rep.findByIds(
            [
                _id
            ]
        )
    }

    async createTeam(team:TeamEntity){
        await this.rep.insert(team);
    }

    async updateTeam(team:TeamEntity){
        await this.rep.update({id:team.id},team);
    }

    async deleteTeam(team:TeamEntity){
        await this.rep.delete(team);
    }
}
