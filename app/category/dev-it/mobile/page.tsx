import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDevItListing } from '@/components/hootup/category-dev-it-listing'

export const metadata: Metadata = {
  title: '모바일 & 앱 개발 · 개발・IT · 훗업 HOOT UP',
  description:
    'Flutter, React Native, SwiftUI까지. 모바일 & 앱 개발 단건 클래스를 만나보세요.',
}

export default function MobileCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDevItListing lockedSub="모바일 & 앱 개발" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
