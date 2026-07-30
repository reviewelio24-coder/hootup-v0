import type { Course } from './hootup-data'

export type CategoryCourse = Course & {
  subcategory: string
  earlybird?: boolean
  event?: boolean
}

/** Figma 사진・영상 세부 카테고리 (node 154:15017) */
export const photoVideoSubcategories = [
  '전체',
  '사진 촬영',
  '영상 촬영',
  '편집 & 후보정',
  '모션 & 크리에이티브',
] as const

export type PhotoVideoSubcategory = (typeof photoVideoSubcategories)[number]

/** 사진 & 영상 1페이지 (Figma 13강 · node 154:15012) */
export const photoVideoCoursesPage1: CategoryCourse[] = [
  {
    id: 'pv-smartphone',
    title: '스마트폰 하나로 인생샷 만드는 사진 클래스',
    author: '빛그림 윤도・42강・8시간',
    discount: 35,
    origin: 99000,
    final: 64350,
    rating: 4.8,
    reviews: 4920,
    thumb: '/figma/img/pv-smartphone.png',
    avatar: '/figma/img/pv-av-1.png',
    subcategory: '사진 촬영',
    earlybird: true,
  },
  {
    id: 'pv-vlog',
    title: '브이로그 입문: 일상을 영상으로 남기기',
    author: '에디터 한새・44강・9시간',
    discount: 35,
    origin: 110000,
    final: 71500,
    rating: 4.8,
    reviews: 3380,
    thumb: '/figma/img/pv-vlog.png',
    avatar: '/figma/img/pv-av-2.png',
    subcategory: '영상 촬영',
    earlybird: true,
  },
  {
    id: 'pv-premiere',
    title: '어도비 프리미어 프로 브이로그 편집 A to Z',
    author: '에디터 한새・64강・13시간',
    discount: 40,
    origin: 143000,
    final: 85800,
    rating: 4.9,
    reviews: 3760,
    thumb: '/figma/img/pv-premiere.png',
    avatar: '/figma/img/pv-av-3.png',
    subcategory: '편집 & 후보정',
    earlybird: true,
    event: true,
  },
  {
    id: 'pv-shortform',
    title: '클릭을 부르는 숏폼(릴스·쇼츠) 제작 클래스',
    author: '숏폼러 단비・46강・9시간',
    discount: 40,
    origin: 121000,
    final: 72600,
    rating: 4.8,
    reviews: 2940,
    thumb: '/figma/img/pv-shortform.png',
    avatar: '/figma/img/pv-av-4.png',
    subcategory: '모션 & 크리에이티브',
    earlybird: true,
    event: true,
  },
  {
    id: 'pv-davinci',
    title: '다빈치 리졸브로 배우는 영상 색보정 입문',
    author: '컬러리스트 진・52강・11시간',
    discount: 35,
    origin: 132000,
    final: 85800,
    rating: 4.7,
    reviews: 1880,
    thumb: '/figma/img/pv-davinci.png',
    avatar: '/figma/img/pv-av-5.png',
    subcategory: '편집 & 후보정',
    earlybird: true,
  },
  {
    id: 'pv-camera',
    title: '카메라 입문: 조리개부터 셔터까지 한 번에',
    author: '사진가 노을・50강・10시간',
    discount: 30,
    origin: 110000,
    final: 77000,
    rating: 4.7,
    reviews: 2180,
    thumb: '/figma/img/pv-camera.png',
    avatar: '/figma/img/pv-av-6.png',
    subcategory: '사진 촬영',
    earlybird: true,
  },
  {
    id: 'pv-ae',
    title: '애프터이펙트로 시작하는 모션그래픽 입문',
    author: '모션랩 케이・58강・12시간',
    discount: 35,
    origin: 132000,
    final: 85800,
    rating: 4.6,
    reviews: 1900,
    thumb: '/figma/img/pv-ae.png',
    avatar: '/figma/img/pv-av-7.png',
    subcategory: '모션 & 크리에이티브',
    earlybird: true,
  },
  {
    id: 'pv-cinematic',
    title: '스마트폰으로 시네마틱 영상 찍기 기초 과정',
    author: '무빙메이커 도진・38강・7시간 30분',
    discount: 30,
    origin: 99000,
    final: 69300,
    rating: 4.7,
    reviews: 2260,
    thumb: '/figma/img/pv-cinematic.png',
    avatar: '/figma/img/pv-av-8.png',
    subcategory: '영상 촬영',
    earlybird: true,
  },
  {
    id: 'pv-lighting',
    title: '영상이 달라지는 조명과 구도의 기본 중급 코스',
    author: '라이트룸 별・34강・6시간 30분',
    discount: 25,
    origin: 88000,
    final: 66000,
    rating: 4.6,
    reviews: 1340,
    thumb: '/figma/img/pv-lighting.png',
    avatar: '/figma/img/pv-av-9.png',
    subcategory: '영상 촬영',
    earlybird: true,
  },
  {
    id: 'pv-snap',
    title: '일상을 담는 감성 스냅 사진 작가 되는 노하우',
    author: '빛그림 윤도・36강・7시간',
    discount: 25,
    origin: 88000,
    final: 66000,
    rating: 4.7,
    reviews: 2540,
    thumb: '/figma/img/pv-snap.png',
    avatar: '/figma/img/pv-av-10.png',
    subcategory: '사진 촬영',
    earlybird: true,
  },
  {
    id: 'pv-lightroom',
    title: '라이트룸으로 완성하는 감성 사진 보정',
    author: '보정공방 미오・40강・8시간',
    discount: 30,
    origin: 99000,
    final: 69300,
    rating: 4.7,
    reviews: 1620,
    thumb: '/figma/img/pv-lightroom.png',
    avatar: '/figma/img/pv-av-11.png',
    subcategory: '편집 & 후보정',
    earlybird: true,
  },
  {
    id: 'pv-portrait',
    title: '자연광으로 찍는 인물 사진의 기술 입문 과정',
    author: '포트레이트 하린・40강・8시간',
    discount: 20,
    origin: 99000,
    final: 79200,
    rating: 4.6,
    reviews: 1460,
    thumb: '/figma/img/pv-portrait.png',
    avatar: '/figma/img/pv-av-12.png',
    subcategory: '사진 촬영',
    earlybird: true,
  },
  {
    id: 'pv-cut',
    title: '컷 편집의 리듬: 보는 맛 나는 영상 만들기',
    author: '에디터 한새・36강・7시간',
    discount: 20,
    origin: 88000,
    final: 70400,
    rating: 4.6,
    reviews: 1290,
    thumb: '/figma/img/pv-cut.png',
    avatar: '/figma/img/pv-av-13.png',
    subcategory: '편집 & 후보정',
    earlybird: true,
  },
]

export const PHOTO_VIDEO_TOTAL_PAGES = 1

export const photoVideoSubcategoryRoutes: Partial<Record<PhotoVideoSubcategory, string>> = {
  전체: '/category/photo-video',
  '사진 촬영': '/category/photo-video/photography',
}

export function getPhotoVideoCoursesByPage(page: number): CategoryCourse[] {
  void page
  return photoVideoCoursesPage1
}

export function getAllPhotoVideoCourses(): CategoryCourse[] {
  return [...photoVideoCoursesPage1]
}

export function getPhotoVideoCoursesBySubcategory(sub: PhotoVideoSubcategory): CategoryCourse[] {
  if (sub === '전체') return getAllPhotoVideoCourses()
  return getAllPhotoVideoCourses().filter((c) => c.subcategory === sub)
}
