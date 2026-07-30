import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDevItListing } from '@/components/hootup/category-dev-it-listing'

export const metadata: Metadata = {
  title: '프론트엔드 · 개발・IT · 훗업 HOOT UP',
  description:
    '자바스크립트, React, Vue, TypeScript, Next.js까지. 프론트엔드 단건 클래스를 만나보세요.',
}

export default function FrontendCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDevItListing lockedSub="프론트엔드" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
