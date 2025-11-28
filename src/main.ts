import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Swagger configuration object
  const config = new DocumentBuilder()
    .setTitle('StreamSphere API')
    .setDescription('API documentation for StreamSphere backend')
    .setVersion('1.0.0')
    .build();

  // 2. Generate swagger document
  const document = SwaggerModule.createDocument(app, config);

  // 3. Register swagger route
  SwaggerModule.setup('api', app, document);

  // 4. Start server
  const port = process.env.PORT || 4000;
  await app.listen(port);

  // 5. Console log swagger URL
  console.log(`🚀 Server running on: http://localhost:${port}`);
  console.log(`📘 Swagger available at: http://localhost:${port}/api`);
}

bootstrap();
