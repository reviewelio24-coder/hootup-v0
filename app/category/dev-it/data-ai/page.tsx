import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDevItListing } from '@/components/hootup/category-dev-it-listing'

export const metadata: Metadata = {
  title: '데이터 & AI · 개발・IT · 훗업 HOOT UP',
  description:
    '파이썬 데이터 분석, SQL, 생성형 AI, 머신러닝까지. 데이터 & AI 단건 클래스를 만나보세요.',
}

export default function DataAiCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDevItListing lockedSub="데이터 & AI" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
