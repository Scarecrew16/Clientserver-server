import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamEntity } from './team.entity';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';

@Module({
  providers: [TeamsService],
  controllers:[
    TeamsController
  ],
  imports:[
    TypeOrmModule.forFeature(
      [
        TeamEntity
      ]
      )
  ]
})
export class TeamsModule {}