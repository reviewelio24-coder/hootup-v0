import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDevItPage } from '@/components/hootup/category-dev-it-page'

export const metadata: Metadata = {
  title: '개발・IT · 훗업 HOOT UP',
  description: '웹 퍼블리싱부터 프론트엔드, 백엔드, AI 개발 도구까지. 개발・IT 단건 클래스를 만나보세요.',
}

export default function DevItCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDevItPage />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
