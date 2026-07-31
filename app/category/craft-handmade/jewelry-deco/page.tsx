import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryCraftHandmadeListing } from '@/components/hootup/category-craft-handmade-listing'

export const metadata: Metadata = {
  title: '주얼리 & 데코 소품 · 공예・핸드메이드 · 훗업 HOOT UP',
  description:
    '레진 공예, 비즈 액세서리까지. 주얼리 & 데코 소품 단건 클래스를 만나보세요.',
}

export default function CraftJewelryDecoCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryCraftHandmadeListing lockedSub="주얼리 & 데코 소품" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
