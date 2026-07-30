import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryPhotoVideoListing } from '@/components/hootup/category-photo-video-listing'

export const metadata: Metadata = {
  title: '모션 & 크리에이티브 · 사진・영상 · 훗업 HOOT UP',
  description:
    '숏폼(릴스·쇼츠), 애프터이펙트 모션그래픽까지. 모션 & 크리에이티브 단건 클래스를 만나보세요.',
}

export default function PhotoVideoMotionCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryPhotoVideoListing lockedSub="모션 & 크리에이티브" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
