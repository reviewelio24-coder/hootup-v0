export type Course = {
  id: string
  title: string
  author: string
  discount: number
  origin: number
  final: number
  rating: number
  reviews: number
  thumb: string
  avatar: string
}

export type Collection = {
  id: string
  highlight: string
  title: string
  courses: Course[]
}

const AV1 = '/figma/img/avatar-1.png'
const AV2 = '/figma/img/avatar-2.png'

export const collections: Collection[] = [
  {
    id: 'signature',
    highlight: 'HOOT UP 시그니처,',
    title: '개발자라면 반드시 거치는 클래스',
    courses: [
      {
        id: 'react',
        title: '포트폴리오까지 끝내는 React 프론트엔드 실전 프로젝트',
        author: '코드랩 현우 · 88강 · 18시간',
        discount: 40,
        origin: 165000,
        final: 99000,
        rating: 4.2,
        reviews: 1234,
        thumb: '/figma/img/course-react.png',
        avatar: AV1,
      },
      {
        id: 'webpub',
        title: '제로부터 완성하는 반응형 웹 퍼블리싱 마스터 클래스',
        author: '코드랩 현우 · 52강 · 11시간',
        discount: 30,
        origin: 110000,
        final: 77000,
        rating: 4.5,
        reviews: 982,
        thumb: '/figma/img/course-webpub.png',
        avatar: AV1,
      },
      {
        id: 'js',
        title: '바닐라 자바 스크립트로 만드는 인터랙티브 웹',
        author: '코드랩 현우 · 56강 · 12시간',
        discount: 30,
        origin: 143000,
        final: 100100,
        rating: 4.4,
        reviews: 756,
        thumb: '/figma/img/course-js.png',
        avatar: AV1,
      },
      {
        id: 'css',
        title: 'CSS Flex & Grid 레이아웃 완전 정복',
        author: '코드랩 현우 · 44강 · 8시간 30분',
        discount: 40,
        origin: 99000,
        final: 59400,
        rating: 4.6,
        reviews: 1102,
        thumb: '/figma/img/course-css.png',
        avatar: AV1,
      },
    ],
  },
  {
    id: 'ai',
    highlight: 'AI 시대,',
    title: '모두가 주목하는 가장 뜨거운 클래스',
    courses: [
      {
        id: 'claude',
        title: '개발 생산성 10배 올리는 클로드 코드 마스터 과정',
        author: '새벽코딩 제이든 · 48강 · 10시간',
        discount: 30,
        origin: 154000,
        final: 107800,
        rating: 4.7,
        reviews: 641,
        thumb: '/figma/img/course-claude.png',
        avatar: AV1,
      },
      {
        id: 'vibe',
        title: 'AI와 함께 일하는 바이브 코딩 실무 완전 가이드',
        author: '바이브코더 케이 · 40강 · 8시간',
        discount: 35,
        origin: 132000,
        final: 85800,
        rating: 4.5,
        reviews: 523,
        thumb: '/figma/img/course-vibe.png',
        avatar: AV1,
      },
      {
        id: 'pair',
        title: 'AI 페어 프로그래밍으로 일하는 법 마스터 클래스',
        author: '페어업 도현 · 36강 · 7시간',
        discount: 25,
        origin: 110000,
        final: 82500,
        rating: 4.3,
        reviews: 388,
        thumb: '/figma/img/course-pair.png',
        avatar: AV1,
      },
      {
        id: 'cursor',
        title: '커서·코파일럿 200% 활용법 및 포트폴리오 프로젝트',
        author: '툴덕후 빈 · 30강 · 6시간',
        discount: 20,
        origin: 88000,
        final: 70400,
        rating: 4.4,
        reviews: 274,
        thumb: '/figma/img/course-cursor.png',
        avatar: AV1,
      },
    ],
  },
  {
    id: 'design',
    highlight: '디자인 좀 치는 사람들이',
    title: '선택하는 클래스',
    courses: [
      {
        id: 'figma',
        title: '피그마로 완성하는 UX/UI 디자인 입문',
        author: '디자이너 서린 · 40강 · 9시간',
        discount: 35,
        origin: 132000,
        final: 85800,
        rating: 4.8,
        reviews: 912,
        thumb: '/figma/img/course-figma.png',
        avatar: AV2,
      },
      {
        id: 'brand',
        title: '무드보드부터 컬러까지, 브랜드 아이덴티티 설계',
        author: '스튜디오 결 · 34강 · 7시간',
        discount: 20,
        origin: 121000,
        final: 96800,
        rating: 4.6,
        reviews: 431,
        thumb: '/figma/img/course-brand.png',
        avatar: AV2,
      },
      {
        id: 'painting',
        title: '디지털 페인팅으로 그리는 컨셉아트 입문',
        author: '그림창고 보리 · 46강 · 10시간',
        discount: 30,
        origin: 121000,
        final: 84700,
        rating: 4.7,
        reviews: 358,
        thumb: '/figma/img/course-painting.png',
        avatar: AV2,
      },
      {
        id: 'illust',
        title: '일러스트레이터로 시작하는 벡터 그래픽',
        author: '벡터공방 단 · 40강 · 8시간',
        discount: 30,
        origin: 110000,
        final: 77000,
        rating: 4.5,
        reviews: 289,
        thumb: '/figma/img/course-illust.png',
        avatar: AV2,
      },
    ],
  },
]

export const categories = [
  { id: 'dev', label: '개발・IT', icon: '/figma/calendar.svg' },
  { id: 'career', label: '커리어・머니', icon: '/figma/cash-stack.svg' },
  { id: 'photo', label: '사진・영상', icon: '/figma/camera.svg' },
  { id: 'draw', label: '드로잉・일러스트', icon: '/figma/easel.svg' },
  { id: 'wellness', label: '운동・마음챙김', icon: '/figma/heart-pulse.svg' },
  { id: 'more', label: '더보기', icon: '/figma/three-dots.svg' },
]

export const navItems = [
  '전체 카테고리',
  '베스트 클래스',
  '이벤트',
  '새로운 클래스',
  '신규 회원 혜택',
  '시그니쳐 클래스',
]

export const chart: Course[] = [
  {
    id: 'ipad-draw',
    title: '아이패드로 시작하는 감성 캐릭터 드로잉',
    author: '무지(MOOZI)・28강・6시간',
    discount: 35,
    origin: 99000,
    final: 64350,
    rating: 4.6,
    reviews: 512,
    thumb: '/figma/img/chart-drawing.png',
    avatar: AV2,
  },
  {
    id: 'leather',
    title: '손끝에서 완성되는 첫 가죽 카드지갑 만들기',
    author: '레더공방 모루・30강・6시간',
    discount: 35,
    origin: 99000,
    final: 64350,
    rating: 4.5,
    reviews: 388,
    thumb: '/figma/img/chart-leather.png',
    avatar: AV1,
  },
  {
    id: 'photo-smart',
    title: '스마트폰 하나로 인생샷 만드는 사진 클래스',
    author: '빛그림 윤도・42강・8시간',
    discount: 35,
    origin: 99000,
    final: 64350,
    rating: 4.7,
    reviews: 641,
    thumb: '/figma/img/chart-photo.png',
    avatar: AV1,
  },
  {
    id: 'yoga',
    title: '뻣뻣한 몸이 풀리는 14일 모닝 요가 루틴',
    author: '요가하는 미오・30강・5시간 30분',
    discount: 35,
    origin: 88000,
    final: 57200,
    rating: 4.8,
    reviews: 723,
    thumb: '/figma/img/chart-yoga.png',
    avatar: AV2,
  },
  {
    id: 'cook',
    title: '자취생을 위한 실패 없는 한 끼 홈쿡 30',
    author: '키친노트 단・40강・8시간',
    discount: 35,
    origin: 88000,
    final: 57200,
    rating: 4.4,
    reviews: 456,
    thumb: '/figma/img/chart-cook.png',
    avatar: AV1,
  },
  {
    id: 'insta',
    title: '0원으로 시작하는 인스타 콘텐츠 마케팅',
    author: '마케터 하루・50강・10시간',
    discount: 35,
    origin: 121000,
    final: 78650,
    rating: 4.5,
    reviews: 389,
    thumb: '/figma/img/chart-insta.png',
    avatar: AV2,
  },
]

export type Magazine = {
  id: string
  tag: string
  title: string
  desc: string
  author: string
  avatar: string
  date: string
  comments: number
  thumb: string
}

export const magazines: Magazine[] = [
  {
    id: 'draw',
    tag: 'Drawing',
    title: '그림 똥손도 21일이면 달라진다, 매일 10분 드로잉의 힘',
    desc: '작은 습관이 만드는 큰 변화. 매일 10분씩 손을 움직이는 것만으로도 관찰력과 표현력이 어떻게 달라지는지 살펴봅니다.',
    author: '끄적이는 밤',
    avatar: AV2,
    date: 'June 13',
    comments: 19,
    thumb: '/figma/img/mag-drawing.png',
  },
  {
    id: 'pub',
    tag: 'Development & IT',
    title: '비전공자가 6개월 만에 웹 퍼블리셔로 취업한 진짜 순서',
    desc: '무엇을 언제 배웠고 어떤 포트폴리오로 서류를 통과했는지, 막연한 조언 대신 실제로 밟은 단계를 순서대로 정리했습니다.',
    author: '코드랩 현우',
    avatar: AV1,
    date: 'June 13',
    comments: 19,
    thumb: '/figma/img/mag-helloworld.png',
  },
  {
    id: 'money',
    tag: 'Career & Money',
    title: '퇴근 후 2시간, N잡으로 첫 수익을 만든 사람들의 공통점',
    desc: '거창한 사업 계획 없이도 첫 수익을 만든 사람들. 그들이 공통적으로 지킨 아주 단순한 원칙 세 가지를 소개합니다.',
    author: '사이드랩 민',
    avatar: AV1,
    date: 'June 13',
    comments: 19,
    thumb: '/figma/img/mag-money.png',
  },
]

export type News = {
  id: string
  tag: string
  title: string
  desc: string
  reporter: string
  thumb: string
}

export const news: News[] = [
  {
    id: 'ai-tool',
    tag: 'Tech · AI',
    title: 'AI 코딩 도구, 개발자의 하루는 어떻게 바뀌나',
    desc: '자동 완성을 넘어 리팩터링과 테스트까지. 현업 개발자들의 실제 작업 방식이 어떻게 재편되고 있는지 짚어봅니다.',
    reporter: '정태현 기자',
    thumb: '/figma/img/news-ai.png',
  },
  {
    id: 'senior',
    tag: 'Career',
    title: '주니어에서 시니어로, 연봉을 가르는 1년',
    desc: '같은 연차라도 벌어지는 격차의 이유. 성장하는 개발자들이 1년 동안 집중한 역량은 무엇이었을까요.',
    reporter: '박하늘 기자',
    thumb: '/figma/img/news-career.png',
  },
  {
    id: 'frontend',
    tag: 'Development · IT',
    title: '2026 프론트엔드, 지금 주목해야 할 기술 흐름',
    desc: '프레임워크 경쟁을 넘어 렌더링과 빌드 도구의 변화까지. 올해 눈여겨봐야 할 흐름을 정리했습니다.',
    reporter: '김도윤 기자',
    thumb: '/figma/img/news-frontend.png',
  },
  {
    id: 'prompt',
    tag: 'Tech · AI',
    title: "'프롬프트 잘 쓰는 법'이 곧 실력이 되는 시대",
    desc: '질문을 설계하는 능력이 새로운 문해력으로 떠오릅니다. 좋은 프롬프트가 결과를 어떻게 바꾸는지 살펴봅니다.',
    reporter: '한지우 기자',
    thumb: '/figma/img/news-prompt.png',
  },
  {
    id: 'bootcamp',
    tag: 'Career',
    title: '비전공 개발 취업, 부트캠프 그 다음의 갈림길',
    desc: '수료 이후가 진짜 시작. 취업에 성공한 사람과 멈춘 사람의 결정적 차이를 인터뷰로 담았습니다.',
    reporter: '박하늘 기자',
    thumb: '/figma/img/news-bootcamp.png',
  },
  {
    id: 'nocode',
    tag: 'Development · IT',
    title: '노코드는 개발자의 적인가, 동료인가',
    desc: '코드 없는 개발 도구의 부상. 개발자의 역할을 위협하는지, 오히려 확장하는지 현장의 목소리를 들었습니다.',
    reporter: '김도윤 기자',
    thumb: '/figma/img/news-nocode.png',
  },
]

export const footerLinks = [
  {
    title: 'HOOT UP',
    links: ['브랜드 스토리', '훗업 데스크(뉴스)', '훗업 매거진(블로그)', '단체 교육 (B2B)', '채용 안내'],
  },
  {
    title: '둘러보기',
    links: [
      '전체 카테고리',
      '훗업 차트(베스트)',
      '갓 부화한 클래스',
      '훗업 페스타(이벤트)',
      '레벨업 로드맵',
      '올나잇 패스(구독)',
    ],
  },
  {
    title: '크리에이터 지원',
    links: ['클래스 개설 문의하기', '크리에이터 가이드', '스튜디오 대여', '정산・수익 안내', '멘토 교육 지원'],
  },
  {
    title: '고객센터',
    links: ['공지사항', '자주 묻는 질문(FAQ)', '이용약관', '개인정보처리방침', '환불 규정'],
  },
]

export const footerPolicies = [
  '이용약관',
  '개인정보처리방침',
  '청소년 보호정책',
  '환불 규정',
  '사업자정보 확인',
]

export const footerContacts = [
  { label: '환불 문의', email: 'refund@hootup.co.kr' },
  { label: '기타 문의', email: 'help@hootup.co.kr' },
  { label: '크리에이터 지원', email: 'creator@hootup.co.kr' },
]

export function formatPrice(n: number) {
  return n.toLocaleString('ko-KR') + '원'
}
