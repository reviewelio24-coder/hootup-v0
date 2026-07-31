import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryCraftHandmadeListing } from '@/components/hootup/category-craft-handmade-listing'

export const metadata: Metadata = {
  title: '공예・핸드메이드 · 훗업 HOOT UP',
  description:
    '가죽·패브릭, 도예·점토, 캔들·플라워, 주얼리까지. 공예・핸드메이드 클래스를 만나보세요.',
}

export default function CraftHandmadeCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryCraftHandmadeListing />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
