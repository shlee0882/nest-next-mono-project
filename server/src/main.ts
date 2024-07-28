import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { config } from 'dotenv'
import { join } from 'path'

// 환경에 따라 다른 .env 파일을 로드합니다.
const envFile =
  process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
config({ path: join(__dirname, '..', envFile) })

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // CORS 설정 추가
  app.enableCors({
    origin: process.env.CORS_ORIGIN || '*', // 허용할 도메인 설정
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'], // 허용할 헤더
    credentials: true, // 쿠키와 인증 정보를 허용하려면 true로 설정
  })

  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('The API description')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('swagger', app, document, {
    customSiteTitle: 'Backend Generator',
    customfavIcon: 'https://avatars.githubusercontent.com/u/6936373?s=200&v=4',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js',
    ],
    customCssUrl: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css',
    ],
  })

  await app.listen(process.env.PORT || 3000)
}
bootstrap()
