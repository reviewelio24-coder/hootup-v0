'use client'

import { useCallback, useId, useState } from 'react'
import { navItems } from '@/lib/hootup-data'
import { gnbCategories } from '@/lib/hootup-categories'
import { BrandLogo } from './brand-logo'
import { CategoryGnb } from './category-gnb'

export function SiteHeader() {
  const [gnbOpen, setGnbOpen] = useState(false)
  const [activeSlug, setActiveSlug] = useState(gnbCategories[0].slug)
  const gnbId = useId()

  const closeGnb = useCallback(() => setGnbOpen(false), [])
  const toggleGnb = useCallback(() => setGnbOpen((v) => !v), [])

  return (
    <header className={`site-header${gnbOpen ? ' site-header--gnb-open' : ''}`}>
      <div className="hoot-container">
        <div className="site-header__search-row">
          <BrandLogo />

          <form className="site-header__search" role="search" action="#">
            <input
              className="site-header__search-input"
              type="search"
              placeholder="어떤 강의를 찾으시나요?"
              aria-label="클래스 검색"
            />
            <img
              className="site-header__icon"
              src="/figma/search.svg"
              alt=""
              width={20}
              height={20}
              aria-hidden="true"
            />
          </form>

          <div className="site-header__actions">
            <button className="site-header__action" type="button" aria-label="장바구니, 2개 담김">
              <img className="site-header__icon" src="/figma/cart.svg" alt="" width={24} height={24} aria-hidden="true" />
              <span className="site-header__badge" aria-hidden="true">2</span>
            </button>
            <button className="site-header__action" type="button" aria-label="알림, 새 알림 2개">
              <img className="site-header__icon" src="/figma/bell.svg" alt="" width={24} height={24} aria-hidden="true" />
              <span className="site-header__badge" aria-hidden="true">2</span>
            </button>
            <button className="site-header__action" type="button" aria-label="내 계정">
              <img
                className="site-header__avatar"
                src="/figma/img/avatar-1.png"
                alt="내 프로필"
                width={30}
                height={30}
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </div>

      <nav className="site-header__nav" aria-label="주요 메뉴">
        <div className="hoot-container site-header__nav-inner">
          <button
            className={`site-header__menu-btn${gnbOpen ? ' is-open' : ''}`}
            type="button"
            aria-label={gnbOpen ? '카테고리 메뉴 닫기' : '카테고리 메뉴 열기'}
            aria-expanded={gnbOpen}
            aria-controls={gnbId}
            onClick={toggleGnb}
          >
            <img
              className="site-header__icon site-header__nav-icon"
              src="/figma/list.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
            />
          </button>
          <ul className="nav-menu">
            {navItems.map((item, i) => {
              if (i === 0) {
                return (
                  <li key={item}>
                    <button
                      type="button"
                      className={`nav-menu__link nav-menu__link--btn${gnbOpen ? ' nav-menu__link--active' : ''}`}
                      aria-expanded={gnbOpen}
                      aria-controls={gnbId}
                      onClick={toggleGnb}
                    >
                      {item}
                    </button>
                  </li>
                )
              }
              return (
                <li key={item}>
                  <a
                    className="nav-menu__link"
                    href={
                      item === '베스트 클래스'
                        ? '/category/best-classes'
                        : item === '새로운 클래스'
                          ? '/category/new-classes'
                          : '#'
                    }
                    onClick={closeGnb}
                  >
                    {item}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      <CategoryGnb
        id={gnbId}
        open={gnbOpen}
        activeSlug={activeSlug}
        onActiveChange={setActiveSlug}
        onClose={closeGnb}
      />
    </header>
  )
}
