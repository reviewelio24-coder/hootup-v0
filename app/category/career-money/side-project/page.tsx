import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryCareerMoneyListing } from '@/components/hootup/category-career-money-listing'

export const metadata: Metadata = {
  title: '사이드프로젝트 & N잡 · 커리어・머니 · 훗업 HOOT UP',
  description:
    'N잡, 콘텐츠 수익화, 스마트스토어, 1인 창업, 재능마켓까지. 사이드프로젝트 & N잡 단건 클래스를 만나보세요.',
}

export default function SideProjectCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryCareerMoneyListing lockedSub="사이드프로젝트 & N잡" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
