import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryPhotoVideoListing } from '@/components/hootup/category-photo-video-listing'

export const metadata: Metadata = {
  title: '영상 촬영 · 사진・영상 · 훗업 HOOT UP',
  description:
    '브이로그, 시네마틱 영상, 조명·구도까지. 영상 촬영 단건 클래스를 만나보세요.',
}

export default function PhotoVideoFilmingCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryPhotoVideoListing lockedSub="영상 촬영" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
