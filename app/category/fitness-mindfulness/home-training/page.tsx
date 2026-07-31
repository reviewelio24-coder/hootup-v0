import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryFitnessMindfulnessListing } from '@/components/hootup/category-fitness-mindfulness-listing'

export const metadata: Metadata = {
  title: '홈트 & 근력 · 운동・마음챙김 · 훗업 HOOT UP',
  description:
    '14일 홈트 챌린지, 전신 근력, 다이어트 습관까지. 홈트 & 근력 단건 클래스를 만나보세요.',
}

export default function FitnessHomeTrainingCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryFitnessMindfulnessListing lockedSub="홈트 & 근력" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
