# 토이프로젝트 - 가상화폐 거래소 토이 프로잭트

bolier Plate Code : https://github.com/KMJ192/BolierPlateCode_1

### Client
- dev stack
  - typescript
  - React
  - Redux
  - scss
  - styled-components
  - apexcharts

### Server
- dev stack
  - typescript
  - nest.js
  - mysql

### 할일
front-end
 - light-weight chart 사용?
 - Upbit api -> Get Data
 - candlestick chart 구현(Data 배열 최대길이 200)
 - 1분단위 chart 배열 갱신 및 coin_data save request
back-end
 - data 전역저장
 - DBTable 설계

<!-- Server에서 가동시 Upbit api 요청(1분 단위)
상위 50개
응답받은 데이터 DB에 저장
Client에서 1분 단위로 Server에 요청 및 응답받음
응답받은 Data 출력 테이블/차트 -->