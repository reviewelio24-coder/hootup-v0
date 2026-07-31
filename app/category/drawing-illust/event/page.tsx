import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDrawingIllustListing } from '@/components/hootup/category-drawing-illust-listing'

export const metadata: Metadata = {
  title: '이벤트 할인 · 드로잉・일러스트 · 훗업 HOOT UP',
  description: '드로잉・일러스트 이벤트 할인 클래스를 만나보세요.',
}

export default function CategoryDrawingIllustEventRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDrawingIllustListing lockedDeal="event" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
