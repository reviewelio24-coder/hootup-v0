'use client'

import { useState } from 'react'

export function CourseEnrollWish() {
  const [pressed, setPressed] = useState(false)

  return (
    <button
      className="enroll-card__wish"
      type="button"
      aria-pressed={pressed}
      aria-label="찜하기"
      onClick={() => setPressed((v) => !v)}
    >
      <span className="icon icon--heart"></span>
    </button>
  )
}
