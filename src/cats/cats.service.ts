import { ICats } from './cats.interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly cats: ICats[] = [];

  create(cat: ICats) {
    this.cats.push(cat);
    return cat;
  }

  findAll(): ICats[] {
    return this.cats;
  }
}
