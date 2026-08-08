import {
  magazineArchive,
  magazineCategories,
  magazineClasses,
  magazineCover,
  magazinePicks,
  magazineRecent,
} from '@/lib/hootup-magazine'

export function MagazinePage() {
  return (
    <main className="mag-page">
      <div className="hoot-container mag-page__inner">
        <div className="mag-topbar">
          <p className="mag-topbar__meta">
            <span>VOL. 24</span>
            <span className="mag-topbar__sep" aria-hidden="true">
              ·
            </span>
            <span>2026년 7월</span>
            <span className="mag-topbar__sep" aria-hidden="true">
              ·
            </span>
            <span>격주 발행</span>
          </p>
          <nav className="mag-topbar__nav" aria-label="매거진 보조 메뉴">
            <a href="#">훗업 데스크</a>
            <a href="/category/dev-it">전체 클래스</a>
            <a className="mag-topbar__subscribe" href="#">
              매거진 구독
            </a>
          </nav>
        </div>

        <header className="mag-masthead">
          <p className="mag-masthead__eyebrow">HOOT UP MAGAZINE</p>
          <h1 className="mag-masthead__title">밤에 읽는 것들</h1>
          <p className="mag-masthead__desc">
            모두가 잠든 시간, 조용히 자기를 키우는 사람들의 기록. 지식 공유자가 직접 쓰는
            <br />
            성장의 과정을 모았습니다.
          </p>
        </header>

        <nav className="mag-cats" aria-label="매거진 카테고리">
          {magazineCategories.map((cat, index) => (
            <a
              key={cat}
              className={`mag-cats__chip${index === 0 ? ' is-active' : ''}`}
              href="#"
            >
              {cat}
            </a>
          ))}
        </nav>

        <section className="mag-cover" aria-labelledby="mag-cover-title">
          <a className="mag-cover__media" href={magazineCover.href}>
            <img src={magazineCover.thumb} alt="" />
            <span className="mag-cover__badge">{magazineCover.badge}</span>
          </a>
          <div className="mag-cover__body">
            <p className="mag-cover__cat">{magazineCover.category}</p>
            <h2 id="mag-cover-title" className="mag-cover__title">
              <a href={magazineCover.href}>{magazineCover.title}</a>
            </h2>
            <p className="mag-cover__excerpt">{magazineCover.excerpt}</p>
            <div className="mag-cover__foot">
              <p className="mag-byline">
                <img src={magazineCover.avatar} alt="" width={26} height={26} />
                <span className="mag-byline__name">{magazineCover.author}</span>
                <span className="mag-byline__meta">{magazineCover.meta}</span>
              </p>
              <a className="mag-cover__more" href={magazineCover.href}>
                이어서 읽기
                <img src="/figma/chevron-right.svg" alt="" width={13} height={13} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="mag-classes" aria-labelledby="mag-classes-title">
          <div className="mag-classes__head">
            <h2 id="mag-classes-title">이 글을 읽은 분들이 듣는 클래스</h2>
            <a className="mag-classes__more" href="/category/dev-it">
              전체 클래스 보기
              <img src="/figma/chevron-right.svg" alt="" width={13} height={13} aria-hidden="true" />
            </a>
          </div>
          <ul className="mag-classes__list">
            {magazineClasses.map((course) => (
              <li key={course.id}>
                <article className="mag-course">
                  <figure className="mag-course__thumb">
                    <a href={course.href} aria-label={`${course.title} 상세 보기`}>
                      <img src={course.thumb} alt={course.thumbAlt} />
                    </a>
                    {course.flags.length > 0 && (
                      <div className="mag-course__flags">
                        {course.flags.map((flag) => (
                          <span
                            key={flag.label}
                            className={`mag-course__flag mag-course__flag--${flag.tone}`}
                          >
                            {flag.label}
                          </span>
                        ))}
                      </div>
                    )}
                    <button className="mag-course__like" type="button" aria-label="찜하기">
                      <img src="/figma/magazine/heart.svg" alt="" width={16} height={16} />
                    </button>
                    <span className="mag-course__badge">{course.discountBadge}</span>
                  </figure>
                  <div className="mag-course__body">
                    <img
                      className="mag-course__avatar"
                      src={course.avatar}
                      alt=""
                      width={30}
                      height={30}
                    />
                    <div className="mag-course__info">
                      <h3 className="mag-course__title">
                        <a href={course.href}>{course.title}</a>
                      </h3>
                      <p className="mag-course__meta">{course.meta}</p>
                      <p className="mag-course__price">
                        <span className="mag-course__rate">{course.rate}</span>
                        <del>{course.origin}</del>
                        <img
                          src="/figma/magazine/arrow.svg"
                          alt=""
                          width={16}
                          height={16}
                          aria-hidden="true"
                        />
                        <ins>{course.price}</ins>
                      </p>
                      <p className="mag-course__rating">
                        <img src={course.stars} alt="" width={70} height={14} />
                        <span>{course.rating}</span>
                        <span aria-hidden="true">|</span>
                        <span>{course.students}</span>
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section className="mag-section" aria-labelledby="mag-picks-title">
          <div className="mag-head">
            <h2 id="mag-picks-title">이번 호 픽</h2>
            <p>에디터가 꼭 읽어보길 권하는 두 편</p>
          </div>
          <div className="mag-picks">
            {magazinePicks.map((pick) => (
              <article className="mag-feature" key={pick.id}>
                <a className="mag-feature__media" href={pick.href}>
                  <img src={pick.thumb} alt="" />
                </a>
                <p className="mag-feature__cat">{pick.category}</p>
                <h3 className="mag-feature__title">
                  <a href={pick.href}>{pick.title}</a>
                </h3>
                <p className="mag-feature__excerpt">{pick.excerpt}</p>
                <p className="mag-byline">
                  <img src={pick.avatar} alt="" width={26} height={26} />
                  <span className="mag-byline__name">{pick.author}</span>
                  <span className="mag-byline__meta">{pick.meta}</span>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mag-section" aria-labelledby="mag-recent-title">
          <div className="mag-head">
            <h2 id="mag-recent-title">최근 글</h2>
            <p>지식 공유자들이 최근 올린 기록</p>
          </div>
          <ul className="mag-grid">
            {magazineRecent.map((post) => (
              <li key={post.id}>
                <article className="mag-card-dark">
                  <a className="mag-card-dark__media" href={post.href}>
                    <img src={post.thumb} alt="" />
                  </a>
                  <p className="mag-card-dark__cat">{post.category}</p>
                  <h3 className="mag-card-dark__title">
                    <a href={post.href}>{post.title}</a>
                  </h3>
                  <p className="mag-card-dark__excerpt">{post.excerpt}</p>
                  <p className="mag-card-dark__meta">{post.meta}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section className="mag-section mag-section--archive" aria-labelledby="mag-archive-title">
          <div className="mag-head">
            <h2 id="mag-archive-title">지난 호에서</h2>
          </div>
          <ul className="mag-archive">
            {magazineArchive.map((row) => (
              <li key={row.id}>
                <a className="mag-row" href={row.href}>
                  <span className="mag-row__no">{row.no}</span>
                  <span className="mag-row__cat">{row.category}</span>
                  <span className="mag-row__title">{row.title}</span>
                  <span className="mag-row__meta">{row.meta}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mag-more">
            <a className="mag-more__btn" href="#">
              글 더 보기
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
