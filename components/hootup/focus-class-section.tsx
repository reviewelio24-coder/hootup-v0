import { collections } from '@/lib/hootup-data'
import { CourseCard } from './course-card'

export function FocusClassSection() {
  return (
    <section className="section" aria-labelledby="focus-heading">
      <div className="hoot-container">
        <h2 className="sr-only" id="focus-heading">
          포커스 클래스
        </h2>

        {collections.map((col) => (
          <article className="collection" key={col.id} aria-labelledby={`col-${col.id}`}>
            <header className="collection__header">
              <div className="collection__heading">
                <h3 className="collection__title" id={`col-${col.id}`}>
                  <b>{col.highlight}</b> {col.title}
                </h3>
              </div>
              <a className="collection__more" href="#">
                전체 클래스 보기
                <img src="/figma/chevron-right.svg" alt="" width={14} height={14} aria-hidden="true" />
              </a>
            </header>

            <ul className="collection__grid">
              {col.courses.map((course) => (
                <li key={course.id}>
                  <CourseCard course={course} />
                </li>
              ))}
            </ul>

            <div className="collection__nav">
              <button className="carousel-btn" type="button" aria-label="이전 클래스 보기">
                <img className="carousel-btn__icon" src="/figma/chevron-left.svg" alt="" width={18} height={18} aria-hidden="true" />
              </button>
              <button className="carousel-btn" type="button" aria-label="다음 클래스 보기">
                <img className="carousel-btn__icon" src="/figma/chevron-right.svg" alt="" width={18} height={18} aria-hidden="true" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
