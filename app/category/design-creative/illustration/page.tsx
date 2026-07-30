import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDesignCreativeListing } from '@/components/hootup/category-design-creative-listing'

export const metadata: Metadata = {
  title: '일러스트 & 디지털아트 · 디자인・크리에이티브 · 훗업 HOOT UP',
  description:
    '컨셉아트, 캐릭터, 채색, 배경 일러스트, 이모티콘까지. 일러스트 & 디지털아트 단건 클래스를 만나보세요.',
}

export default function DesignCreativeIllustrationCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDesignCreativeListing lockedSub="일러스트 & 디지털아트" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
