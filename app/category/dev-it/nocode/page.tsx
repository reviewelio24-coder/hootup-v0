import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDevItListing } from '@/components/hootup/category-dev-it-listing'

export const metadata: Metadata = {
  title: '노코드 & 자동화 · 개발・IT · 훗업 HOOT UP',
  description:
    '노코드 웹사이트 런칭, 업무 자동화, 앱 빌더까지. 노코드 & 자동화 단건 클래스를 만나보세요.',
}

export default function NocodeCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDevItListing lockedSub="노코드 & 자동화" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
