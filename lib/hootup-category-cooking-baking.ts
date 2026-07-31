import type { Course } from './hootup-data'

export type CategoryCourse = Course & {
  subcategory: string
  earlybird?: boolean
  event?: boolean
}

/** Figma 요리・베이킹 세부 카테고리 (node 154:15202) */
export const cookingBakingSubcategories = [
  '전체',
  '집밥 & 한 끼 요리',
  '베이킹 & 디저트',
  '홈카페 & 음료',
  '세계요리 & 비건',
] as const

export type CookingBakingSubcategory = (typeof cookingBakingSubcategories)[number]

/** 요리 & 베이킹 1페이지 (Figma 11강 · node 154:15197) */
export const cookingBakingCoursesPage1: CategoryCourse[] = [
  {
    id: 'cb-coffee',
    title: '핸드드립부터 라떼아트까지, 커피의 기본',
    author: '바리스타 라온・40강・8시간',
    discount: 30,
    origin: 99000,
    final: 69300,
    rating: 4.7,
    reviews: 2210,
    thumb: '/figma/img/cb-coffee.png',
    avatar: '/figma/img/cb-av-1.png',
    subcategory: '홈카페 & 음료',
    earlybird: true,
  },
  {
    id: 'cb-banchan',
    title: '일주일이 편해지는 전라도 엄마표 밑반찬 마스터',
    author: '반찬연구소 모아・34강・6시간 30분',
    discount: 30,
    origin: 77000,
    final: 53900,
    rating: 4.7,
    reviews: 2680,
    thumb: '/figma/img/cb-banchan.png',
    avatar: '/figma/img/cb-av-2.png',
    subcategory: '집밥 & 한 끼 요리',
    earlybird: true,
  },
  {
    id: 'cb-vegan',
    title: '지중해식으로 건강하게 즐기는 비건 한 끼',
    author: '채식테이블 보리・34강・7시간',
    discount: 25,
    origin: 88000,
    final: 66000,
    rating: 4.6,
    reviews: 1670,
    thumb: '/figma/img/cb-vegan.png',
    avatar: '/figma/img/cb-av-3.png',
    subcategory: '세계요리 & 비건',
    earlybird: true,
  },
  {
    id: 'cb-nooven',
    title: '자취방에서 오븐 없이 만드는 노오븐 디저트',
    author: '달콤공방 리나・30강・6시간',
    discount: 30,
    origin: 88000,
    final: 61600,
    rating: 4.7,
    reviews: 2460,
    thumb: '/figma/img/cb-nooven.png',
    avatar: '/figma/img/cb-av-4.png',
    subcategory: '베이킹 & 디저트',
    earlybird: true,
  },
  {
    id: 'cb-homecook',
    title: '자취생을 위한 실패 없는 한 끼 홈쿡 30',
    author: '키친노트 단・40강・8시간',
    discount: 35,
    origin: 88000,
    final: 57200,
    rating: 4.9,
    reviews: 5410,
    thumb: '/figma/img/cb-homecook.png',
    avatar: '/figma/img/cb-av-5.png',
    subcategory: '집밥 & 한 끼 요리',
    earlybird: true,
    event: true,
  },
  {
    id: 'cb-baking',
    title: '아이들과 함께하는 실패 없는 홈베이킹 기초반',
    author: '베이커리 오븐・38강・7시간 30분',
    discount: 35,
    origin: 99000,
    final: 64350,
    rating: 4.8,
    reviews: 3320,
    thumb: '/figma/img/cb-baking.png',
    avatar: '/figma/img/cb-av-6.png',
    subcategory: '베이킹 & 디저트',
    earlybird: true,
    event: true,
  },
  {
    id: 'cb-homecafe',
    title: '집에서 즐기는 이탈리아 홈카페 음료 클래스',
    author: '바리스타 라온・36강・7시간',
    discount: 35,
    origin: 88000,
    final: 57200,
    rating: 4.8,
    reviews: 2980,
    thumb: '/figma/img/cb-homecafe.png',
    avatar: '/figma/img/cb-av-7.png',
    subcategory: '홈카페 & 음료',
    earlybird: true,
    event: true,
  },
  {
    id: 'cb-world',
    title: '집에서 만드는 세계 가정식 미식 여행',
    author: '글로벌키친 유나・42강・8시간 30분',
    discount: 30,
    origin: 99000,
    final: 69300,
    rating: 4.7,
    reviews: 1940,
    thumb: '/figma/img/cb-world.png',
    avatar: '/figma/img/cb-av-8.png',
    subcategory: '세계요리 & 비건',
    earlybird: true,
  },
  {
    id: 'cb-cookie',
    title: '사랑하는 연인에게 선물하고 싶은 구움과자 & 쿠키',
    author: '베이커리 오븐・32강・6시간 30분',
    discount: 20,
    origin: 88000,
    final: 70400,
    rating: 4.6,
    reviews: 1780,
    thumb: '/figma/img/cb-cookie.png',
    avatar: '/figma/img/cb-av-9.png',
    subcategory: '베이킹 & 디저트',
    earlybird: true,
  },
  {
    id: 'cb-korean',
    title: '종가집 며느리에게 배우는 기본부터 잡는 한식 요리 클래스',
    author: '손맛장인 정・44강・9시간',
    discount: 25,
    origin: 99000,
    final: 74250,
    rating: 4.7,
    reviews: 2140,
    thumb: '/figma/img/cb-korean.png',
    avatar: '/figma/img/cb-av-10.png',
    subcategory: '집밥 & 한 끼 요리',
    earlybird: true,
  },
  {
    id: 'cb-cocktail',
    title: '집에서 즐기는 이비자 무알코올 칵테일 & 시즌 음료',
    author: '믹솔로지 도하・28강・5시간 30분',
    discount: 25,
    origin: 77000,
    final: 57750,
    rating: 4.6,
    reviews: 1340,
    thumb: '/figma/img/cb-cocktail.png',
    avatar: '/figma/img/cb-av-11.png',
    subcategory: '홈카페 & 음료',
    earlybird: true,
  },
]

export const COOKING_BAKING_TOTAL_PAGES = 1

export const cookingBakingSubcategoryRoutes: Partial<Record<CookingBakingSubcategory, string>> = {
  전체: '/category/cooking-baking',
  '집밥 & 한 끼 요리': '/category/cooking-baking/home-cooking',
  '베이킹 & 디저트': '/category/cooking-baking/baking',
  '홈카페 & 음료': '/category/cooking-baking/home-cafe',
  '세계요리 & 비건': '/category/cooking-baking/world-vegan',
}

export function getCookingBakingCoursesByPage(page: number): CategoryCourse[] {
  void page
  return cookingBakingCoursesPage1
}

export function getAllCookingBakingCourses(): CategoryCourse[] {
  return [...cookingBakingCoursesPage1]
}

export function getCookingBakingCoursesBySubcategory(
  sub: CookingBakingSubcategory,
): CategoryCourse[] {
  if (sub === '전체') return getAllCookingBakingCourses()
  return getAllCookingBakingCourses().filter((c) => c.subcategory === sub)
}
