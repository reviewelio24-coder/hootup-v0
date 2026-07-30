import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDevItListing } from '@/components/hootup/category-dev-it-listing'

export const metadata: Metadata = {
  title: '웹 퍼블리싱 · 개발・IT · 훗업 HOOT UP',
  description: '반응형 웹, HTML/CSS, 접근성, Sass까지. 웹 퍼블리싱 단건 클래스를 만나보세요.',
}

export default function WebPublishingCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDevItListing lockedSub="웹 퍼블리싱" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
