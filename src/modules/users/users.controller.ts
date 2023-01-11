import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get(':id')
    menuItems(@Param('id') id:string): string {
        return id;
    }
}
