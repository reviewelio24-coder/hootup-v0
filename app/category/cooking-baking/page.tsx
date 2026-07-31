import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryCookingBakingListing } from '@/components/hootup/category-cooking-baking-listing'

export const metadata: Metadata = {
  title: '요리・베이킹 · 훗업 HOOT UP',
  description:
    '집밥·한 끼, 베이킹·디저트, 홈카페·음료, 세계요리·비건까지. 요리・베이킹 클래스를 만나보세요.',
}

export default function CookingBakingCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryCookingBakingListing />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
