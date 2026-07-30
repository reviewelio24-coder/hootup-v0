import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDesignCreativeListing } from '@/components/hootup/category-design-creative-listing'

export const metadata: Metadata = {
  title: '그래픽 디자인 · 디자인・크리에이티브 · 훗업 HOOT UP',
  description:
    '포토샵, 일러스트레이터, SNS 콘텐츠, 편집 디자인까지. 그래픽 디자인 단건 클래스를 만나보세요.',
}

export default function DesignCreativeGraphicCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDesignCreativeListing lockedSub="그래픽 디자인" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
