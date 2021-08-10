import { Module } from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { LeaguesController } from './leagues.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeagueEntity } from './league.entity';

@Module({
  providers: [LeaguesService],
  controllers: [
    LeaguesController
  ],
  imports:[
    TypeOrmModule.forFeature(
      [
        LeagueEntity
      ]
    )
  ]
})
export class LeaguesModule {}
