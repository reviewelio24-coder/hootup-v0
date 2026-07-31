import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDevItListing } from '@/components/hootup/category-dev-it-listing'

export const metadata: Metadata = {
  title: '이벤트 할인 · 개발・IT · 훗업 HOOT UP',
  description: '개발・IT 이벤트 할인 클래스를 만나보세요.',
}

export default function CategoryDevItEventRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDevItListing lockedDeal="event" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
