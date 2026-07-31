import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryCookingBakingListing } from '@/components/hootup/category-cooking-baking-listing'

export const metadata: Metadata = {
  title: '홈카페 & 음료 · 요리・베이킹 · 훗업 HOOT UP',
  description:
    '홈카페 음료, 커피의 기본, 무알코올 칵테일까지. 홈카페 & 음료 단건 클래스를 만나보세요.',
}

export default function CookingHomeCafeCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryCookingBakingListing lockedSub="홈카페 & 음료" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
