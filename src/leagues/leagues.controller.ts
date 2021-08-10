import { Body, Controller, Delete, Get, HttpStatus, Injectable ,Param, Patch, Post, Put, UploadedFile, UseInterceptors} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { LeagueEntity } from './league.entity';
import { LeaguesService } from './leagues.service';
import { diskStorage } from 'multer';
import { customName } from 'src/utils/customname';

@Controller('leagues')
export class LeaguesController {
    constructor(private service:  LeaguesService){
    }

    @Get()
    getAllLeagues(){
        return this.service.getAllLeagues();
    }

    @Get(':id')
    getLeague(@Param() params){
        return this.service.getLeague(params.id);
    }

     @Post()
    addUser(@Body() league: LeagueEntity){
        return this.service.createLeague(league);
    }
    
    @Post('upload')
    @UseInterceptors(
        FileInterceptor('image',{
            storage:diskStorage({
                destination:'./logos',
                filename: customName
            })
        })
    )
    async uploadFile(@Body() league:LeagueEntity,@UploadedFile() file){
        league.avatar = file.filename;
        await this.service.createLeague(JSON.parse(JSON.stringify(league)));

        const response = {
            originalName: file.originalname,
            finalName: file.filename
        }
        return{
            status: HttpStatus.OK,
            message:"Image has been uploaded",
            data:response
        }

    }

    @Put()
    updateLeague(@Body() league:LeagueEntity){
        this.service.updateLeague(league);
    }

    @Delete(':id')
    deleteLeague(@Param() params){
        this.service.deleteLeague(params.id);
    }

}
