import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LeagueEntity } from './league.entity';

@Injectable()
export class LeaguesService {

    constructor(@InjectRepository(LeagueEntity) private rep:Repository<LeagueEntity>){

    }

    async getAllLeagues(): Promise<LeagueEntity[]>{
        return await this.rep.find();
    }

    async getLeague(_id:number):Promise<LeagueEntity[]>{
        return await this.rep.findByIds(
            [
                _id
            ]
        )
    }

    async createLeague(league:LeagueEntity){
        await this.rep.insert(league);
    }

    async updateLeague(league:LeagueEntity){
        await this.rep.update({id:league.id},league);
    }

    async deleteLeague(league:LeagueEntity){
        await this.rep.delete(league);
    }
}
