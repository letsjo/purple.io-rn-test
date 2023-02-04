# 퍼플아이오 코딩테스트 안내

### 제출방법

언어는 C#, Javascript(node), Python, Ruby, Java 중 하나를 선택합니다.

문제별로 파일을 별도로 작성하고 압축해서 제출합니다.

- 압축파일명은 다음과 같은 형식으로 제출해주세요. -> "영문이름\_날짜.zip"
- 압축파일 내 폴더는 영문으로 작성해주세요.
- 프론트엔드 테스트 / 백엔드 테스트 / 모바일 App 테스트의 결과물은 소스가 포함된
  프로젝트로 빌드가 가능한 구조로 전달해주세요.
- 결과물 내 컴파일 결과물은 제외해주세요. (\*.class / war / jar / node_modules
  폴더 등)
- 메일 서비스에서 코드가 포함된 zip 파일 전송이 불가능하다면 구글 드라이브등에업
  로드 후 링크를 공유해주세요.

# 모바일 App 테스트

- RN (React Native) 화면 만들기하단의 요구사항을 읽고 실제로 동작하는 React
  Native 코드를 작성해주세요. 기본 기능에 충실하면 되고 시간적 여유가 되신다면
  아래 추가 과제(선택)를 풀어보셔도 좋습니다.

  ### 준비

  - Node.js
  - [json-server](https://github.com/typicode/json-server)

  ### 요구사항

  [db.json](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ae2f5a59-6b42-4c46-a163-dbd24ffe2a5b/db.json)
  **API Server**

  - json-server를 사용하고 첨부된 `db.json`을 이용합니다.
  - 개발 피시에서 `json-server`를 실행하고 사용합니다. (9000 port)
    - `$ json-server -p 9000 db.json`
  - API 명세는 다음과 같습니다.
    - 리스트 - GET /stores
    - 상세 - GET /stores/:id **Library**
  - [https://reactnavigation.org/](https://reactnavigation.org/) (화면간 이동 및
    탐색, 바텀 네비게이션 구현) **화면** 브랜드 리스트를 보여주고 리스트 중 하나
    의 아이템을 선택하면 상세화면 스택을 제공합니다.
  - 헤더 - 바디 - 바텀 네비게이션 형식으로 표현
  - 헤더(TabBar)와 바텀 네비게이션은 `STORE` / `ABOUT` 으로 구성
  - 상세화면은 헤더와 바텀 네비게이션이 없습니다
  - ABOUT엔 지원자 이름과 간단한 프로젝트 소개 문구 표현
  - STORE 리스트는 한줄에 2개씩, 이미지 그리드로 표현 (REST API 사용)
  - 하나의 아이템을 선택하면 상세화면 스택을 띄우고 설명, 홈페이지 바로가기(url
    이 있을 경우)를 표현
  - 상세화면에선 좌측 하단 백버튼 혹은 제스쳐를 통해 STORE 화면으로 전환
  - 상세화면 상단 이미지는 정방형으로 표현
  - 유효하지 않은 url로 접근시 “링크가 유효하지 않습니다” 알럿 노출

  ### 결과 샘플

  [STORE](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f0ae5070-b095-4f04-bb8d-98124f8f6ec4/store_example.png)
  [STORE DETAIL](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ff635ddc-99d0-4b19-a173-1a1f751ff2ad/detail_example.png)
  [ABOUT](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/15cd0a93-f947-4ec6-b482-76ce87811d8c/about_example.png)

  ### 추가 과제(선택)

  - Landscape 지원 (화면 가로폭 비율에 따라 한줄에 보이는 아이템 개수 다르게 표
    현 (최대 4개)
