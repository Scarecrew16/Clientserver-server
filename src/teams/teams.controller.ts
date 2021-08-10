import { Body, Controller, Delete, Get, HttpStatus, Injectable ,Param, Patch, Post, Put, UploadedFile, UseInterceptors} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { TeamEntity } from './team.entity';
import { TeamsService } from './teams.service';
import { diskStorage } from 'multer';
import { customName } from 'src/utils/customname';


@Controller('teams')
export class TeamsController {
    constructor(private service:  TeamsService){
    }

    @Get()
    getAllUsers(){
        return this.service.getAllTeams();
    }

    @Get(':id')
    getUser(@Param() params){
        return this.service.getTeam(params.id);
    }

     @Post()
    addUser(@Body() team: TeamEntity){
        return this.service.createTeam(team);
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
    async uploadFile(@Body() team:TeamEntity,@UploadedFile() file){
        team.avatar = file.filename;
        await this.service.createTeam(JSON.parse(JSON.stringify(team)));

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
    updateTeam(@Body() team:TeamEntity){
        this.service.updateTeam(team);
    }

    @Delete(':id')
    deleteTeam(@Param() params){
        this.service.deleteTeam(params.id);
    }


}
