import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDesignCreativeListing } from '@/components/hootup/category-design-creative-listing'

export const metadata: Metadata = {
  title: '브랜딩 & 로고 · 디자인・크리에이티브 · 훗업 HOOT UP',
  description:
    '로고 디자인, 브랜드 아이덴티티, 패키지·굿즈, 네이밍까지. 브랜딩 & 로고 단건 클래스를 만나보세요.',
}

export default function DesignCreativeBrandingCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDesignCreativeListing lockedSub="브랜딩 & 로고" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
