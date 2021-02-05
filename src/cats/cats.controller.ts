import { ICats } from './cats.interfaces';
import { CatsService } from './cats.service';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() data: ICats) {
    this.catsService.create(data);
  }

  @Get()
  async findAll(): Promise<ICats[]> {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'this is a custom message',
      },
      HttpStatus.FORBIDDEN,
    );
  }
}
