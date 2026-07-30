import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryCareerMoneyListing } from '@/components/hootup/category-career-money-listing'

export const metadata: Metadata = {
  title: '직무역량 & 일잘러 · 커리어・머니 · 훗업 HOOT UP',
  description:
    '서비스 기획·PM, 업무 생산성, 보고서 작성, 노션까지. 직무역량 & 일잘러 단건 클래스를 만나보세요.',
}

export default function JobSkillsCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryCareerMoneyListing lockedSub="직무역량 & 일잘러" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
