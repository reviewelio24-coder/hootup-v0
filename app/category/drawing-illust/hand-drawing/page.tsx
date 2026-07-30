import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDrawingIllustListing } from '@/components/hootup/category-drawing-illust-listing'

export const metadata: Metadata = {
  title: '손그림 & 회화 · 드로잉・일러스트 · 훗업 HOOT UP',
  description:
    '수채화, 색연필, 펜드로잉·어반스케치까지. 손그림 & 회화 단건 클래스를 만나보세요.',
}

export default function DrawingIllustHandDrawingCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDrawingIllustListing lockedSub="손그림 & 회화" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
