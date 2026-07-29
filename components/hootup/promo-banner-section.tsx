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

export function PromoBannerSection() {
  const [target] = useState(() => Date.now() + 7 * 86_400_000)
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(getTimeLeft(target))
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units: Array<[string, number]> = [
    ['DAYS', time?.days ?? 0],
    ['HOURS', time?.hours ?? 0],
    ['MIN', time?.minutes ?? 0],
    ['SEC', time?.seconds ?? 0],
  ]

  return (
    <section className="promo" aria-labelledby="promo-heading">
      <div className="hoot-container promo__inner">
        <div className="promo__content">
          <p className="promo__eyebrow">HOOT UP FESTA</p>
          <h2 className="promo__title" id="promo-heading">
            레벨업 위크 마감까지
            <br />
            딱 이만큼 남았어요
          </h2>
          <p className="promo__desc">
            1년 중 가장 큰 할인 주간이 끝나기 전에, 담아 두었던 클래스를 지금 시작하세요.
          </p>
          <a className="promo__cta" href="#">
            할인 클래스 담으러 가기
          </a>
        </div>

        <div
          className="countdown"
          role="timer"
          aria-live="off"
          aria-label="레벨업 위크 종료까지 남은 시간"
        >
          {units.map(([label, value], i) => (
            <span key={label} style={{ display: 'contents' }}>
              <span className="countdown__box">
                <span className="countdown__num">{pad(value)}</span>
                <span className="countdown__label">{label}</span>
              </span>
              {i < units.length - 1 && (
                <span className="countdown__colon" aria-hidden="true">
                  :
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
