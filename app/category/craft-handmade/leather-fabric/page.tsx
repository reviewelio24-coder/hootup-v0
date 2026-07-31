import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryCraftHandmadeListing } from '@/components/hootup/category-craft-handmade-listing'

export const metadata: Metadata = {
  title: '가죽 & 패브릭 공예 · 공예・핸드메이드 · 훗업 HOOT UP',
  description:
    '가죽 카드지갑, 손뜨개 니트, 일상 자수까지. 가죽 & 패브릭 공예 단건 클래스를 만나보세요.',
}

export default function CraftLeatherFabricCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryCraftHandmadeListing lockedSub="가죽 & 패브릭 공예" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
