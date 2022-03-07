import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api');
  // app.enableCors({
  //   origin: 'http://localhost:4200'
  // });

  // await app.listen(3001);

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://oulvbner:qrtnF2MPL4rdbo0GgRxC-nC_JWUcVCmh@chimpanzee.rmq.cloudamqp.com/oulvbner'],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  app.listen();

}
bootstrap();
