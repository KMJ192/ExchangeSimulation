# 토이프로젝트 - 가상화폐 거래소 토이 프로잭트 (prototype)

bolier Plate Code : https://github.com/KMJ192/BolierPlateCode_1

진행 : https://kmj24.tistory.com/category/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EA%B1%B0%EB%9E%98%EC%86%8C%20%EB%AA%A8%EC%9D%98%ED%88%AC%EC%9E%90%20%EC%82%AC%EC%9D%B4%ED%8A%B8%20%EB%A7%8C%EB%93%A4%EA%B8%B0

### Client
- dev stack
  - typescript
  - React
  - Redux
    + thunk
    + saga
  - scss
  - styled-components
  - web socket(업비트 open api)

### Server
- dev stack
  - typescript
  - nest.js
  - mysql

### Todo List
- front-end
  - candle데이터 한번에 최대 200개 받아올 수 있으므로 request parameter에 스크롤 움직임에 따른 시간 계산 로직 추가
  - 모의투자 구현
    + 
  - upbit에서 받아온 데이터 시각화
    + light-weight chart 사용
- back-end
  - . . .

### 완료된 작업
- front-end
  - upbit open api 모듈화(redux, redux-thunk, redux-saga, websocket)
  - 실시간 시세 리스트 구현
  - 실시간 체결창 구현
  - ask/bid 화면 완료
  - mock데이터 설정 기능, 매도/매수 기능 구현
- back-end
  - . . .

### 화면
![sample](./a-progress/sample.gif)


### upbit open api
- REST API
  + 시세 종목 조회(market, korean_name, english_name)
  + 시세 캔들 조회(Candle stick chart)
  + Ticker 조회 (실시간 시세 정보)
  + Trade 조회 (실시간 체결 정보)
  + Orderbook 조호 (실시간 호가 정보)
- Web Socket API
  + Ticker(시세) | Trade(채결) | Orderbook(호가)
  ```ts
  //ticker type
  interface Ticker {
    type: string;
    code: string;
    opening_price: number;
    high_price: number;
    trade_price: number;
    prev_closing_price: number;
    change: "RISE" | "EVEN" | "FALL";
    change_price: number;
    signed_change_price: number;
    change_rate: number;
    signed_change_rate: number;
    trade_volume: number;
    acc_trade_volume: number;
    acc_trade_volume_24h: number;
    acc_trade_price: number;
    acc_trade_price_24h: number;
    trade_date: string;
    trade_time: string;
    trade_timestamp: number;
    ask_bid: string;
    acc_ask_volume: number;
    acc_bid_volume: number;
    highest_52_week_price: number;
    highest_52_week_date: string;
    lowest_52_week_price: number;
    lowest_52_week_date: string;
    trade_status: string;
    market_state: string;
    market_state_for_ios: string;
    is_trading_suspended: boolean;
    delisting_date: Date;
    market_warning: string;
    timestamp: number;
    stream_type: string;
  }

  //Trade type
  interface Trade{
    ask_bid: "ASK" | "BID";
    change: string;
    change_price: string;
    code: string;
    prev_closing_price: number;
    sequential_id: number;
    stream_type: string;
    timestamp: number;
    trade_date: string;
    trade_price: number;
    trade_time: string;
    trade_timestamp: number;
    trade_volume: number;
    type: string;
  }

  //Orderbook Type
  interface Orderbook{
    code: string;
    orderbook_units: {
        ask_price: number;
        ask_size: number;
        bid_price: number;
        bid_size: number;
    }[];
    stream_type: string;
    timestamp: number;
    total_ask_size: number;
    total_bid_size: number;
    type: string;
  }
  ```
- 화면별 필요 데이터
  + 필요 데이터 : 마켓 코드, 마켓 이름, 현재가(증/감), 전일대비(%, 원화), 24시간 거래금액 
  + Rest API 시세종목, Ticker websocket 에서 조회
  + 실시간 시세 창 (Real Time Price Window)
    - Rest API의 시세 종목 조회 => market_code, korean_name GET
    - market_code를 이용하여 Ticker Socket Data GET
    - 단위 Column
      + market name => Rest API의 시세 종목 조회 API "korean_name"
    - 현재가 Column
      + 현재가 => Ticker.change (증가-"RISE" or 감소-"FALL" or 보합-"EVEN")
    - 전일대비 Column
      + % : Ticker.signed_change_rate
      + krw : Ticker.signed_change_price
    - 거래금액
      + Ticker.acc_trade_price_24h
  + 호가창 (Orderbook Window)
    - 필요 데이터 : 마켓코드, 매수호가/잔량(bid), 매도호가/잔량(ask), 매수 총 잔량, 매도 총 잔량, list별 
    - 선택된 coin을 기준으로 mount하며, 최초로 mounting 되었을 때 market code는 REST API로 조회한 market code의 가장 첫번째 coin을 대상으로 한다.
    - 호가창 mount시 REST API로 조회하며, 이후 Socket Data로 update
    - REST API로 받아오는 JSON값과 Socket Data의 JSON값이 다르므로 합쳐주어야 한다.
    ```ts
    //websocket은 type과 code가 있음
    //restApi는 market이 있음
    //websocket의 code === restApi market
    //그 외는 같다
    interface websocket {
      type: string;
      code: string;
    }
    interface restApi {
      market: string;
    }
    ```
    - 배열 형태로 출력한다.
    - 