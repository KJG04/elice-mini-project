# 기술스택
- React js
- Typescript
- Emotion
- Axios
- React Query
- Recoil

# 파일 구조
```bash
└── src
    ├── apis        //api 호출을 하는 함수를 관리합니다
    ├── assets
    ├── atoms       //생성한 recoil atom을 관리합니다
    ├── components  //컴포넌트를 관리합니다
    ├── constants   //상수를 관리합니다
    ├── container   //컴포넌트를 합칠 컨테이너를 관리합니다. 한 컨테이너가 한 화면을 담당합니다
    ├── queries     //react query를 custom hook으로 묶은 hook을 관리합니다
    ├── types       //여러곳에서 쓰이는 type, interface를 관리합니다
    └── utils
``` 

# 상태 관리

### 클라이언트 상태
> 클라이언트 상태를 관리하기 위해 recoil을 사용했습니다

검색할때 필요한 keyword, price, offset을 searchState로 묶어 관리하였습니다.

Pagination에서 필요한 courseList의 개수를 Length로 관리하였습니다.

### 서버 상태
> 서버 상태를 관리하기 위해 react-qurey를 사용했습니다.

지금은 코스 목록을 가져오는 API를 한곳에서만 쓰지만, 다른 곳에서도 필요할 경우를 대비해

useCourseList라는 custom hook을 작성해 hook안에서 useQuery를 호출하여 데이터를 가져왔습니다.

useQurey key에 searchState의 값을 넣어줘서 searchState가 바뀔때마다 fetch가 되도록 하였습니다.

# 컴포넌트

### Body
- useCourseList를 사용해 course list를 가져와서 보여주는 역할을 합니다.
- 오류가 날시 `오류 발생: (error 로그)`를 보여줍니다.
- 가져오는 중일때 20개의 skeleton을 보여줍니다

### Filter
- searchState.chips를 보여줍니다.
- 아이템을 클릭하면 active => !active 합니다.

### Pagination
- lengthState와 searchState.offset을 가져와 page를 계산합니다.
- 계산한 page를 보여줍니다.
- page를 클릭시 해당 페이지로 이동합니다.
- 화살표 클릭시 이동합니다.

### Search Area
- input 값이 바뀔때마다 setTimeout을 사용해 300ms뒤에 searchState.title을 업데이트 합니다.
- 이때 가장 최신값을 참조하기 위해 ref를 사용합니다.

### Main Container
- searchState가 바뀔때마다 query string을 업데이트 합니다.
