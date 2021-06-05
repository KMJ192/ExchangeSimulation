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
- front-end
  - 빗썸api -> Get Data
  - candlestick chart 구현(Data 배열 최대길이 200)
  - 1분단위 chart 배열 갱신 및 coin_data save request
  - coin별 최초 데이터 저장 유무 local storage에 저장
    + (```true``` : 저장완료, ```false``` : 미저장, request to server)

- back-end
  - data 전역저장
  - coin table, coin_data table join
### 설계
  - Server side에서 api를 받아서 DB에 저장하고, 
  - Client에서는 Server로 받아본다.