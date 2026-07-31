import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryCookingBakingListing } from '@/components/hootup/category-cooking-baking-listing'

export const metadata: Metadata = {
  title: '집밥 & 한 끼 요리 · 요리・베이킹 · 훗업 HOOT UP',
  description:
    '한 끼 홈쿡, 밑반찬, 한식 요리까지. 집밥 & 한 끼 요리 단건 클래스를 만나보세요.',
}

export default function CookingHomeCookingCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryCookingBakingListing lockedSub="집밥 & 한 끼 요리" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
