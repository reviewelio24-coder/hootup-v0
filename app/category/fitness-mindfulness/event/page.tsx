import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryFitnessMindfulnessListing } from '@/components/hootup/category-fitness-mindfulness-listing'

export const metadata: Metadata = {
  title: '이벤트 할인 · 운동・마음챙김 · 훗업 HOOT UP',
  description: '운동・마음챙김 이벤트 할인 클래스를 만나보세요.',
}

export default function CategoryFitnessMindfulnessEventRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryFitnessMindfulnessListing lockedDeal="event" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
