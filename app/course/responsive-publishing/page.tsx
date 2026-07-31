import type { Metadata } from 'next'
import { SiteHeader } from '@/components/hootup/site-header'
import { SiteFooter } from '@/components/hootup/site-footer'
import { CourseDetail } from '@/components/hootup/course-detail'

export const metadata: Metadata = {
  title: '제로부터 완성하는 반응형 웹 퍼블리싱 마스터 · 훗업 HOOT UP',
  description:
    'HTML 0줄에서 포트폴리오까지, 30일. 52강 전부 라이브 코딩·실습형으로 배우는 반응형 웹 퍼블리싱 마스터 클래스. 멘토 코드랩 현우, 평점 4.9, 평생 소장 강의.',
}

export default function ResponsivePublishingCoursePage() {
  return (
    <>
      <SiteHeader />
      <CourseDetail />
      <SiteFooter />
    </>
  )
}
