import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDrawingIllustListing } from '@/components/hootup/category-drawing-illust-listing'

export const metadata: Metadata = {
  title: '디지털 드로잉 · 드로잉・일러스트 · 훗업 HOOT UP',
  description:
    '아이패드 캐릭터 드로잉, 프로크리에이트, 클립스튜디오까지. 디지털 드로잉 단건 클래스를 만나보세요.',
}

export default function DrawingIllustDigitalCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDrawingIllustListing lockedSub="디지털 드로잉" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
