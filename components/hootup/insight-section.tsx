import { magazines } from '@/lib/hootup-data'

export function InsightSection() {
  return (
    <section className="section" aria-labelledby="magazine-heading">
      <div className="hoot-container">
        <div className="collection__header">
          <div className="collection__heading">
            <h2 className="collection__title" id="magazine-heading">
              <b>훗업 인사이트,</b> 오늘의 이야기
            </h2>
            <p className="collection__subtitle">배움과 성장에 관한 크리에이터들의 생각</p>
          </div>
          <a className="collection__more" href="/magazine">
            매거진 더보기
            <img src="/figma/chevron-right.svg" alt="" width={14} height={14} aria-hidden="true" />
          </a>
        </div>

        <ul className="magazine__grid">
          {magazines.map((item) => (
            <li key={item.id}>
              <article className="mag-card">
                <a href="/magazine" aria-label={`${item.title} 읽기`}>
                  <img
                    className="mag-card__thumb"
                    src={item.thumb || '/placeholder.svg'}
                    alt={`${item.title} 커버 이미지`}
                    loading="lazy"
                  />
                </a>
                <span className="mag-card__tag">{item.tag}</span>
                <h3 className="mag-card__title">
                  <a href="/magazine">{item.title}</a>
                </h3>
                <p className="mag-card__desc">{item.desc}</p>
                <div className="mag-card__foot">
                  <span className="mag-card__author">
                    <img src={item.avatar || '/placeholder.svg'} alt="" width={24} height={24} loading="lazy" />
                    {item.author}
                  </span>
                  <span className="mag-card__meta">
                    <span>
                      <img src="/figma/calendar.svg" alt="" width={14} height={14} aria-hidden="true" />
                      {item.date}
                    </span>
                    <span>
                      <img src="/figma/chat.svg" alt="" width={14} height={14} aria-hidden="true" />
                      {item.comments}
                    </span>
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
