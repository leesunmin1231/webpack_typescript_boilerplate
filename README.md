# 프로그램 설명
webpack 환경을 구축한 Boilerplate code 입니다.
webpack 설정 코드만 보시려면 client 폴더만 참고 하시면 됩니다.
server는 잘 작동하는지 확인용으로 넣었습니다.

# 실행 방법
## webpack으로 dist 폴더 생성
   - cd client && npm start
## server 실행
   - cd server && npm start
## localhost 8080 접속

# 디렉토리 구조

```
webpack
├─ README.md
├─ client
│  ├─ babel.config.json
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ images
│  │  ├─ javascripts
│  │  │  └─ index.js
│  │  └─ stylesheets
│  │     └─ style.scss
│  └─ webpack.config.js
└─ server
   ├─ app.js
   ├─ package-lock.json
   ├─ package.json
   └─ routes
      └─ main.js

```

# 필요한 모듈
- package.json 참조  

# webpack, babel 설치 & 설정 방법

https://polarmin.tistory.com/49

# express, express-generator 설치
- npm install -D express
- npm install -D express-generator