import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryCraftHandmadeListing } from '@/components/hootup/category-craft-handmade-listing'

export const metadata: Metadata = {
  title: '이벤트 할인 · 공예・핸드메이드 · 훗업 HOOT UP',
  description: '공예・핸드메이드 이벤트 할인 클래스를 만나보세요.',
}

export default function CategoryCraftHandmadeEventRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryCraftHandmadeListing lockedDeal="event" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
