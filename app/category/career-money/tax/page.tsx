import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryCareerMoneyListing } from '@/components/hootup/category-career-money-listing'

export const metadata: Metadata = {
  title: '절세 & 머니 관리 · 커리어・머니 · 훗업 HOOT UP',
  description:
    '연말정산, 가계부·예산 관리, 프리랜서 세금 신고까지. 절세 & 머니 관리 단건 클래스를 만나보세요.',
}

export default function TaxCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryCareerMoneyListing lockedSub="절세 & 머니 관리" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
