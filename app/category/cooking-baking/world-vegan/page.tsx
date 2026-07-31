import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryCookingBakingListing } from '@/components/hootup/category-cooking-baking-listing'

export const metadata: Metadata = {
  title: '세계요리 & 비건 · 요리・베이킹 · 훗업 HOOT UP',
  description:
    '세계 가정식, 비건 한 끼까지. 세계요리 & 비건 단건 클래스를 만나보세요.',
}

export default function CookingWorldVeganCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryCookingBakingListing lockedSub="세계요리 & 비건" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
