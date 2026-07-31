import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryCookingBakingListing } from '@/components/hootup/category-cooking-baking-listing'

export const metadata: Metadata = {
  title: '베이킹 & 디저트 · 요리・베이킹 · 훗업 HOOT UP',
  description:
    '홈베이킹, 노오븐 디저트, 구움과자·쿠키까지. 베이킹 & 디저트 단건 클래스를 만나보세요.',
}

export default function CookingBakingDessertCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryCookingBakingListing lockedSub="베이킹 & 디저트" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
