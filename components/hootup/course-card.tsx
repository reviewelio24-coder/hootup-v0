'use client'

import type { Course } from '@/lib/hootup-data'
import { formatPrice } from '@/lib/hootup-data'

export function CourseCard({ course }: { course: Course }) {
  const fullStars = Math.round(course.rating)
  const href = course.href ?? '/course/responsive-publishing'

  return (
    <article className="course-card">
      <a className="course-card__thumb" href={href} aria-label={`${course.title} 상세 보기`}>
        <img
          className="course-card__img"
          src={course.thumb || '/placeholder.svg'}
          alt={`${course.title} 썸네일`}
          loading="lazy"
        />
        <span className="course-card__badge">{course.discount}% 할인</span>
        <button
          type="button"
          className="course-card__like"
          aria-label="찜하기"
          onClick={(e) => e.preventDefault()}
        >
          <img className="course-card__like-icon" src="/figma/heart-fill.svg" alt="" width={16} height={16} aria-hidden="true" />
        </button>
      </a>

      <div className="course-card__body">
        <img
          className="course-card__avatar"
          src={course.avatar || '/placeholder.svg'}
          alt=""
          width={30}
          height={30}
          loading="lazy"
          aria-hidden="true"
        />
        <div className="course-card__info">
          <h3 className="course-card__title">
            <a href={href}>{course.title}</a>
          </h3>
          <p className="course-card__author">{course.author}</p>

          <p className="course-card__price">
            <span className="course-card__sale">{course.discount}%</span>
            <span className="course-card__origin">{formatPrice(course.origin)}</span>
            <img className="course-card__arrow" src="/figma/arrow-right.svg" alt="→" width={14} height={14} />
            <span className="course-card__final">{formatPrice(course.final)}</span>
          </p>

          <p className="course-card__rating">
            <span className="course-card__stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <img
                  key={i}
                  className="course-card__star"
                  src={i < fullStars ? '/figma/star-full.svg' : '/figma/star-empty.svg'}
                  alt=""
                  width={14}
                  height={14}
                />
              ))}
            </span>
            <span>{course.rating.toFixed(1)}</span>
            <span aria-hidden="true">|</span>
            <span className="course-card__rating-count">{course.reviews.toLocaleString('ko-KR')}명 수강</span>
          </p>
        </div>
      </div>
    </article>
  )
}
