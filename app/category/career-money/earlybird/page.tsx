import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryCareerMoneyListing } from '@/components/hootup/category-career-money-listing'

export const metadata: Metadata = {
  title: '얼리버드 할인 · 커리어・머니 · 훗업 HOOT UP',
  description:
    '커리어・머니 얼리버드 할인 클래스. 직무역량, 취업·이직, 마케팅, 사이드프로젝트, 재테크 한정 할인을 만나보세요.',
}

export default function CareerMoneyEarlybirdRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryCareerMoneyListing lockedDeal="earlybird" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
