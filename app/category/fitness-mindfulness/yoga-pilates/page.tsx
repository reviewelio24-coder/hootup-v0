import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryFitnessMindfulnessListing } from '@/components/hootup/category-fitness-mindfulness-listing'

export const metadata: Metadata = {
  title: '요가 & 필라테스 · 운동・마음챙김 · 훗업 HOOT UP',
  description:
    '모닝 요가, 자세 교정 스트레칭, 매트 필라테스까지. 요가 & 필라테스 단건 클래스를 만나보세요.',
}

export default function FitnessYogaPilatesCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryFitnessMindfulnessListing lockedSub="요가 & 필라테스" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
