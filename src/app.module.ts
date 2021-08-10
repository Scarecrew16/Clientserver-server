import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TeamsModule } from './teams/teams.module';
import { LeaguesModule } from './leagues/leagues.module';

@Module({
  imports: [
    TeamsModule,
    LeaguesModule,
    UsersModule,
    TypeOrmModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath:join(__dirname,'...','avatars')
    }),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
