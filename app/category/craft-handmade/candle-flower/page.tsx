import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryCraftHandmadeListing } from '@/components/hootup/category-craft-handmade-listing'

export const metadata: Metadata = {
  title: '캔들 & 플라워 · 공예・핸드메이드 · 훗업 HOOT UP',
  description:
    '소이캔들·디퓨저, 드라이플라워 리스, 생화 플라워까지. 캔들 & 플라워 단건 클래스를 만나보세요.',
}

export default function CraftCandleFlowerCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryCraftHandmadeListing lockedSub="캔들 & 플라워" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
