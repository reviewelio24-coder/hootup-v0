import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDrawingIllustListing } from '@/components/hootup/category-drawing-illust-listing'

export const metadata: Metadata = {
  title: '캘리그라피 & 레터링 · 드로잉・일러스트 · 훗업 HOOT UP',
  description:
    '손그림 캘리그라피, 디지털 레터링·굿즈까지. 캘리그라피 & 레터링 단건 클래스를 만나보세요.',
}

export default function DrawingIllustCalligraphyLetteringCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDrawingIllustListing lockedSub="캘리그라피 & 레터링" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
