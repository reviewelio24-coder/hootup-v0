import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryPhotoVideoListing } from '@/components/hootup/category-photo-video-listing'

export const metadata: Metadata = {
  title: '사진 촬영 · 사진・영상 · 훗업 HOOT UP',
  description:
    '스마트폰 사진, 카메라 입문, 감성 스냅, 인물 사진까지. 사진 촬영 단건 클래스를 만나보세요.',
}

export default function PhotoVideoPhotographyCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryPhotoVideoListing lockedSub="사진 촬영" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
