import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryFitnessMindfulnessListing } from '@/components/hootup/category-fitness-mindfulness-listing'

export const metadata: Metadata = {
  title: '운동・마음챙김 · 훗업 HOOT UP',
  description:
    '홈트·근력, 요가·필라테스, 러닝·유산소, 명상까지. 운동・마음챙김 클래스를 만나보세요.',
}

export default function FitnessMindfulnessCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryFitnessMindfulnessListing />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
