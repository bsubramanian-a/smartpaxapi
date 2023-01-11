import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('users')
export class UsersController {
    @Get('menuItems/:id')
    menuItems(@Param('id') id: string, @Res() res: Response) {
        
        let responseJSON = { "id": id, "workspace": [], "dashboard": [] }
        res.status(200).send(responseJSON);
    }
}
