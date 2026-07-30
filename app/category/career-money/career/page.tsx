import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryCareerMoneyListing } from '@/components/hootup/category-career-money-listing'

export const metadata: Metadata = {
  title: '취업 & 이직 · 커리어・머니 · 훗업 HOOT UP',
  description:
    '이력서, 면접, 커리어 설계, IT 취업까지. 취업 & 이직 단건 클래스를 만나보세요.',
}

export default function CareerJobsCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryCareerMoneyListing lockedSub="취업 & 이직" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
