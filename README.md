
### 개요

NestJs, NextJs Monorepo 프로젝트

### 구조

```bash
nest-next-mono-project/
│
├── client/
│   ├── src/
│   │   └── app/
│   │       └── page.tsx
│   ├── package.json
│   └── tsconfig.json
│
├── server/
│   ├── src/
│   │   │── items/
│   │   │   └── items.controller.ts
│   │   │── app.module.ts
│   │   └── main.ts
│   ├── package.json
│   └── tsconfig.json
│
├── package.json
└── tsconfig.json
```

### 실행
```bash
$ npm install
```

### 배포
```bash
$ npm run prod:build
$ vercel --prod
```
### 배포된 URL

- [NextJs](https://nest-next-mono-project-shlee0882-shlee0882s-projects.vercel.app/) 
- [NestJs API](https://nest-next-mono-project-shlee0882-shlee0882s-projects.vercel.app/api/items)
- [Swagger UI](https://nest-next-mono-project-shlee0882-shlee0882s-projects.vercel.app/swagger)


### 사용 기술

- NestJs
- NextJs
- MongoDB
- Vercel
