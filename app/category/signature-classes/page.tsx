import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategorySignatureClassesListing } from '@/components/hootup/category-signature-classes-listing'

export const metadata: Metadata = {
  title: '시그니쳐 클래스 · 훗업 HOOT UP',
  description:
    '각 분야를 대표하는 훗업 간판 강의 24선. 멘토 대표작과 로드맵 핵심 클래스를 만나보세요.',
}

export default function SignatureClassesCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategorySignatureClassesListing />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
