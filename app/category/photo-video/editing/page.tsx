import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryPhotoVideoListing } from '@/components/hootup/category-photo-video-listing'

export const metadata: Metadata = {
  title: '편집 & 후보정 · 사진・영상 · 훗업 HOOT UP',
  description:
    '프리미어, 다빈치, 라이트룸, 컷 편집까지. 편집 & 후보정 단건 클래스를 만나보세요.',
}

export default function PhotoVideoEditingCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryPhotoVideoListing lockedSub="편집 & 후보정" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
