import { news } from '@/lib/hootup-data'

export function HootDeskSection() {
  return (
    <section className="section section--soft" aria-labelledby="desk-heading">
      <div className="hoot-container">
        <div className="collection__header">
          <div className="collection__heading">
            <h2 className="collection__title" id="desk-heading">
              <b>훗 데스크,</b> 오늘의 IT · 커리어 뉴스
            </h2>
            <p className="collection__subtitle">개발자와 크리에이터를 위한 소식만 골라 전해요</p>
          </div>
          <a className="collection__more" href="#">
            뉴스 더보기
            <img src="/figma/chevron-right.svg" alt="" width={14} height={14} aria-hidden="true" />
          </a>
        </div>

        <ul className="news__grid">
          {news.map((item) => (
            <li key={item.id}>
              <article className="news-item">
                <div className="news-item__body">
                  <span className="news-item__tag">{item.tag}</span>
                  <h3 className="news-item__title">
                    <a href="#">{item.title}</a>
                  </h3>
                  <p className="news-item__desc">{item.desc}</p>
                  <p className="news-item__author">{item.reporter}</p>
                </div>
                <img
                  className="news-item__thumb"
                  src={item.thumb || '/placeholder.svg'}
                  alt={`${item.title} 관련 이미지`}
                  loading="lazy"
                />
              </article>
            </li>
          ))}
        </ul>

        <div className="news__more">
          <a className="collection__more" href="#">
            전체 뉴스 보기
            <img src="/figma/chevron-right.svg" alt="" width={14} height={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
