import { chart, formatPrice } from '@/lib/hootup-data'

export function BestClassSection() {
  return (
    <section className="section section--soft" aria-labelledby="best-heading">
      <div className="hoot-container">
        <div className="collection__header">
          <div className="collection__heading">
            <h2 className="collection__title" id="best-heading">
              <b>HOOT UP 차트,</b> 인기 강의
            </h2>
            <p className="collection__subtitle">지금 가장 많이 담고, 가장 많이 배우는 클래스</p>
          </div>
          <a className="collection__more" href="#">
            전체 클래스 보기
            <img src="/figma/chevron-right.svg" alt="" width={14} height={14} aria-hidden="true" />
          </a>
        </div>

        <div className="best-class__layout">
          <aside className="sub-banner" aria-label="올나잇 패스 구독 안내">
            <span className="sub-banner__tag">구독 · 올나잇 패스</span>
            <h3 className="sub-banner__title">
              밤새 무제한으로
              <br />
              배우는 사람들의 선택
            </h3>
            <p className="sub-banner__desc">
              모든 클래스를 자유롭게, 로드맵도 통째로. 지금 시작하면 첫 7일은 무료예요.
            </p>
            <p className="sub-banner__price">
              월 <b>19,900원</b>
            </p>
            <a className="sub-banner__cta" href="#">
              7일 무료로 시작하기
            </a>
          </aside>

          <ol className="chart-list">
            {chart.map((course, i) => (
              <li key={course.id}>
                <a className="chart-item" href="#">
                  <span className="chart-item__rank" aria-hidden="true">
                    {i + 1}
                  </span>
                  <img
                    className="chart-item__thumb"
                    src={course.thumb || '/placeholder.svg'}
                    alt={`${course.title} 썸네일`}
                    loading="lazy"
                  />
                  <span className="chart-item__info">
                    <span className="sr-only">{i + 1}위. </span>
                    <span className="chart-item__title">{course.title}</span>
                    <span className="chart-item__author">{course.author}</span>
                    <span className="chart-item__price">{formatPrice(course.final)}</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
