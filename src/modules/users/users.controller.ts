import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Get('menuItems/:id')
  async menuItems(@Param('id') id: string, @Res() res: Response) {
    const isUserFound = this.usersService.findOneByUserId(id);
        if (Object.keys(isUserFound).length === 0 && isUserFound.constructor === Object) {
            let newUser: CreateUserDto = {
                "user_id": id,
                "user_type":"user"
            }
            let user = await this.usersService.create(newUser)
            res.status(200).send(user);
        }

        let responseJSON = { "id": id, "workspace": [], "dashboard": [] }
        res.status(200).send(responseJSON);
  }
}
