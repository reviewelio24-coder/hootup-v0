import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryFitnessMindfulnessListing } from '@/components/hootup/category-fitness-mindfulness-listing'

export const metadata: Metadata = {
  title: '명상 & 마음챙김 · 운동・마음챙김 · 훗업 HOOT UP',
  description:
    '수면 명상, 스트레스 관리 명상까지. 명상 & 마음챙김 단건 클래스를 만나보세요.',
}

export default function FitnessMeditationCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryFitnessMindfulnessListing lockedSub="명상 & 마음챙김" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
