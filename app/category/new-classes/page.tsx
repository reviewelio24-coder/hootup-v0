import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryNewClassesListing } from '@/components/hootup/category-new-classes-listing'

export const metadata: Metadata = {
  title: '새로운 클래스 · 훗업 HOOT UP',
  description:
    '최근 오픈한 신규·트렌드 강의 24선. AI 도구부터 신기술까지 갓 부화한 클래스를 만나보세요.',
}

export default function NewClassesCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryNewClassesListing />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
