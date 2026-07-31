'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { CourseCard } from './course-card'
import {
  NEW_CLASSES_TOTAL_PAGES,
  newClassesDealRoutes,
  newClassesSubcategories,
  newClassesSubcategoryRoutes,
  getNewClassesCoursesByDeal,
  getNewClassesCoursesByPage,
  getNewClassesCoursesBySubcategory,
  type NewClassesDeal,
  type NewClassesSubcategory,
  type CategoryCourse,
} from '@/lib/hootup-category-new-classes'

const SORT_OPTIONS = ['인기순', '최신순', '평점순', '낮은 가격순'] as const

function parsePage(value: string | null) {
  const n = Number(value ?? '1')
  if (!Number.isFinite(n) || n < 1) return 1
  if (n > NEW_CLASSES_TOTAL_PAGES) return NEW_CLASSES_TOTAL_PAGES
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

type CategoryNewClassesListingProps = {
  lockedSub?: Exclude<NewClassesSubcategory, '전체'>
  lockedDeal?: NewClassesDeal
}

export function CategoryNewClassesListing({
  lockedSub,
  lockedDeal,
}: CategoryNewClassesListingProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const page = parsePage(searchParams.get('page'))

  const [sub, setSub] = useState<NewClassesSubcategory>(lockedSub ?? '전체')
  const [sort, setSort] = useState<(typeof SORT_OPTIONS)[number]>('인기순')
  const [sortOpen, setSortOpen] = useState(false)

  const activeSub = lockedSub ?? sub
  const showPager = !lockedSub && !lockedDeal && activeSub === '전체'
  const showDealFilters = activeSub === '전체' || Boolean(lockedDeal)
  const earlybirdOn = lockedDeal === 'earlybird'
  const eventDealOn = lockedDeal === 'event'

  const goToPage = (next: number) => {
    const params = new URLSearchParams(searchParams.toString())
    if (next <= 1) params.delete('page')
    else params.set('page', String(next))
    const query = params.toString()
    router.push(query ? `${pathname}?${query}` : pathname)
  }

  const handleSubClick = (item: NewClassesSubcategory) => {
    const route = newClassesSubcategoryRoutes[item]
    if (route && route !== pathname) {
      router.push(route)
      return
    }
    if (lockedSub) return
    setSub(item)
  }

  const courses = useMemo(() => {
    let list: CategoryCourse[] = lockedDeal
      ? getNewClassesCoursesByDeal(lockedDeal)
      : lockedSub
        ? getNewClassesCoursesBySubcategory(lockedSub)
        : activeSub === '전체'
          ? [...getNewClassesCoursesByPage(page)]
          : getNewClassesCoursesBySubcategory(activeSub)

    return sortCourses(list, sort)
  }, [lockedDeal, lockedSub, activeSub, page, sort])

  return (
    <div className="category-page">
      <div className="hoot-container">
        <section className="category-page__banner" aria-label="새로운 클래스">
          <img
            className="category-page__banner-img"
            src="/figma/img/category-new-classes-banner.png"
            alt=""
            aria-hidden="true"
          />
          <h1 className="category-page__banner-title">새로운 클래스</h1>
        </section>

        <section className="category-page__subs" aria-labelledby="subcat-heading">
          <h2 className="category-page__subs-title" id="subcat-heading">
            세부 카테고리
          </h2>
          <div className="category-page__subs-list" role="tablist" aria-label="세부 카테고리">
            {newClassesSubcategories.map((item) => {
              const active =
                item === '전체'
                  ? activeSub === '전체' || Boolean(lockedDeal)
                  : !lockedDeal && activeSub === item
              const route = newClassesSubcategoryRoutes[item]
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

          {showDealFilters ? (
            <>
              <Link
                href={earlybirdOn ? '/category/new-classes' : newClassesDealRoutes.earlybird}
                className={`category-page__filter-chip${earlybirdOn ? ' is-on' : ''}`}
                aria-pressed={earlybirdOn}
              >
                얼리버드 할인
              </Link>
              <Link
                href={eventDealOn ? '/category/new-classes' : newClassesDealRoutes.event}
                className={`category-page__filter-chip${eventDealOn ? ' is-on' : ''}`}
                aria-pressed={eventDealOn}
              >
                이벤트 할인
              </Link>
            </>
          ) : null}
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
              className={`category-page__page${page === 2 ? ' is-active' : ''}`}
              aria-current={page === 2 ? 'page' : undefined}
              onClick={() => goToPage(2)}
            >
              2
            </button>
            <button
              type="button"
              className="category-page__pager-arrow"
              aria-label="다음 페이지"
              disabled={page >= NEW_CLASSES_TOTAL_PAGES}
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
