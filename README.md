# 프로그램 설명

webpack 환경을 구축한 Boilerplate code 입니다.

# 실행 방법

## client dev 서버 실행 (port: 3000)

- cd client && npm start

## api server 실행 (port: 8080)

- cd server && npm start

# 디렉토리 구조

```
.
├── README.md
├── client
│   ├── App.ts
│   ├── babel.config.json
│   ├── core
│   │   └── Component.ts
│   ├── index.html
│   ├── index.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── pages
│   │   └── MainPage.ts
│   ├── tsconfig.json
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
└── server
    ├── api.js
    ├── app.js
    ├── package-lock.json
    └── package.json

```

# 필요한 모듈

- package.json 참조

# webpack, babel 설치 & 설정 방법

https://polarmin.tistory.com/49
