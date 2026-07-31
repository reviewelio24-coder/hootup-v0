import type { Course } from './hootup-data'

export type CategoryCourse = Course & {
  subcategory: string
  earlybird?: boolean
  event?: boolean
}

/** Figma 공예・핸드메이드 세부 카테고리 (node 154:15157) */
export const craftHandmadeSubcategories = [
  '전체',
  '가죽 & 패브릭 공예',
  '도예 & 점토',
  '캔들 & 플라워',
  '주얼리 & 데코 소품',
] as const

export type CraftHandmadeSubcategory = (typeof craftHandmadeSubcategories)[number]

/** 공예 & 핸드메이드 1페이지 (Figma 11강 · node 154:15152) */
export const craftHandmadeCoursesPage1: CategoryCourse[] = [
  {
    id: 'ch-leather',
    title: '손끝에서 완성되는 첫 가죽 카드지갑 만들기',
    author: '레더공방 모루・30강・6시간',
    discount: 35,
    origin: 99000,
    final: 64350,
    rating: 4.8,
    reviews: 2340,
    thumb: '/figma/img/ch-leather.png',
    avatar: '/figma/img/ch-av-1.png',
    subcategory: '가죽 & 패브릭 공예',
    earlybird: true,
    event: true,
  },
  {
    id: 'ch-handbuild',
    title: '손으로 빚는 나만의 그릇, 핸드빌딩 도예',
    author: '흙내음 도원・34강・7시간 30분',
    discount: 30,
    origin: 110000,
    final: 77000,
    rating: 4.8,
    reviews: 2010,
    thumb: '/figma/img/ch-handbuild.png',
    avatar: '/figma/img/ch-av-2.png',
    subcategory: '도예 & 점토',
    earlybird: true,
  },
  {
    id: 'ch-candle',
    title: '향으로 채우는 소이캔들 & 디퓨저 만들기 클래스',
    author: '센트랩・32강・6시간',
    discount: 35,
    origin: 88000,
    final: 57200,
    rating: 4.8,
    reviews: 2560,
    thumb: '/figma/img/ch-candle.png',
    avatar: '/figma/img/ch-av-3.png',
    subcategory: '캔들 & 플라워',
    earlybird: true,
    event: true,
  },
  {
    id: 'ch-beads',
    title: '나만의 트렌디한 비즈 액세서리 만들기',
    author: '공방소소 윤・26강・5시간',
    discount: 30,
    origin: 77000,
    final: 53900,
    rating: 4.6,
    reviews: 1320,
    thumb: '/figma/img/ch-beads.png',
    avatar: '/figma/img/ch-av-4.png',
    subcategory: '주얼리 & 데코 소품',
    earlybird: true,
  },
  {
    id: 'ch-wreath',
    title: '사계절 질리지 않는 드라이플라워 리스 만들기',
    author: '플로리스트 하리・30강・6시간',
    discount: 30,
    origin: 99000,
    final: 69300,
    rating: 4.7,
    reviews: 1780,
    thumb: '/figma/img/ch-wreath.png',
    avatar: '/figma/img/ch-av-5.png',
    subcategory: '캔들 & 플라워',
    earlybird: true,
  },
  {
    id: 'ch-knit',
    title: '엄마표 사계절 손뜨개 니트 소품 만들기 기초반',
    author: '뜨개상점 보들・36강・7시간',
    discount: 30,
    origin: 88000,
    final: 61600,
    rating: 4.7,
    reviews: 2180,
    thumb: '/figma/img/ch-knit.png',
    avatar: '/figma/img/ch-av-6.png',
    subcategory: '가죽 & 패브릭 공예',
    earlybird: true,
  },
  {
    id: 'ch-resin',
    title: '눈부시도록 투명하게 빛나는 레진 공예 입문반',
    author: '말랑레진 도이・30강・6시간',
    discount: 25,
    origin: 88000,
    final: 66000,
    rating: 4.7,
    reviews: 1880,
    thumb: '/figma/img/ch-resin.png',
    avatar: '/figma/img/ch-av-7.png',
    subcategory: '주얼리 & 데코 소품',
    earlybird: true,
  },
  {
    id: 'ch-clay',
    title: '집에서 시작하는 점토 공예 소품 만들기 클래스',
    author: '조물조물 새라・26강・5시간',
    discount: 20,
    origin: 77000,
    final: 61600,
    rating: 4.6,
    reviews: 1180,
    thumb: '/figma/img/ch-clay.png',
    avatar: '/figma/img/ch-av-8.png',
    subcategory: '도예 & 점토',
    earlybird: true,
  },
  {
    id: 'ch-wheel',
    title: '물레로 빚는 첫 나만의 도자기, 라이프 도예',
    author: '흙내음 도원・38강・8시간',
    discount: 30,
    origin: 121000,
    final: 84700,
    rating: 4.7,
    reviews: 1560,
    thumb: '/figma/img/ch-wheel.png',
    avatar: '/figma/img/ch-av-9.png',
    subcategory: '도예 & 점토',
    earlybird: true,
  },
  {
    id: 'ch-embroidery',
    title: '전통 기법으로 한 땀 한 땀, 일상 자수 입문',
    author: '자수공방 린넨・28강・5시간 30분',
    discount: 25,
    origin: 77000,
    final: 57750,
    rating: 4.6,
    reviews: 1320,
    thumb: '/figma/img/ch-embroidery.png',
    avatar: '/figma/img/ch-av-10.png',
    subcategory: '가죽 & 패브릭 공예',
    earlybird: true,
  },
  {
    id: 'ch-flower',
    title: '아이들과 집에서 만드는 생화 플라워 클래스',
    author: '플로리스트 하리・28강・5시간 30분',
    discount: 20,
    origin: 88000,
    final: 70400,
    rating: 4.6,
    reviews: 1340,
    thumb: '/figma/img/ch-flower.png',
    avatar: '/figma/img/ch-av-11.png',
    subcategory: '캔들 & 플라워',
    earlybird: true,
  },
]

export const CRAFT_HANDMADE_TOTAL_PAGES = 1

export const craftHandmadeSubcategoryRoutes: Partial<Record<CraftHandmadeSubcategory, string>> = {
  전체: '/category/craft-handmade',
  '가죽 & 패브릭 공예': '/category/craft-handmade/leather-fabric',
}

export function getCraftHandmadeCoursesByPage(page: number): CategoryCourse[] {
  void page
  return craftHandmadeCoursesPage1
}

export function getAllCraftHandmadeCourses(): CategoryCourse[] {
  return [...craftHandmadeCoursesPage1]
}

export function getCraftHandmadeCoursesBySubcategory(
  sub: CraftHandmadeSubcategory,
): CategoryCourse[] {
  if (sub === '전체') return getAllCraftHandmadeCourses()
  return getAllCraftHandmadeCourses().filter((c) => c.subcategory === sub)
}
