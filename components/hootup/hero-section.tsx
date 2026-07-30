export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hoot-container hero__inner">
        <div className="hero__left">
          <p className="hero__promo">
            <span className="hero__promo-brand">
              HOOT <span className="hero__promo-up">UP</span>
            </span>
            <span>1년 중 가장 큰 할인 주간</span>
          </p>
          <h1 className="hero__title" id="hero-title">
            <span className="hero__title-text">
              LEVEL UP <span className="hero__title-week">WEEK</span>
            </span>
            <img className="hero__title-rocket" src="/figma/rocket.svg" alt="" width={46} height={117} aria-hidden="true" />
          </h1>
          <p className="hero__subtitle">커리어 전환, 지금이 타이밍.</p>
          <div className="hero__desc">
            <p>
              개발·디자인·커리어 등 <strong>‘평생 소장’</strong> 강의를 1년 중 가장 크게 할인하는 주간.
            </p>
            <p>
              웹 퍼블리셔·UX 디자이너 <strong>로드맵 패키지</strong>도 추가 혜택.
            </p>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__offer">
            <p className="hero__offer-label">
              단건 강의
              <br />
              최대
            </p>
            <p className="hero__offer-percent">
              <span className="hero__offer-num">40%</span>
              <span className="hero__offer-off">off</span>
            </p>
          </div>
          <p className="hero__package">
            <span className="hero__package-rate">
              + <span>18%</span>
            </span>
            <span>로드맵 패키지 추가</span>
          </p>
        </div>
      </div>
    </section>
  )
}
