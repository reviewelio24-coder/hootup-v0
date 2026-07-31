'use client'

import { useEffect, useRef } from 'react'
import {
  categoryModelLabel,
  gnbCategories,
  type GnbCategory,
} from '@/lib/hootup-categories'

type CategoryGnbProps = {
  id: string
  open: boolean
  activeSlug: string
  onActiveChange: (slug: string) => void
  onClose: () => void
}

export function CategoryGnb({ id, open, activeSlug, onActiveChange, onClose }: CategoryGnbProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const active = gnbCategories.find((c) => c.slug === activeSlug) ?? gnbCategories[0]

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    const first = panelRef.current?.querySelector<HTMLElement>('[data-gnb-focus]')
    first?.focus()
  }, [open])

  return (
    <div
      className={`category-gnb${open ? ' is-open' : ''}`}
      id={id}
      aria-hidden={!open}
    >
      <button
        className="category-gnb__backdrop"
        type="button"
        tabIndex={open ? 0 : -1}
        aria-label="카테고리 메뉴 닫기"
        onClick={onClose}
      />
      <div
        className="category-gnb__panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="전체 카테고리"
        aria-hidden={!open}
      >
        <div className="hoot-container category-gnb__inner">
          <aside className="category-gnb__rail" aria-label="대분류">
            <p className="category-gnb__rail-label">카테고리</p>
            <ul className="category-gnb__rail-list">
              {gnbCategories.map((cat, index) => (
                <li key={cat.slug}>
                  <button
                    type="button"
                    className={`category-gnb__rail-item${cat.slug === active.slug ? ' is-active' : ''}`}
                    data-gnb-focus={index === 0 ? '' : undefined}
                    tabIndex={open ? 0 : -1}
                    aria-current={cat.slug === active.slug ? 'true' : undefined}
                    onClick={() => onActiveChange(cat.slug)}
                    onMouseEnter={() => onActiveChange(cat.slug)}
                  >
                    <span className="category-gnb__rail-name">{cat.name}</span>
                    <span className={`category-gnb__model category-gnb__model--${modelClass(cat.model)}`}>
                      {categoryModelLabel[cat.model]}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="category-gnb__content">
            <div className="category-gnb__content-head">
              <div>
                <h2 className="category-gnb__title">{active.name}</h2>
                <p className="category-gnb__desc">{modelDescription(active)}</p>
              </div>
              <span className={`category-gnb__model category-gnb__model--lg category-gnb__model--${modelClass(active.model)}`}>
                {categoryModelLabel[active.model]}
              </span>
            </div>

            <ul className="category-gnb__subs">
              {active.subcategories.map((sub) => (
                <li key={sub}>
                  <a
                    className="category-gnb__sub"
                    href={categoryHref(active.slug, sub)}
                    tabIndex={open ? 0 : -1}
                    onClick={onClose}
                  >
                    {sub}
                  </a>
                </li>
              ))}
            </ul>

            <a
              className="category-gnb__all"
              href={categoryHref(active.slug)}
              tabIndex={open ? 0 : -1}
              onClick={onClose}
            >
              {active.name} 전체 보기
              <img src="/figma/chevron-right.svg" alt="" width={14} height={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function modelClass(model: GnbCategory['model']) {
  if (model === 'subscription+single') return 'mixed'
  return model
}

function modelDescription(cat: GnbCategory) {
  if (cat.model === 'single') return '평생 소장형 단건 클래스'
  if (cat.model === 'subscription') return '올나잇 패스로 무제한 수강'
  return '구독과 단건을 함께 제공하는 카테고리'
}

function categoryHref(slug: string, sub?: string) {
  if (slug === 'dev-it' && sub === '웹 퍼블리싱') return '/category/dev-it/web-publishing'
  if (slug === 'dev-it' && sub === '프론트엔드') return '/category/dev-it/frontend'
  if (slug === 'dev-it' && sub === '백엔드 & 서버') return '/category/dev-it/backend'
  if (slug === 'dev-it' && sub === '모바일 & 앱 개발') return '/category/dev-it/mobile'
  if (slug === 'dev-it' && sub === '데이터 & AI') return '/category/dev-it/data-ai'
  if (slug === 'dev-it' && sub === 'AI 개발 도구') return '/category/dev-it/ai-tools'
  if (slug === 'dev-it' && sub === '노코드 & 자동화') return '/category/dev-it/nocode'
  if (slug === 'dev-it') return '/category/dev-it'
  if (slug === 'career-money' && sub === '직무역량 & 일잘러') return '/category/career-money/job-skills'
  if (slug === 'career-money' && sub === '취업 & 이직') return '/category/career-money/career'
  if (slug === 'career-money' && sub === '마케팅 & 브랜딩') return '/category/career-money/marketing'
  if (slug === 'career-money' && sub === '사이드프로젝트 & N잡') return '/category/career-money/side-project'
  if (slug === 'career-money' && sub === '재테크 & 투자') return '/category/career-money/finance'
  if (slug === 'career-money' && sub === '절세 & 머니 관리') return '/category/career-money/tax'
  if (slug === 'career-money') return '/category/career-money'
  if (slug === 'design-creative' && sub === 'UX/UI 디자인') return '/category/design-creative/ux-ui'
  if (slug === 'design-creative' && sub === '그래픽 디자인') return '/category/design-creative/graphic'
  if (slug === 'design-creative' && sub === '브랜딩 & 로고') return '/category/design-creative/branding'
  if (slug === 'design-creative' && sub === '3D & 모션 디자인') return '/category/design-creative/motion'
  if (slug === 'design-creative' && sub === '일러스트 & 디지털아트')
    return '/category/design-creative/illustration'
  if (slug === 'design-creative' && sub === '크리에이티브 입문') return '/category/design-creative/intro'
  if (slug === 'design-creative') return '/category/design-creative'
  if (slug === 'photo-video' && sub === '사진 촬영') return '/category/photo-video/photography'
  if (slug === 'photo-video' && sub === '영상 촬영') return '/category/photo-video/filming'
  if (slug === 'photo-video' && sub === '편집 & 후보정') return '/category/photo-video/editing'
  if (slug === 'photo-video' && sub === '모션 & 크리에이티브') return '/category/photo-video/motion'
  if (slug === 'photo-video') return '/category/photo-video'
  if (slug === 'drawing-illust' && sub === '디지털 드로잉') return '/category/drawing-illust/digital'
  if (slug === 'drawing-illust' && sub === '손그림 & 회화') return '/category/drawing-illust/hand-drawing'
  if (slug === 'drawing-illust' && sub === '캐릭터 & 웹툰')
    return '/category/drawing-illust/character-webtoon'
  if (slug === 'drawing-illust' && sub === '캘리그라피 & 레터링')
    return '/category/drawing-illust/calligraphy-lettering'
  if (slug === 'drawing-illust') return '/category/drawing-illust'
  if (slug === 'fitness-mindfulness' && sub === '홈트 & 근력')
    return '/category/fitness-mindfulness/home-training'
  if (slug === 'fitness-mindfulness' && sub === '요가 & 필라테스')
    return '/category/fitness-mindfulness/yoga-pilates'
  if (slug === 'fitness-mindfulness' && sub === '러닝 & 유산소')
    return '/category/fitness-mindfulness/running'
  if (slug === 'fitness-mindfulness') return '/category/fitness-mindfulness'
  return `/category/${slug}`
}
