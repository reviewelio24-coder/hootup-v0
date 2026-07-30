import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CategoryDrawingIllustListing } from '@/components/hootup/category-drawing-illust-listing'

export const metadata: Metadata = {
  title: '캐릭터 & 웹툰 · 드로잉・일러스트 · 훗업 HOOT UP',
  description:
    '캐릭터·이모티콘, 웹툰 작화, 콘티·연출까지. 캐릭터 & 웹툰 단건 클래스를 만나보세요.',
}

export default function DrawingIllustCharacterWebtoonCategoryRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <Suspense fallback={<div className="hoot-container category-page__empty">클래스를 불러오는 중…</div>}>
          <CategoryDrawingIllustListing lockedSub="캐릭터 & 웹툰" />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
