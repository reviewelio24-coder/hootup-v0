import type { Course } from './hootup-data'

export type CategoryCourse = Course & {
  subcategory: string
  earlybird?: boolean
  event?: boolean
}

/** Figma 운동・마음챙김 세부 카테고리 (node 154:15112) */
export const fitnessMindfulnessSubcategories = [
  '전체',
  '홈트 & 근력',
  '요가 & 필라테스',
  '러닝 & 유산소',
  '명상 & 마음챙김',
] as const

export type FitnessMindfulnessSubcategory = (typeof fitnessMindfulnessSubcategories)[number]

/** 운동 & 마음챙김 1페이지 (Figma 11강 · node 154:15107) */
export const fitnessMindfulnessCoursesPage1: CategoryCourse[] = [
  {
    id: 'fm-hometrain',
    title: '14일 홈트 챌린지: 코어부터 차근차근 다지기',
    author: '트레이너 강・28강・5시간',
    discount: 35,
    origin: 88000,
    final: 57200,
    rating: 4.8,
    reviews: 6240,
    thumb: '/figma/img/fm-hometrain.png',
    avatar: '/figma/img/fm-av-1.png',
    subcategory: '홈트 & 근력',
    earlybird: true,
    event: true,
  },
  {
    id: 'fm-yoga',
    title: '뻣뻣한 몸이 풀리는 14일 모닝 요가 루틴',
    author: '요가하는 미오・30강・5시간 30분',
    discount: 35,
    origin: 88000,
    final: 57200,
    rating: 4.9,
    reviews: 3820,
    thumb: '/figma/img/fm-yoga.png',
    avatar: '/figma/img/fm-av-2.png',
    subcategory: '요가 & 필라테스',
    earlybird: true,
    event: true,
  },
  {
    id: 'fm-running',
    title: '러닝메이트 한과 함께하는 0km부터 시작하는 러닝 입문',
    author: '러닝메이트 한・24강・4시간',
    discount: 25,
    origin: 77000,
    final: 57750,
    rating: 4.7,
    reviews: 2180,
    thumb: '/figma/img/fm-running.png',
    avatar: '/figma/img/fm-av-3.png',
    subcategory: '러닝 & 유산소',
    earlybird: true,
  },
  {
    id: 'fm-sleep',
    title: '자기 전 5분, 잠이 깊어지는 수면 명상',
    author: '마인드풀 정・28강・4시간 30분',
    discount: 30,
    origin: 77000,
    final: 53900,
    rating: 4.8,
    reviews: 3460,
    thumb: '/figma/img/fm-sleep.png',
    avatar: '/figma/img/fm-av-4.png',
    subcategory: '명상 & 마음챙김',
    earlybird: true,
  },
  {
    id: 'fm-cardio',
    title: '국가대표 코치와 함께하는 집에서 땀 빼는 홈 유산소 루틴',
    author: '바디코치 도훈・32강・6시간',
    discount: 30,
    origin: 88000,
    final: 61600,
    rating: 4.6,
    reviews: 1760,
    thumb: '/figma/img/fm-cardio.png',
    avatar: '/figma/img/fm-av-5.png',
    subcategory: '러닝 & 유산소',
    earlybird: true,
  },
  {
    id: 'fm-strength',
    title: '맨몸으로 시작하는 전신 근력 루틴 숙련자 클래스',
    author: '바디코치 도훈・36강・6시간 30분',
    discount: 30,
    origin: 99000,
    final: 69300,
    rating: 4.7,
    reviews: 2460,
    thumb: '/figma/img/fm-strength.png',
    avatar: '/figma/img/fm-av-6.png',
    subcategory: '홈트 & 근력',
    earlybird: true,
  },
  {
    id: 'fm-stress',
    title: '호흡으로 다스리는 스트레스 관리 명상 클래스',
    author: '마인드풀 정・26강・4시간',
    discount: 25,
    origin: 77000,
    final: 57750,
    rating: 4.7,
    reviews: 2350,
    thumb: '/figma/img/fm-stress.png',
    avatar: '/figma/img/fm-av-7.png',
    subcategory: '명상 & 마음챙김',
    earlybird: true,
  },
  {
    id: 'fm-stretch',
    title: '직장인을 위한 하루 10분 자세 교정 스트레칭',
    author: '요가하는 미오・26강・4시간 30분',
    discount: 20,
    origin: 77000,
    final: 61600,
    rating: 4.8,
    reviews: 3010,
    thumb: '/figma/img/fm-stretch.png',
    avatar: '/figma/img/fm-av-8.png',
    subcategory: '요가 & 필라테스',
    earlybird: true,
  },
  {
    id: 'fm-pilates',
    title: '코어가 단단해지는 매트 필라테스 입문자 코스',
    author: '필라테스 윤서・40강・7시간 30분',
    discount: 30,
    origin: 99000,
    final: 69300,
    rating: 4.7,
    reviews: 1940,
    thumb: '/figma/img/fm-pilates.png',
    avatar: '/figma/img/fm-av-9.png',
    subcategory: '요가 & 필라테스',
    earlybird: true,
  },
  {
    id: 'fm-diet',
    title: '집에서 만드는 건강한 다이어트 식습관 코칭 클래스',
    author: '트레이너 강・32강・6시간',
    discount: 25,
    origin: 88000,
    final: 66000,
    rating: 4.7,
    reviews: 3180,
    thumb: '/figma/img/fm-diet.png',
    avatar: '/figma/img/fm-av-10.png',
    subcategory: '홈트 & 근력',
    earlybird: true,
  },
  {
    id: 'fm-walk',
    title: '걷기부터 시작하는 체력 기르기 시니어 코스',
    author: '러닝메이트 한・22강・4시간',
    discount: 20,
    origin: 66000,
    final: 52800,
    rating: 4.6,
    reviews: 1320,
    thumb: '/figma/img/fm-walk.png',
    avatar: '/figma/img/fm-av-11.png',
    subcategory: '러닝 & 유산소',
    earlybird: true,
  },
]

export const FITNESS_MINDFULNESS_TOTAL_PAGES = 1

export const fitnessMindfulnessSubcategoryRoutes: Partial<
  Record<FitnessMindfulnessSubcategory, string>
> = {
  전체: '/category/fitness-mindfulness',
  '홈트 & 근력': '/category/fitness-mindfulness/home-training',
  '요가 & 필라테스': '/category/fitness-mindfulness/yoga-pilates',
  '러닝 & 유산소': '/category/fitness-mindfulness/running',
  '명상 & 마음챙김': '/category/fitness-mindfulness/meditation',
}

export function getFitnessMindfulnessCoursesByPage(page: number): CategoryCourse[] {
  void page
  return fitnessMindfulnessCoursesPage1
}

export function getAllFitnessMindfulnessCourses(): CategoryCourse[] {
  return [...fitnessMindfulnessCoursesPage1]
}

export function getFitnessMindfulnessCoursesBySubcategory(
  sub: FitnessMindfulnessSubcategory,
): CategoryCourse[] {
  if (sub === '전체') return getAllFitnessMindfulnessCourses()
  return getAllFitnessMindfulnessCourses().filter((c) => c.subcategory === sub)
}
