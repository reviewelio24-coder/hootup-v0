import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryFitnessMindfulnessListing } from '@/components/hootup/category-fitness-mindfulness-listing'

export const metadata: Metadata = {
  title: '러닝 & 유산소 · 운동・마음챙김 · 훗업 HOOT UP',
  description:
    '러닝 입문, 홈 유산소, 걷기 체력 기르기까지. 러닝 & 유산소 단건 클래스를 만나보세요.',
}

export default function FitnessRunningCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryFitnessMindfulnessListing lockedSub="러닝 & 유산소" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
