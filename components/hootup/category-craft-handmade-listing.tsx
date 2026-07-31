'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { CourseCard } from './course-card'
import {
  CRAFT_HANDMADE_TOTAL_PAGES,
  craftHandmadeSubcategories,
  craftHandmadeSubcategoryRoutes,
  getCraftHandmadeCoursesByPage,
  getCraftHandmadeCoursesBySubcategory,
  type CraftHandmadeSubcategory,
  type CategoryCourse,
} from '@/lib/hootup-category-craft-handmade'

const SORT_OPTIONS = ['인기순', '최신순', '평점순', '낮은 가격순'] as const

function parsePage(value: string | null) {
  const n = Number(value ?? '1')
  if (!Number.isFinite(n) || n < 1) return 1
  if (n > CRAFT_HANDMADE_TOTAL_PAGES) return CRAFT_HANDMADE_TOTAL_PAGES
  return Math.floor(n)
}

function sortCourses(list: CategoryCourse[], sort: (typeof SORT_OPTIONS)[number]) {
  const next = [...list]
  next.sort((a, b) => {
    if (sort === '최신순') return 0
    if (sort === '평점순') return b.rating - a.rating
    if (sort === '낮은 가격순') return a.final - b.final
    return b.reviews - a.reviews
  })
  return next
}

type CategoryCraftHandmadeListingProps = {
  lockedSub?: Exclude<CraftHandmadeSubcategory, '전체'>
}

export function CategoryCraftHandmadeListing({ lockedSub }: CategoryCraftHandmadeListingProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const page = parsePage(searchParams.get('page'))

  const [sub, setSub] = useState<CraftHandmadeSubcategory>(lockedSub ?? '전체')
  const [sort, setSort] = useState<(typeof SORT_OPTIONS)[number]>('인기순')
  const [sortOpen, setSortOpen] = useState(false)
  const [earlybird, setEarlybird] = useState(true)
  const [eventDeal, setEventDeal] = useState(false)

  const activeSub = lockedSub ?? sub
  const showPager = !lockedSub

  const goToPage = (next: number) => {
    const params = new URLSearchParams(searchParams.toString())
    if (next <= 1) params.delete('page')
    else params.set('page', String(next))
    const query = params.toString()
    router.push(query ? `${pathname}?${query}` : pathname)
  }

  const handleSubClick = (item: CraftHandmadeSubcategory) => {
    const route = craftHandmadeSubcategoryRoutes[item]
    if (route && route !== pathname) {
      router.push(route)
      return
    }
    if (lockedSub) return
    setSub(item)
  }

  const courses = useMemo(() => {
    let list: CategoryCourse[] = lockedSub
      ? getCraftHandmadeCoursesBySubcategory(lockedSub)
      : activeSub === '전체'
        ? [...getCraftHandmadeCoursesByPage(page)]
        : getCraftHandmadeCoursesBySubcategory(activeSub)

    if (earlybird) list = list.filter((c) => c.earlybird)
    if (eventDeal) list = list.filter((c) => c.event)
    return sortCourses(list, sort)
  }, [lockedSub, activeSub, page, sort, earlybird, eventDeal])

  return (
    <div className="category-page">
      <div className="hoot-container">
        <section className="category-page__banner" aria-label="공예・핸드메이드">
          <img
            className="category-page__banner-img"
            src="/figma/img/category-craft-handmade-banner.png"
            alt=""
            aria-hidden="true"
          />
          <h1 className="category-page__banner-title">공예・핸드메이드</h1>
        </section>

        <section className="category-page__subs" aria-labelledby="subcat-heading">
          <h2 className="category-page__subs-title" id="subcat-heading">
            세부 카테고리
          </h2>
          <div className="category-page__subs-list" role="tablist" aria-label="세부 카테고리">
            {craftHandmadeSubcategories.map((item) => {
              const active = activeSub === item
              const route = craftHandmadeSubcategoryRoutes[item]
              const className = `category-page__chip${active ? ' is-active' : ''}`

              if (route) {
                return (
                  <Link
                    key={item}
                    href={route}
                    role="tab"
                    aria-selected={active}
                    className={className}
                    onClick={() => {
                      if (route === pathname) setSub(item)
                    }}
                  >
                    {item}
                  </Link>
                )
              }

              return (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={className}
                  onClick={() => handleSubClick(item)}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </section>

        <div className="category-page__filters">
          <div className="category-page__sort">
            <button
              type="button"
              className="category-page__sort-btn"
              aria-haspopup="listbox"
              aria-expanded={sortOpen}
              onClick={() => setSortOpen((v) => !v)}
            >
              {sort}
              <img src="/figma/caret-down.svg" alt="" width={16} height={16} aria-hidden="true" />
            </button>
            {sortOpen ? (
              <ul className="category-page__sort-menu" role="listbox" aria-label="정렬">
                {SORT_OPTIONS.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={sort === option}
                      className={sort === option ? 'is-active' : undefined}
                      onClick={() => {
                        setSort(option)
                        setSortOpen(false)
                      }}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <button
            type="button"
            className={`category-page__filter-chip${earlybird ? ' is-on' : ''}`}
            aria-pressed={earlybird}
            onClick={() => setEarlybird((v) => !v)}
          >
            얼리버드 할인
          </button>
          <button
            type="button"
            className={`category-page__filter-chip${eventDeal ? ' is-on' : ''}`}
            aria-pressed={eventDeal}
            onClick={() => setEventDeal((v) => !v)}
          >
            이벤트 할인
          </button>
        </div>

        {courses.length > 0 ? (
          <ul className="category-page__grid">
            {courses.map((course) => (
              <li key={course.id}>
                <CourseCard course={course} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="category-page__empty">조건에 맞는 클래스가 없습니다.</p>
        )}

        {showPager ? (
          <nav className="category-page__pager" aria-label="페이지 탐색">
            <button
              type="button"
              className="category-page__pager-arrow"
              aria-label="이전 페이지"
              disabled={page <= 1}
              onClick={() => goToPage(page - 1)}
            >
              <img src="/figma/chevron-left.svg" alt="" width={16} height={16} aria-hidden="true" />
            </button>
            <button
              type="button"
              className={`category-page__page${page === 1 ? ' is-active' : ''}`}
              aria-current={page === 1 ? 'page' : undefined}
              onClick={() => goToPage(1)}
            >
              1
            </button>
            <button
              type="button"
              className="category-page__pager-arrow"
              aria-label="다음 페이지"
              disabled={page >= CRAFT_HANDMADE_TOTAL_PAGES}
              onClick={() => goToPage(page + 1)}
            >
              <img src="/figma/chevron-right.svg" alt="" width={16} height={16} aria-hidden="true" />
            </button>
          </nav>
        ) : null}
      </div>
    </div>
  )
}
