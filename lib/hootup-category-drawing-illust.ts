import type { Course } from './hootup-data'

export type CategoryCourse = Course & {
  subcategory: string
  earlybird?: boolean
  event?: boolean
}

/** Figma 드로잉・일러스트 세부 카테고리 (node 154:15067) */
export const drawingIllustSubcategories = [
  '전체',
  '디지털 드로잉',
  '손그림 & 회화',
  '캐릭터 & 웹툰',
  '캘리그라피 & 레터링',
] as const

export type DrawingIllustSubcategory = (typeof drawingIllustSubcategories)[number]

/** 드로잉 & 일러스트 1페이지 (Figma 11강 · node 154:15062) */
export const drawingIllustCoursesPage1: CategoryCourse[] = [
  {
    id: 'di-ipad',
    title: '아이패드로 시작하는 감성 캐릭터 드로잉',
    author: '무지(MOOZI)・28강・6시간',
    discount: 35,
    origin: 99000,
    final: 64350,
    rating: 4.9,
    reviews: 4180,
    thumb: '/figma/img/di-ipad.png',
    avatar: '/figma/img/di-av-1.png',
    subcategory: '디지털 드로잉',
    earlybird: true,
  },
  {
    id: 'di-watercolor',
    title: '투명 수채화 입문, 빛을 담는 풍경 그리기 편',
    author: '수채연구소 윤・38강・7시간 30분',
    discount: 30,
    origin: 99000,
    final: 69300,
    rating: 4.8,
    reviews: 1860,
    thumb: '/figma/img/di-watercolor.png',
    avatar: '/figma/img/di-av-2.png',
    subcategory: '손그림 & 회화',
    earlybird: true,
  },
  {
    id: 'di-webtoon',
    title: '클립스튜디오 웹툰 작화 클래스 고급반',
    author: '작가 도담・52강・11시간',
    discount: 35,
    origin: 121000,
    final: 78650,
    rating: 4.7,
    reviews: 2060,
    thumb: '/figma/img/di-webtoon.png',
    avatar: '/figma/img/di-av-3.png',
    subcategory: '캐릭터 & 웹툰',
    earlybird: true,
  },
  {
    id: 'di-calligraphy',
    title: '하루 10분, 손그림 캘리그라피 도전하기',
    author: '글씨공방 단아・32강・6시간',
    discount: 30,
    origin: 88000,
    final: 61600,
    rating: 4.8,
    reviews: 1640,
    thumb: '/figma/img/di-calligraphy.png',
    avatar: '/figma/img/di-av-4.png',
    subcategory: '캘리그라피 & 레터링',
    earlybird: true,
  },
  {
    id: 'di-emoji',
    title: '나만의 캐릭터 디자인부터 이모티콘 출시까지',
    author: '무지(MOOZI)・44강・9시간',
    discount: 40,
    origin: 110000,
    final: 66000,
    rating: 4.9,
    reviews: 3520,
    thumb: '/figma/img/di-emoji.png',
    avatar: '/figma/img/di-av-5.png',
    subcategory: '캐릭터 & 웹툰',
    earlybird: true,
    event: true,
  },
  {
    id: 'di-procreate',
    title: '프로크리에이트 기초부터 채색까지 한 번에',
    author: '무지(MOOZI)・40강・8시간 30분',
    discount: 30,
    origin: 88000,
    final: 61600,
    rating: 4.8,
    reviews: 3240,
    thumb: '/figma/img/di-procreate.png',
    avatar: '/figma/img/di-av-6.png',
    subcategory: '디지털 드로잉',
    earlybird: true,
  },
  {
    id: 'di-lettering',
    title: '굿즈로 만드는 디지털 레터링 고급 클래스',
    author: '글씨공방 단아・28강・5시간 30분',
    discount: 25,
    origin: 77000,
    final: 57750,
    rating: 4.6,
    reviews: 1600,
    thumb: '/figma/img/di-lettering.png',
    avatar: '/figma/img/di-av-7.png',
    subcategory: '캘리그라피 & 레터링',
    earlybird: true,
  },
  {
    id: 'di-pen',
    title: '하루 한 장 펜드로잉 & 어반스케치 클래스',
    author: '끄적이는 밤 무지・34강・6시간 30분',
    discount: 20,
    origin: 77000,
    final: 61600,
    rating: 4.6,
    reviews: 1280,
    thumb: '/figma/img/di-pen.png',
    avatar: '/figma/img/di-av-8.png',
    subcategory: '손그림 & 회화',
    earlybird: true,
  },
  {
    id: 'di-pencil',
    title: '색연필로 그리는 일상의 작은 것들 : 소품 편',
    author: '색칠하는 다오・30강・6시간',
    discount: 25,
    origin: 88000,
    final: 66000,
    rating: 4.7,
    reviews: 1540,
    thumb: '/figma/img/di-pencil.png',
    avatar: '/figma/img/di-av-9.png',
    subcategory: '손그림 & 회화',
    earlybird: true,
  },
  {
    id: 'di-conti',
    title: '웹툰 작가 도담이 알려주는 웹툰 콘티와 연출의 기본기',
    author: '작가 도담・36강・7시간 30분',
    discount: 20,
    origin: 99000,
    final: 79200,
    rating: 4.6,
    reviews: 1180,
    thumb: '/figma/img/di-conti.png',
    avatar: '/figma/img/di-av-10.png',
    subcategory: '캐릭터 & 웹툰',
    earlybird: true,
  },
  {
    id: 'di-clip',
    title: '클립스튜디오로 그리는 디지털 일러스트',
    author: '그림창고 보리・46강・9시간 30분',
    discount: 25,
    origin: 110000,
    final: 82500,
    rating: 4.7,
    reviews: 2010,
    thumb: '/figma/img/di-clip.png',
    avatar: '/figma/img/di-av-11.png',
    subcategory: '디지털 드로잉',
    earlybird: true,
  },
]

export const DRAWING_ILLUST_TOTAL_PAGES = 1

export const drawingIllustSubcategoryRoutes: Partial<Record<DrawingIllustSubcategory, string>> = {
  전체: '/category/drawing-illust',
  '디지털 드로잉': '/category/drawing-illust/digital',
  '손그림 & 회화': '/category/drawing-illust/hand-drawing',
}

export function getDrawingIllustCoursesByPage(page: number): CategoryCourse[] {
  void page
  return drawingIllustCoursesPage1
}

export function getAllDrawingIllustCourses(): CategoryCourse[] {
  return [...drawingIllustCoursesPage1]
}

export function getDrawingIllustCoursesBySubcategory(
  sub: DrawingIllustSubcategory,
): CategoryCourse[] {
  if (sub === '전체') return getAllDrawingIllustCourses()
  return getAllDrawingIllustCourses().filter((c) => c.subcategory === sub)
}
