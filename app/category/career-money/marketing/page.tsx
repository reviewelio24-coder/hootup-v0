import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryCareerMoneyListing } from '@/components/hootup/category-career-money-listing'

export const metadata: Metadata = {
  title: '마케팅 & 브랜딩 · 커리어・머니 · 훗업 HOOT UP',
  description:
    '인스타 마케팅, 퍼포먼스, 유튜브, 카피라이팅, SEO까지. 마케팅 & 브랜딩 단건 클래스를 만나보세요.',
}

export default function MarketingCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryCareerMoneyListing lockedSub="마케팅 & 브랜딩" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
