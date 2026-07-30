import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDesignCreativeListing } from '@/components/hootup/category-design-creative-listing'

export const metadata: Metadata = {
  title: '디자인・크리에이티브 · 훗업 HOOT UP',
  description:
    'UX/UI, 그래픽, 브랜딩, 3D·모션, 일러스트까지. 디자인・크리에이티브 클래스를 만나보세요.',
}

export default function DesignCreativeCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDesignCreativeListing />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
