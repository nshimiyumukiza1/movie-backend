import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
@ApiTags("Users")
@Controller('users')
export class UsersController {
    constructor (private readonly userService: UsersService){}
    @Post()
    @ApiOperation({summary:'Create a new user'})
    @ApiResponse({description:"user created succefuly!",type:CreateUserDto.Output})

    async create(@Body()input:  CreateUserDto.Input):Promise<CreateUserDto.Output>{
        return this.userService.create(input)
    }

    @Get()
    @ApiOperation({summary:'get all user'})
    @ApiResponse({description:"list of users",type:CreateUserDto.Output})
    
    async getAllUser():Promise<CreateUserDto.Output[]>{
        return this.userService.getAllUser();
    }

}
