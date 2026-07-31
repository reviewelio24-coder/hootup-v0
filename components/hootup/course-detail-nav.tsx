'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#about', label: '클래스 소개' },
  { href: '#curriculum', label: '커리큘럼' },
  { href: '#reviews', label: '수강후기(415)' },
  { href: '#faq', label: '자주 묻는 질문들' },
  { href: '#mentor', label: '멘토 소개' },
] as const

export function CourseDetailNav() {
  const [current, setCurrent] = useState('#about')

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          setCurrent(`#${visible[0].target.id}`)
        }
      },
      {
        rootMargin: '-160px 0px -55% 0px',
        threshold: [0, 0.2, 0.4, 0.6],
      },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="course-nav" aria-label="강의 상세 내비게이션">
      <ul className="course-nav__list">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a
              className={`course-nav__link${current === link.href ? ' is-current' : ''}`}
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
