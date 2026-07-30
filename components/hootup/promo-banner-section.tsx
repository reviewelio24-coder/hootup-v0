'use client'

import { useEffect, useState } from 'react'

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number }

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

const pad = (n: number) => n.toString().padStart(2, '0')

function DigitPair({ value }: { value: number }) {
  const digits = pad(value).split('')
  return (
    <span className="countdown__pair">
      {digits.map((d, i) => (
        <span key={i} className="countdown__digit">
          <span className="countdown__digit-bg" aria-hidden="true" />
          <span className="countdown__digit-num">{d}</span>
        </span>
      ))}
    </span>
  )
}

export function PromoBannerSection() {
  const [target] = useState(() => Date.now() + 6 * 86_400_000 + 13 * 3_600_000 + 46 * 60_000 + 31_000)
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(getTimeLeft(target))
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units: Array<[string, number]> = [
    ['DAYS', time?.days ?? 0],
    ['HOURS', time?.hours ?? 0],
    ['MINUTES', time?.minutes ?? 0],
    ['SECONDS', time?.seconds ?? 0],
  ]

  return (
    <section className="promo" aria-labelledby="promo-heading">
      <div className="promo__bg" aria-hidden="true">
        <img src="/figma/img/promo-bg.png" alt="" />
      </div>

      <div
        className="countdown"
        role="timer"
        aria-live="off"
        aria-label="레벨업 위크 종료까지 남은 시간"
      >
        <div className="countdown__units">
          {units.map(([label, value]) => (
            <DigitPair key={label} value={value} />
          ))}
        </div>
        <div className="countdown__labels">
          {units.map(([label]) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>

      <div className="promo__panel">
        <div className="promo__discount">
          <span className="promo__discount-max">최대</span>
          <span className="promo__discount-num">40%</span>
        </div>

        <div className="promo__copy">
          <div className="promo__title-row">
            <h2 className="promo__title" id="promo-heading">
              LEVEL UP WEEK
            </h2>
            <img className="promo__rocket" src="/figma/rocket.svg" alt="" width={40} height={102} aria-hidden="true" />
          </div>
          <p className="promo__subtitle">
            놓치면 <strong>내년 봄</strong>까지, 기회는 다시 없어요.
          </p>
          <div className="promo__desc">
            <p>
              개발·디자인·커리어 <strong>‘평생 소장’</strong> 강의를 올해 가장 크게 만나는{' '}
              <strong>마지막 주간.</strong>
            </p>
            <p>한 번 사두면 평생 당신 거예요</p>
          </div>
        </div>

        <div className="promo__side">
          <div className="promo__illus" aria-hidden="true">
            <img src="/figma/promo-illus-c2.svg" alt="" />
            <img src="/figma/promo-illus-c1.svg" alt="" />
            <img src="/figma/promo-illus-out.svg" alt="" />
          </div>
          <p className="promo__side-note">로드맵은 +18% 더!</p>
        </div>
      </div>
    </section>
  )
}
