export type CategoryModel = 'single' | 'subscription' | 'subscription+single'

export type GnbCategory = {
  slug: string
  name: string
  model: CategoryModel
  subcategories: string[]
}

export const categoryModelLabel: Record<CategoryModel, string> = {
  single: '단건',
  subscription: '구독',
  'subscription+single': '구독+단건',
}

export const gnbCategories: GnbCategory[] = [
  {
    slug: 'dev-it',
    name: '개발 & IT',
    model: 'single',
    subcategories: [
      '웹 퍼블리싱',
      '프론트엔드',
      '백엔드 & 서버',
      '모바일 & 앱 개발',
      '데이터 & AI',
      'AI 개발 도구',
      '노코드 & 자동화',
    ],
  },
  {
    slug: 'career-money',
    name: '커리어 & 머니',
    model: 'single',
    subcategories: [
      '직무 역량 & 일잘러',
      '취업 & 이직',
      '마케팅 & 브랜딩',
      '사이드프로젝트 & N잡',
      '재테크 & 투자',
      '절세 & 머니 관리',
    ],
  },
  {
    slug: 'design-creative',
    name: '디자인 & 크리에이티브',
    model: 'subscription+single',
    subcategories: [
      'UX/UI 디자인',
      '그래픽 디자인',
      '브랜딩 & 로고',
      '3D & 모션 디자인',
      '일러스트 & 디지털아트',
      '크리에이티브 입문',
    ],
  },
  {
    slug: 'photo-video',
    name: '사진 & 영상',
    model: 'subscription',
    subcategories: ['사진 촬영', '영상 촬영', '편집 & 후보정', '모션 & 크리에이티브'],
  },
  {
    slug: 'drawing-illust',
    name: '드로잉 & 일러스트',
    model: 'subscription',
    subcategories: ['디지털 드로잉', '손그림 & 회화', '캐릭터 & 웹툰', '캘리그라피 & 레터링'],
  },
  {
    slug: 'fitness-mindfulness',
    name: '운동 & 마음챙김',
    model: 'subscription',
    subcategories: ['홈트 & 근력', '요가 & 필라테스', '러닝 & 유산소', '명상 & 마음챙김'],
  },
  {
    slug: 'craft-handmade',
    name: '공예 & 핸드메이드',
    model: 'subscription',
    subcategories: ['가죽 & 패브릭 공예', '도예 & 점토', '캔들 & 플라워', '주얼리 & 데코 소품'],
  },
  {
    slug: 'cooking-baking',
    name: '요리 & 베이킹',
    model: 'subscription',
    subcategories: ['집밥 & 한 끼 요리', '베이킹 & 디저트', '홈카페 & 음료', '세계요리 & 비건'],
  },
]
