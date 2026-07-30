import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDesignCreativeListing } from '@/components/hootup/category-design-creative-listing'

export const metadata: Metadata = {
  title: 'UX/UI 디자인 · 디자인・크리에이티브 · 훗업 HOOT UP',
  description:
    '피그마, 디자인 시스템, 모바일 UI, 포트폴리오까지. UX/UI 디자인 단건 클래스를 만나보세요.',
}

export default function DesignCreativeUxUiCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDesignCreativeListing lockedSub="UX/UI 디자인" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
