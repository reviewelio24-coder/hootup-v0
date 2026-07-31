import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryBestClassesListing } from '@/components/hootup/category-best-classes-listing'

export const metadata: Metadata = {
  title: '베스트 클래스 · 훗업 HOOT UP',
  description:
    '수강생 수·별점이 높은 인기 강의 24선. 대분류를 골고루 담은 훗업 베스트 클래스를 만나보세요.',
}

export default function BestClassesCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryBestClassesListing />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
