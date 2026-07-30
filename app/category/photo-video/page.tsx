import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryPhotoVideoListing } from '@/components/hootup/category-photo-video-listing'

export const metadata: Metadata = {
  title: '사진・영상 · 훗업 HOOT UP',
  description:
    '사진 촬영, 영상 촬영, 편집·후보정, 숏폼·모션까지. 사진・영상 클래스를 만나보세요.',
}

export default function PhotoVideoCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryPhotoVideoListing />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
