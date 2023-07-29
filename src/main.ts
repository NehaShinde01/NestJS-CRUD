import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();//it gives us an permission to acces API from any server
  await app.listen(3000);
}
bootstrap();
