import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryCareerMoneyListing } from '@/components/hootup/category-career-money-listing'

export const metadata: Metadata = {
  title: '재테크 & 머니 · 커리어・머니 · 훗업 HOOT UP',
  description:
    '주식·ETF, 부동산, 연금, 자산관리까지. 재테크 & 머니 단건 클래스를 만나보세요.',
}

export default function FinanceCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryCareerMoneyListing lockedSub="재테크 & 머니" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
