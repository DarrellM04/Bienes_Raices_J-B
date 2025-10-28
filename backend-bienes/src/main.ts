import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  // Cambia el puerto aquí (por ejemplo a 5000)
  await app.listen(3000);
  console.log(`Backend corriendo en: http://localhost:3000`);
}
bootstrap();
