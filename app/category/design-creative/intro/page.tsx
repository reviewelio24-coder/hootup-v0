import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDesignCreativeListing } from '@/components/hootup/category-design-creative-listing'

export const metadata: Metadata = {
  title: '크리에이티브 입문 · 디자인・크리에이티브 · 훗업 HOOT UP',
  description:
    '디자인 기초, 포트폴리오, 컬러·레이아웃까지. 크리에이티브 입문 단건 클래스를 만나보세요.',
}

export default function DesignCreativeIntroCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDesignCreativeListing lockedSub="크리에이티브 입문" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
