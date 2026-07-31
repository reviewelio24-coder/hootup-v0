import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryNewClassesListing } from '@/components/hootup/category-new-classes-listing'

export const metadata: Metadata = {
  title: '얼리버드 할인 · 새로운 클래스 · 훗업 HOOT UP',
  description: '새로운 클래스 얼리버드 할인 클래스를 만나보세요.',
}

export default function CategoryNewClassesEarlybirdRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryNewClassesListing lockedDeal="earlybird" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
