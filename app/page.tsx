import { SiteHeader } from '@/components/hootup/site-header'
import { HeroSection } from '@/components/hootup/hero-section'
import { CategoryNavSection } from '@/components/hootup/category-nav-section'
import { FocusClassSection } from '@/components/hootup/focus-class-section'
import { BestClassSection } from '@/components/hootup/best-class-section'
import { PromoBannerSection } from '@/components/hootup/promo-banner-section'
import { InsightSection } from '@/components/hootup/insight-section'
import { SloganSection } from '@/components/hootup/slogan-section'
import { HootDeskSection } from '@/components/hootup/hoot-desk-section'
import { SiteFooter } from '@/components/hootup/site-footer'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <CategoryNavSection />
        <FocusClassSection />
        <BestClassSection />
        <PromoBannerSection />
        <InsightSection />
        <SloganSection />
        <HootDeskSection />
      </main>
      <SiteFooter />
    </>
  )
}
