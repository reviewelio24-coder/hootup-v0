import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryCraftHandmadeListing } from '@/components/hootup/category-craft-handmade-listing'

export const metadata: Metadata = {
  title: '도예 & 점토 · 공예・핸드메이드 · 훗업 HOOT UP',
  description:
    '핸드빌딩 도예, 물레 도자기, 점토 소품까지. 도예 & 점토 단건 클래스를 만나보세요.',
}

export default function CraftPotteryClayCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryCraftHandmadeListing lockedSub="도예 & 점토" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
