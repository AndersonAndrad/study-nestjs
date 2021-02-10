import { CatsEntity } from './cats/cats.entity';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'MONGO',
      type: 'mongodb',
      port: 27017,
      database: 'study',
      entities: [CatsEntity],
      synchronize: true,
      useUnifiedTopology: true,
    }),
    CatsModule,
  ],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');

    // if you want to implements in just type of request
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes({ path: 'cats', method: RequestMethod.GET });

    // if you want to implements in just controller
    // consumer.apply(LoggerMiddleware).forRoutes(CatsController);

    // how to connect in two or more databases with typeorm
    // pass all conection config and import in module create and service
  }
}
