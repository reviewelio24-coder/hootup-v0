import { BrandLogo } from './brand-logo'
import { chart, formatPrice } from '@/lib/hootup-data'

export function BestClassSection() {
  return (
    <section className="section section--soft" aria-labelledby="best-heading">
      <div className="hoot-container">
        <div className="collection__header">
          <h2 className="collection__title" id="best-heading">
            <b>HOOT UP</b> 차트, 인기 강의
          </h2>
          <a className="collection__more" href="#">
            전체 클래스 보기
          </a>
        </div>

        <div className="best-class__layout">
          <aside className="sub-banner" aria-label="올나잇 패스 구독 안내">
            <div className="sub-banner__top">
              <BrandLogo invert />
              <span className="sub-banner__tag">7일 무료 체험</span>
              <h3 className="sub-banner__title">
                첫 일주일은
                <br />
                마음껏 <span className="sub-banner__title-accent">무료로!</span>
              </h3>
              <p className="sub-banner__offer">
                <span>
                  올나잇 패스 <b>7일 무료</b>
                </span>
                <span>
                  + 첫 결제 <b>20% 쿠폰</b>
                </span>
              </p>
            </div>
            <a className="sub-banner__cta" href="#">
              구독신청 하러가기
              <img src="/figma/chevron-right.svg" alt="" width={20} height={20} aria-hidden="true" />
            </a>
            <div className="sub-banner__illus" aria-hidden="true">
              <img className="sub-banner__illus-c2" src="/figma/sub-banner-c2.svg" alt="" />
              <img className="sub-banner__illus-c1" src="/figma/sub-banner-c1.svg" alt="" />
              <img className="sub-banner__illus-out" src="/figma/sub-banner-out.svg" alt="" />
            </div>
          </aside>

          <ul className="chart-list">
            {chart.map((course) => (
              <li key={course.id}>
                <a className="chart-item" href="#">
                  <span className="chart-item__thumb-wrap">
                    <img
                      className="chart-item__thumb"
                      src={course.thumb || '/placeholder.svg'}
                      alt=""
                      loading="lazy"
                    />
                    <img
                      className="chart-item__heart"
                      src="/figma/heart-fill.svg"
                      alt=""
                      width={16}
                      height={16}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="chart-item__info">
                    <span className="chart-item__title">{course.title}</span>
                    <span className="chart-item__author">{course.author}</span>
                    <span className="chart-item__price">
                      <span className="chart-item__origin">{formatPrice(course.origin)}</span>
                      <img src="/figma/arrow-right.svg" alt="" width={16} height={16} aria-hidden="true" />
                      <span className="chart-item__final">{formatPrice(course.final)}</span>
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
