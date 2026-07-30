import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDevItListing } from '@/components/hootup/category-dev-it-listing'

export const metadata: Metadata = {
  title: 'AI 개발 도구 · 개발・IT · 훗업 HOOT UP',
  description:
    '클로드 코드, 바이브 코딩, AI 페어 프로그래밍, 커서·코파일럿까지. AI 개발 도구 단건 클래스를 만나보세요.',
}

export default function AiToolsCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDevItListing lockedSub="AI 개발 도구" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
