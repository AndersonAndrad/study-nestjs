import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {
  constructor(private catService: CatsService) {}
}
