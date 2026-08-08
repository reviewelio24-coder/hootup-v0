import type { Metadata } from 'next'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { MagazinePage } from '@/components/hootup/magazine-page'
import './magazine.css'

export const metadata: Metadata = {
  title: '훗업 매거진 · 밤에 읽는 것들 · HOOT UP',
  description:
    '모두가 잠든 시간, 조용히 자기를 키우는 사람들의 기록. 지식 공유자가 직접 쓰는 성장의 과정을 모은 훗업 매거진.',
}

export default function MagazineRoutePage() {
  return (
    <>
      <SiteHeader />
      <MagazinePage />
      <SiteFooter />
    </>
  )
}
