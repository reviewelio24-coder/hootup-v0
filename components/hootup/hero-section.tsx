export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hoot-container hero__inner">
        <div className="hero__left">
          <p className="hero__promo">
            <span className="hero__promo-brand">HOOT UP</span>
            <span>1년 중 가장 큰 할인 주간</span>
          </p>
          <h1 className="hero__title" id="hero-title">
            LEVEL UP WEEK
            <img className="hero__title-rocket" src="/figma/rocket.svg" alt="" width={46} height={64} aria-hidden="true" />
          </h1>
          <p className="hero__subtitle">커리어 전환, 지금이 타이밍.</p>
          <p className="hero__desc">
            개발 · 디자인 · 커리어까지, 평생 소장 강의를 1년 중 가장 크게 할인합니다. 로드맵 패키지로
            묶으면 혜택은 더 커집니다. 밤에 깨어 배우는 지금, 레벨업할 시간이에요.
          </p>
        </div>

        <div className="hero__right">
          <p className="hero__offer">
            단건 강의 최대
            <span className="hero__offer-percent">40%off</span>
          </p>
          <p className="hero__package">
            <span>+18%</span>
            <span>로드맵 패키지 추가</span>
          </p>
        </div>
      </div>
    </section>
  )
}
