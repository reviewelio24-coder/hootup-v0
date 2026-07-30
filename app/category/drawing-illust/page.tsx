import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDrawingIllustListing } from '@/components/hootup/category-drawing-illust-listing'

export const metadata: Metadata = {
  title: '드로잉・일러스트 · 훗업 HOOT UP',
  description:
    '디지털 드로잉, 손그림·회화, 캐릭터·웹툰, 캘리그라피까지. 드로잉・일러스트 클래스를 만나보세요.',
}

export default function DrawingIllustCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDrawingIllustListing />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
