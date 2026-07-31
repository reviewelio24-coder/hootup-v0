# HOOT UP — B안 (React + Next.js)

> 온라인 강의 플랫폼 **HOOT UP**의 웹 구현 프로젝트입니다.
> 구독제와 개별구매를 함께 제공하는 하이브리드 모델을 다룬 가상 서비스이며, 포트폴리오 목적으로 제작합니다.

**배포** — https://hootup-v0.vercel.app
**최종 갱신** — 2026-07-31 (`007977a` 기준)

---

## 0. 현재 상태

| 지표 | 수치 |
|---|---|
| 커밋 | 59건 (07-29 4 / 07-30 35 / 07-31 20) |
| 라우트 (`page.tsx`) | 73개 |
| ├ 카테고리 | 72개 |
| └ 할인 전용 | 22개 (`earlybird` 11 + `event` 11) |
| 컴포넌트 | 25개 (listing 11개 포함) |
| 데이터 lib | 13개 (카테고리 11 + 공통 2) |
| 강의 데이터 | 219건 (컬렉션 중복 포함) |
| TS/TSX | 약 10,030줄 |
| `globals.css` | 2,352줄 |

**검수 상태** — `tsc` 통과 / `eslint` error 2 · warning 81 (§9)

---

## 1. 트랙 구분

HOOT UP은 **AI 파이프라인 프로젝트**이며, 두 갈래로 진행합니다. 본 문서는 **B안**의 기준 문서입니다.

| | A안 | **B안 (본 문서)** |
|---|---|---|
| 스택 | 정적 HTML / CSS | **React + Next.js** |
| AI 도구 | Claude Code | **v0 → Cursor** |
| 배포 | Git Pages | **Vercel** |
| 학습 범위와의 관계 | **학습한 범위 안** | **학습하지 않은 범위** |
| 목적 | 학습 내용 심화 + AI 생성물 검수 역량 검증 | **프로젝트 진행과 학습의 병행** |

두 안은 **동일한 Figma 디자인**을 공유합니다. 디자인 토큰 값도 동일하게 유지합니다. 달라지는 것은 스택 · 도구 · 배포 경로입니다.

---

## 2. B안의 전제 — 검수는 사람이 아니라 도구가 합니다

A안은 아는 영역이므로 AI 출력을 육안으로 검수할 수 있습니다.
**B안은 그 전제가 성립하지 않습니다.** 모르는 영역에서는 v0나 Cursor의 출력이 틀려도 알아볼 수 없습니다.

따라서 B안의 검수 주체는 **타입 체커와 린터**입니다. 사람은 도구가 낸 지적을 읽고 이해하는 역할을 맡습니다.

이 전제는 두 차례 검증됐습니다.

1. 육안으로 "잘 작성됨"으로 판단한 카운트다운 컴포넌트를, ESLint가 `react-hooks/set-state-in-effect` 에러로 잡았습니다.
2. 라우트가 1개일 때는 무해했던 `brand-logo.tsx` 의 `<a href="/">` 가, 라우트 73개가 된 지금은 **로고 클릭 시마다 전체 새로고침을 유발하는 실제 버그**가 됐습니다. 눈으로는 동작해 보입니다.

> **원칙: 검수 도구를 끄지 않습니다.** 그리고 **도구를 붙여두지 않은 상태로 작업량을 늘리지 않습니다.**
> 화면이 늘어나면 지적 건수도 비례해 늘어납니다. 27건일 때 붙였으면 27건, 81건이 된 뒤에 붙이면 81건입니다.

---

## 3. 파이프라인

```
Figma          디자인 정본. 모든 시각적 판단의 최종 근거.
  ↓
v0             화면 단위 초안 생성.
  ↓
Cursor         정리 · 통합 · 학습. 라우팅 배선, 데이터 연결, 린트 대응.
  ↓
Vercel         main 브랜치 자동 배포 + 브랜치별 프리뷰.
```

---

## 4. 작업 원칙

07-30~31 작업 과정에서 확립된 규칙입니다.

1. **근거 없는 선행 구현 금지.** Figma 시안이나 데모 MD가 있을 때만 진행합니다. 추측으로 페이지를 만들지 않습니다.
2. **시안 정합이 1순위.** 컬러 · 폰트 크기 · 웨이트 · 간격까지 원본과 대조합니다. 에셋은 추출본을 그대로 씁니다.
3. **데모 데이터는 강의명 매칭이 기준.** 별점 · 수강생 수는 MD의 강의명과 맞춥니다. 강사명은 일치하지 않아도 됩니다. **누락은 허용하지 않습니다.**
4. **파일명 · 라벨은 의미와 일치시킵니다.** (예: 손그림&회화 → `traditional` ✗ / `hand-drawing` ✓)
5. **파일럿 후 전면 확대.** 한 카테고리에서 검증한 뒤 나머지에 일괄 적용합니다.
6. **시안이 없으면 문서와 톤으로 대체합니다.** GNB처럼 시안이 없는 영역은 `hootup_categories.md` 를 근거로 하되 홈의 톤에 맞춥니다.

---

## 5. 스택

| 항목 | 버전 · 선택 |
|---|---|
| 프레임워크 | Next.js 16 (App Router) |
| 런타임 | React 19 |
| 언어 | TypeScript 5.7 |
| 스타일링 | **자체 CSS (BEM + CSS 변수 토큰)** |
| 컴포넌트 | shadcn/ui (설치, 현재 미사용) |
| 폰트 | Raleway (`next/font/google`) + Spoqa Han Sans Neo (self-host `@font-face`) |
| 아이콘 · 이미지 | Figma 추출 (`public/figma/`) |
| 데이터 | 로컬 TypeScript 모듈 |
| 배포 | Vercel |

### 스타일링 입장

v0는 Tailwind 유틸리티로 결과를 냅니다. 본 프로젝트는 이를 수용하지 않고 **BEM 클래스 + `--hoot-*` CSS 변수 토큰**으로 작성합니다. A안과 동일한 CSS 방법론을 유지해, 두 안의 차이가 **스택 차이로만 드러나도록** 하기 위해서입니다.

Tailwind는 shadcn 베이스 레이어가 의존하므로 설치 상태를 유지하되, 유틸리티 클래스는 사용하지 않습니다.

**CSS Modules 이관은 보류합니다.** 다만 `globals.css` 가 2,352줄에 도달했고 카테고리별 스타일이 계속 누적되고 있습니다. 관리 부담이 실제로 체감되는 시점에 재검토합니다. (§12-9)

---

## 6. 폴더 구조

```
hootup-v0/
├── app/
│   ├── layout.tsx                      # 폰트 · 메타데이터 · .hootup 스코프
│   ├── globals.css                     # 토큰 + 전역 스타일 (2,352줄)
│   ├── fonts.css                       # Spoqa @font-face
│   ├── page.tsx                        # 홈
│   └── category/
│       ├── {대분류}/
│       │   ├── page.tsx                # 대분류 전체 (페이지네이션)
│       │   ├── {세부}/page.tsx         # 세부 카테고리
│       │   ├── earlybird/page.tsx      # 얼리버드 전용
│       │   └── event/page.tsx          # 이벤트 전용
│       └── {컬렉션}-classes/           # best · new · signature
│
├── components/
│   ├── hootup/                         # 25개
│   │   ├── site-header.tsx / site-footer.tsx / brand-logo.tsx
│   │   ├── {섹션}-section.tsx          # 홈 섹션
│   │   ├── course-card.tsx
│   │   └── category-{대분류}-listing.tsx   # 11개
│   └── ui/                             # shadcn 원본 — 직접 수정 금지
│
├── lib/
│   ├── hootup-data.ts                  # 홈 데이터 + Course 타입
│   ├── hootup-categories.ts            # GNB · 카테고리 메타
│   └── hootup-category-{대분류}.ts     # 11개
│
├── public/
│   ├── figma/                          # Figma 추출 에셋
│   └── fonts/spoqa/
│
└── next.config.mjs
```

### PLP 골격 (반복 패턴)

카테고리 페이지는 세 층으로 고정합니다. 신규 카테고리는 이 골격을 복제합니다.

| 층 | 위치 | 역할 |
|---|---|---|
| 데이터 | `lib/hootup-category-*.ts` | 강의 배열, 세부 카테고리 목록, `get*CoursesByDeal` |
| UI | `components/hootup/category-*-listing.tsx` | 배너 · 칩 · 그리드 · 페이저 |
| 라우트 | `app/category/**/page.tsx` | 얇은 진입점 |

### 타입 확장 패턴

```ts
export type CategoryCourse = Course & {
  subcategory: string
  earlybird?: boolean
  event?: boolean
}
```

공통 `Course` 를 교집합 타입으로 확장합니다. 카테고리별 고유 필드는 여기에 추가합니다.

---

## 7. 디자인 토큰

**Figma 파일이 정본입니다.** 기획 문서와 Figma가 어긋날 경우 항상 Figma를 따릅니다.

토큰은 `app/globals.css` 의 `.hootup` 스코프에 정의합니다. **컴포넌트에 색상값 · 간격값을 직접 기입하지 않습니다.**

### 컬러

```css
--hoot-brand: #1667fa;          /* 일렉트릭 블루 */
--hoot-brand-strong: #0904f6;
--hoot-brand-deep: #0d3d94;
--hoot-lemon: #f8fc49;          /* 레몬 옐로우 */
--hoot-mint: #49fca6;           /* 프레시 민트 */
--hoot-lilac: #e2e1ff;

--hoot-ink / ink-2 / body / muted / line / surface / surface-soft
--hoot-danger / sale / star
```

### 간격 · 레이아웃

```css
--hoot-1 … --hoot-20        /* 4px ~ 85px */
--hoot-container: 1160px;
--hoot-gutter: 20px;
--hoot-radius-xs / sm / (기본 20px) / pill
```

### 타이포그래피

| 용도 | 폰트 | 로딩 |
|---|---|---|
| 영문 · 숫자 · 로고 | Raleway | `next/font/google` (`--font-display`) |
| 국문 본문 | Spoqa Han Sans Neo | `app/fonts.css` self-host (400/500/700) |

---

## 8. 할인 필터 동작 규약

| 상태 | 동작 |
|---|---|
| 세부 카테고리 활성 | 얼리버드 · 이벤트 버튼 **미표시** |
| 전체 (기본) | 버튼 표시, **비활성**, 전체 강의 |
| 얼리버드 클릭 | `/{대분류}/earlybird` 이동, 버튼 활성, MD 얼리버드만 |
| 이벤트 클릭 | `/{대분류}/event` 이동, 버튼 활성, MD 이벤트만 |
| 활성 버튼 재클릭 | 대분류 전체로 복귀 |

- 비활성 칩 폰트 컬러: `--hoot-body` (link / `:visited` 포함)
- 플래그 근거: `hootup_earlybird_classes.md` / `hootup_event_classes.md`
- 토글 상태를 클라이언트 state가 아닌 **URL로 승격**했습니다. 공유 · 새로고침 · 뒤로가기가 자연스럽게 동작합니다.

---

## 9. 검수 체계

### 상시 실행

```bash
npx tsc --noEmit     # 타입 검사
npx eslint .         # 관례 · 안티패턴 검사
```

### 도입 (미적용 — 최우선)

```bash
npm i -D eslint eslint-config-next
```

`eslint.config.mjs`

```js
import coreWebVitals from 'eslint-config-next/core-web-vitals'

const config = [
  { ignores: ['node_modules/**', '.next/**', 'next-env.d.ts'] },
  ...coreWebVitals,
]

export default config
```

### 현재 검출 결과

```
tsc      통과
eslint   error 2 / warning 81
```

| 규칙 | 건수 | 내용 |
|---|---|---|
| `@next/next/no-img-element` | 81 (warning) | `<img>` 사용. `next/image` 권장 |
| `@next/next/no-html-link-for-pages` | 1 (**error**) | `brand-logo.tsx:3` — `<a href="/">` → 전체 새로고침 |
| `react-hooks/set-state-in-effect` | 1 (**error**) | `promo-banner-section.tsx:24` — 이펙트 본문 내 setState |

### 규칙

1. **`next.config.mjs` 에 오류 억제 설정을 두지 않습니다.** `typescript.ignoreBuildErrors`, `eslint.ignoreDuringBuilds` 모두 금지입니다. *(적용 완료)*
2. **error는 0을 유지합니다.** 커밋 전 조건입니다.
3. **warning은 목록으로 관리합니다.** 즉시 해소하지 않아도 되지만 개수와 사유를 §12에 기록합니다.
4. **린트 지적을 이해하지 않은 채 규칙을 끄지 않습니다.** `eslint-disable` 사용 시 사유를 주석으로 남깁니다.
5. **검출과 수정을 분리해 커밋합니다.**

---

## 10. 학습 로드맵

각 항목은 **"설명할 수 있으면 통과"** 를 기준으로 합니다. 동작시키는 것과 이해하는 것은 다릅니다.

### 1단계 · 라우팅 — 대부분 진행됨

라우트 1개 → **73개**, `next/link` 0개 → **11개 파일**.

- [x] `app/` 폴더 구조가 URL이 되는 규칙
- [x] 중첩 경로 · 세그먼트 구성 (`/category/{대분류}/{세부}`)
- [x] 상태를 URL로 승격 (할인 필터)
- [ ] `next/link` 와 `<a>` 의 차이 — **`brand-logo.tsx` 에러가 이 항목의 미완 증거입니다**
- [ ] 남은 `href="#"` 13개 정리
- [ ] 동적 라우트 `[slug]` — 현재 72개가 정적 파일로 복제되어 있습니다. 하나의 `[category]/[sub]` 로 접을 수 있는지 검토

**체크포인트** — 정적 라우트 72개와 동적 라우트 1개의 트레이드오프를 설명합니다.

### 2단계 · 서버 / 클라이언트 컴포넌트 — 사용 중, 이해 확인 필요

`'use client'` 2개 → **16개 파일**.

- [ ] 16개 각각에 `'use client'` 가 **왜** 필요한지 설명
- [ ] 나머지 파일에는 **왜 없어도 되는지** 설명
- [ ] 경계를 아래로 내려 클라이언트 번들을 줄이는 방법 — listing 11개가 전부 클라이언트라면 검토 대상
- [ ] 서버 컴포넌트에서 할 수 없는 것 (훅, 이벤트 핸들러, 브라우저 API)

**체크포인트** — 새 컴포넌트에서 `'use client'` 필요 여부를 스스로 판단합니다.

### 3단계 · 상태와 상호작용 — 진행 중

훅 사용 1개 → **14개 파일**.

- [x] 페이지네이션 · 칩 필터 상태
- [ ] `react-hooks/set-state-in-effect` 에러 해소
- [ ] 이펙트가 필요한 경우와 필요 없는 경우의 구분
- [ ] 찜하기 토글 (`course-card.tsx` 는 아직 `e.preventDefault()` 만)

**체크포인트** — "이건 상태인가 파생값인가"를 판단합니다.

### 4단계 · 데이터 모델 — 부분 진행

강의 219건, `CategoryCourse` 교집합 타입 도입.

- [x] 교집합 타입 (`Course & { … }`), 옵셔널 필드
- [ ] **구독 축 부재** — `Course` 에 `includedInPlan` 이 없습니다. 하이브리드 모델의 절반이 데이터에 없습니다. 요금제 · 마이페이지에서 반드시 막힙니다.
- [ ] 코스 마스터 데이터 일원화 — 컬렉션 3종이 강의를 복제 중 (ID prefix만 다름)
- [ ] 제목 문자열 매칭 → ID 매핑 테이블로 교체

**체크포인트** — 타입을 바꿨을 때 `tsc` 가 영향받는 지점을 전부 짚어줍니다.

### 5단계 · 이미지 최적화 — 미착수

`no-img-element` 27건 → **81건**.

- [ ] `next.config.mjs` 의 `images.unoptimized` 제거
- [ ] `course-card.tsx` 부터 이관 (전 카테고리 그리드가 참조)
- [ ] `width` / `height` 필수 이유 — 레이아웃 시프트
- [ ] `fill`, `sizes`, `priority` 의 용도

**체크포인트** — warning 81건이 0이 됩니다.

### 6단계 · 재검토

- [ ] CSS Modules 이관 여부 (`globals.css` 2,352줄)
- [ ] shadcn/ui 실사용 또는 제거 판단

---

## 11. 라우트 맵

### 대분류 (8)

| 대분류 | 경로 | 페이지 | 할인 |
|---|---|---|---|
| 개발 & IT | `/category/dev-it` | 2 | ✓ |
| 커리어 & 머니 | `/category/career-money` | 2 | ✓ |
| 디자인 & 크리에이티브 | `/category/design-creative` | 2 | ✓ |
| 사진 & 영상 | `/category/photo-video` | 1 | ✓ |
| 드로잉 & 일러스트 | `/category/drawing-illust` | 1 | ✓ |
| 운동 & 마음챙김 | `/category/fitness-mindfulness` | 1 | ✓ |
| 공예 & 핸드메이드 | `/category/craft-handmade` | 1 | ✓ |
| 요리 & 베이킹 | `/category/cooking-baking` | 1 | ✓ |

각 대분류는 세부 카테고리 전용 경로를 추가로 가집니다.

### 컬렉션 (3)

| 이름 | 경로 |
|---|---|
| 베스트 클래스 | `/category/best-classes` |
| 새로운 클래스 | `/category/new-classes` |
| 시그니쳐 클래스 | `/category/signature-classes` |

---

## 12. 미해결 항목

| # | 항목 | 내용 | 우선도 |
|---|---|---|---|
| 1 | **ESLint 미도입** | 레포에 설정 파일 없음. 검수 체계의 절반이 빠진 상태 | **최상** |
| 2 | 린트 에러 2건 | `brand-logo.tsx` `<a href="/">` · `promo-banner-section.tsx` setState-in-effect | **높음** |
| 3 | 데이터 모델 | `Course` 에 구독 축(`includedInPlan`) 부재 | 높음 |
| 4 | 데이터 중복 | 컬렉션 3종이 강의를 복제. 단일 소스 + ID 참조로 전환 필요 | 높음 |
| 5 | 문자열 매칭 | 데모 MD ↔ lib 강의명 부분 일치로 플래그 매칭. 표기 차이로 누락 발생 이력 | 높음 |
| 6 | 이미지 | `no-img-element` 81건, `images.unoptimized: true` | 중간 |
| 7 | 1페이지 페이저 | `TOTAL_PAGES === 1` 인데 1·2 페이지 UI가 남는 경우 | 중간 |
| 8 | 컬렉션 칩 ↔ 할인 페이지 | 컬렉션 대분류 칩은 라우트가 없어 `lockedDeal` 과 클라이언트 `sub` 상태가 어긋날 수 있음 | 중간 |
| 9 | `globals.css` 규모 | 2,352줄. CSS Modules 이관 재검토 시점 판단 | 중간 |
| 10 | a11y | 할인 칩이 `Link` + `aria-pressed` 조합. `button` + `router.push` 또는 `aria-current` 검토 | 중간 |
| 11 | 반응형 | 홈 · PLP 모바일 전수 QA 미실시 | 중간 |
| 12 | 다크모드 | `prefers-color-scheme: dark` 블록 잔존, `<html>` 에 `light` 클래스 없음 | 낮음 |
| 13 | `package.json` | `name` 이 v0 기본값 `"my-project"` | 낮음 |
| 14 | shadcn | `Button` 설치, 사용처 0 | 낮음 |

---

## 13. 커밋 규칙

> **커밋 히스토리는 산출물의 일부입니다.**
> B안이 증명하려는 것은 "모르는 영역에서 AI 출력을 도구로 검수하며 학습해 나가는 과정"이며, 그 근거는 히스토리에 남습니다.

### 현행 방식

경로 기반 요약을 씁니다. 신규 페이지 생성에는 이 방식이 잘 맞고, 추적성도 좋습니다.

```
/category/cooking-baking/baking 생성
세부 카테고리 페이지_얼리버드할인_이벤트할인_버튼 삭제
```

### 보완

생성 외 작업이 늘어나면서 "무엇을 왜"가 드러나지 않는 커밋이 생기고 있습니다. **생성 외 작업에는 접두어를 붙입니다.**

| 접두어 | 용도 |
|---|---|
| (없음) | 신규 페이지 · 컴포넌트 생성 — 현행 유지 |
| `fix:` | 버그 · 린트 에러 수정 |
| `refactor:` | 구조 정리, 공통화, 중복 제거 |
| `style:` | 시안 대조 반영, 시각 조정 |
| `data:` | 더미 데이터 · 매칭 수정 |
| `chore:` | 설정, 의존성, 배포 |

### 규칙

1. **한 커밋은 한 화면 또는 한 관심사를 담습니다.**
   현재 세부 카테고리마다 1커밋이라 추적은 쉽지만, 리뷰 · 리버트 단위로는 대분류 묶음이 편할 수 있습니다. 할인 기능(`007977a`, 46 files)처럼 **기능 단위 묶음**은 잘 맞습니다.
2. **검출과 수정을 분리합니다.** 도구를 붙여 문제를 찾은 커밋과 고친 커밋을 나눕니다.
3. **수정 커밋에는 사유를 남깁니다.** "수정", "작업", "업데이트" 단독 사용은 피합니다.
4. **v0 원본과 정리 작업은 별도 커밋으로 남깁니다.** 두 커밋의 diff가 "AI 출력에 무엇을 더했는가"에 대한 답이 됩니다.

### 예시

```
chore: ESLint 도입 및 초기 검출 기록

- eslint-config-next(core-web-vitals) 적용
- 초기 검출: error 2건, warning 81건
```

```
fix(brand-logo): 홈 링크를 next/link로 교체

- no-html-link-for-pages 에러 해소
- 로고 클릭 시 전체 새로고침이 발생하던 문제 수정
```

---

## 14. 다음 액션

**즉시**

- [ ] ESLint 도입 (§9) — 이후 작업의 전제
- [ ] `brand-logo.tsx` 홈 링크를 `next/link` 로 교체
- [ ] `promo-banner-section.tsx` setState-in-effect 해소
- [ ] `package.json` name 변경

**데이터 정리**

- [ ] 코스 마스터 데이터 일원화 — 컬렉션이 ID로 참조
- [ ] 할인 · 데모 매핑을 ID 테이블로 (문자열 매칭 제거)
- [ ] `Course` 에 구독 축 추가

**UI · UX**

- [ ] `TOTAL_PAGES === 1` 페이저 정리
- [ ] 컬렉션 할인 페이지 ↔ 대분류 칩 UX 정리
- [ ] 할인 칩 a11y (`button` / `aria-current`)
- [ ] 모바일 · 빈 상태 · 정렬 옵션 스모크 테스트

**이후 화면**

- [ ] 강의 상세 (동적 라우트 학습 지점)
- [ ] 요금제 · 구매 플로우 (구독 축 필요)
- [ ] 마이페이지 · 수강 목록
