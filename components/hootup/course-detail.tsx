import '@/app/course-detail.css'
import { CourseDetailNav } from '@/components/hootup/course-detail-nav'
import { CourseEnrollWish } from '@/components/hootup/course-enroll-wish'

export function CourseDetail() {
  return (
<main id="main" className="course-detail">

  <section className="course-hero" aria-labelledby="course-hero-title">
    <div className="course-hero__inner">
      <div className="course-hero__intro">
        <p className="course-hero__brand">
          <img className="course-hero__logo" src="/figma/img/logo-header.png" alt="HOOT UP" />
          <span className="course-hero__brand-label">| ONLINE CLASS</span>
        </p>
        <div className="course-hero__titles">
          <p className="course-hero__eyebrow">제로부터 완성하는</p>
          <h1 className="course-hero__title" id="course-hero-title">
            <span className="course-hero__title-line">반응형 웹</span>
            <span className="course-hero__title-line course-hero__title-line--accent">퍼블리싱 마스터</span>
          </h1>
        </div>
        <ul className="course-hero__tags">
          <li><span className="course-hero__tag">HTML5</span></li>
          <li><span className="course-hero__tag">CSS3</span></li>
          <li><span className="course-hero__tag">FLEX &amp; GRID</span></li>
          <li><span className="course-hero__tag">반응형</span></li>
        </ul>
        <a className="course-hero__cta" href="#enroll">지금 배우기 시작<span className="icon icon--chevron-right" aria-hidden="true"></span></a>
      </div>
      <img className="course-hero__illust" src="/figma/course-detail/hero-illust.png"
           alt="반응형 웹 화면과 코드를 보며 대화하는 일러스트" loading="lazy" width="400" height="400" />
    </div>
  </section>

  <div className="course-body">
    <div className="course-body__main">

      <CourseDetailNav />

      <section className="course-section" id="about" aria-labelledby="about-title">
        <div className="section-band">
          <h2 className="section-band__title" id="about-title">클래스 소개</h2>
          <p className="section-band__lead">HTML 0줄에서 포트폴리오까지, 30일</p>
          <p className="section-band__desc">제로부터 완성하는 반응형 웹 퍼블리싱 마스터. 코딩이 처음이어도 괜찮아요. 손으로 따라 치다 보면, 어느새 당신의 첫 반응형 웹사이트가 완성됩니다.</p>
        </div>

      <div className="course-block worry">
        <p className="worry__label">WORRY</p>
        <h3 className="worry__title">혹시, 이런 고민 있지 않으세요?</h3>
        <figure className="worry__illust" aria-hidden="true">
          <img className="worry__illust-color worry__illust-color2" src="/figma/course-detail/worry-color2.svg" alt="" />
          <img className="worry__illust-color worry__illust-color1" src="/figma/course-detail/worry-color1.svg" alt="" />
          <img className="worry__illust-lines" src="/figma/course-detail/worry-outlines.svg" alt="" />
        </figure>
        <ul className="worry__bubbles">
          <li className="worry__bubble">강의를 다 들었는데 막상 <b>빈 화면</b>을 보면 어디부터 손대야 할지 모르겠어요.</li>
          <li className="worry__bubble"><b>Flex, Grid</b>만 나오면 매번 검색해요. 내 걸로 만든 적이 없어요.</li>
          <li className="worry__bubble">PC에선 멀쩡한데 <b>모바일 화면</b>에서 다 깨져요.</li>
          <li className="worry__bubble">면접 때 보여줄 <b>결과물</b>이 없어요.</li>
        </ul>
        <p className="worry__lead">혼자 독학하다 같은 자리에서 멈춘 사람이 <b>정말 많아요.</b></p>
        <p className="worry__point">문제는 머리가 아니라 <em>‘손이 익히는 과정’</em>이 빠졌던 것 뿐입니다.</p>
      </div>

      <div className="course-banner" style={{backgroundImage: "url('/figma/course-detail/banner-1.png')"}}>
        <div className="course-banner__inner">
          <p className="course-banner__title">그래서, 손으로 끝까지 함께 갑니다</p>
          <span className="course-banner__rule" aria-hidden="true"></span>
          <div className="course-banner__desc">
            <p>이 클래스는 외워서 넘어가지 않아요.</p>
            <p>모든 강의를 <b>라이브 코딩</b>으로, 멘토가 치는 코드를 똑같이 따라 치며 진행합니다.</p>
            <p>태그 하나를 처음 써보는 순간부터 실제 쇼핑몰 메인 페이지를 퍼블리싱하는 순간까지,</p>
            <p>52강 전부가 ‘보는 강의’가 아니라 <b>‘만드는 강의’</b>예요.</p>
          </div>
        </div>
      </div>
      <div className="course-block">
        <h3 className="course-block__heading course-block__heading--center">이 클래스가 보장하는 3가지</h3>
        <ul className="benefit">
          <li className="benefit__item">
            <div className="benefit__media"><img className="benefit__image" src="/figma/course-detail/benefit-1.png" alt="라이브 코딩으로 강의를 진행하는 화면" loading="lazy" /></div>
            <div className="benefit__desc">
              <p className="benefit__title">“전 강의 라이브 코딩”</p>
              <p className="benefit__text">결과 화면만 보여주지 않아요. 코드를 한 줄씩 같이 치며 “왜 이렇게 쓰는지”를 이해합니다.</p>
            </div>
          </li>
          <li className="benefit__item benefit__item--reverse">
            <div className="benefit__media"><img className="benefit__image" src="/figma/course-detail/benefit-2.png" alt="노트북으로 실습 예제를 따라 만드는 모습" loading="lazy" /></div>
            <div className="benefit__desc">
              <p className="benefit__title">“52강 전부 실습형”</p>
              <p className="benefit__text">미니 프로젝트, 마지막엔 실전 프로젝트. 손이 먼저 기억하게 만듭니다.</p>
            </div>
          </li>
          <li className="benefit__item">
            <div className="benefit__media"><img className="benefit__image" src="/figma/course-detail/benefit-3.png" alt="완성된 반응형 포트폴리오 화면" loading="lazy" /></div>
            <div className="benefit__desc">
              <p className="benefit__title">“포트폴리오 결과물 보장”</p>
              <p className="benefit__text">완강하면 면접에 바로 올릴 반응형 쇼핑몰 메인 1종이 손에 남아요.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="course-block">
        <h3 className="course-block__heading course-block__heading--underline">이런 분께 추천해요</h3>
        <ul className="recommend">
          <li className="recommend__card">
            <span className="recommend__icon" aria-hidden="true"><span className="icon icon--check"></span></span>
            <p className="recommend__text">비전공인데 웹 퍼블리셔로 취업·이직을 준비하는 분</p>
          </li>
          <li className="recommend__card">
            <span className="recommend__icon" aria-hidden="true"><span className="icon icon--check"></span></span>
            <p className="recommend__text">독학하다 매번 레이아웃(Flex·Grid)에서 막혔던 분</p>
          </li>
          <li className="recommend__card">
            <span className="recommend__icon" aria-hidden="true"><span className="icon icon--check"></span></span>
            <p className="recommend__text">강의만 보고 끝나는 게 아니라 결과물(포트폴리오)이 필요한 분</p>
          </li>
          <li className="recommend__card">
            <span className="recommend__icon" aria-hidden="true"><span className="icon icon--check"></span></span>
            <p className="recommend__text">디자이너·기획자인데 내 화면을 직접 코드로 구현해보고 싶은 분</p>
          </li>
        </ul>
      </div>

      <div className="course-block beforeafter">
        <p className="beforeafter__title">Before &amp; After</p>
        <img className="beforeafter__illust" src="/figma/course-detail/beforeafter-illust.png" alt="수강 전과 후의 변화를 표현한 일러스트" loading="lazy" width="180" height="180" />
        <div className="beforeafter__cols">
          <div className="beforeafter__col beforeafter__col--before">
            <p className="beforeafter__col-head">수강 전</p>
            <ul className="beforeafter__list">
              <li><span className="icon icon--x-mark" aria-hidden="true"></span>시안을 봐도 어디부터 손댈지 막막</li>
              <li><span className="icon icon--x-mark" aria-hidden="true"></span>Flex·Grid만 나오면 매번 검색</li>
              <li><span className="icon icon--x-mark" aria-hidden="true"></span>모바일에서 와르르 무너지는 화면</li>
              <li><span className="icon icon--x-mark" aria-hidden="true"></span>보여줄 결과물이 하나도 없음</li>
            </ul>
          </div>
          <span className="beforeafter__arrow" aria-hidden="true"><span className="icon icon--arrow-ba"></span></span>
          <div className="beforeafter__col beforeafter__col--after">
            <p className="beforeafter__col-head">수강 후</p>
            <ul className="beforeafter__list">
              <li><span className="icon icon--check-ba" aria-hidden="true"></span>구조부터 스스로 설계해 마크업</li>
              <li><span className="icon icon--check-ba" aria-hidden="true"></span>어떤 레이아웃도 자유자재</li>
              <li><span className="icon icon--check-ba" aria-hidden="true"></span>PC·태블릿·모바일 완벽 대응</li>
              <li><span className="icon icon--check-ba" aria-hidden="true"></span>포트폴리오 웹사이트 1종 완성</li>
            </ul>
          </div>
        </div>
        <p className="beforeafter__point">머리가 아니라 <b>손에 익히는 과정</b>으로 막막함이 <em>자신감</em>으로 바뀝니다.</p>
      </div>
      <div className="course-block">
        <h3 className="course-block__heading course-block__heading--underline">이 클래스에서 배우는 것</h3>
        <ul className="learn">
          <li className="learn__card">
            <span className="learn__no">01</span>
            <p className="learn__text">시맨틱 HTML로 구조를 설계하는 법</p>
          </li>
          <li className="learn__card">
            <span className="learn__no">02</span>
            <p className="learn__text">CSS 박스모델과 선택자, 우선순위의 원리</p>
          </li>
          <li className="learn__card">
            <span className="learn__no">03</span>
            <p className="learn__text">Flex와 Grid로 어떤 레이아웃이든 자유롭게 잡기</p>
          </li>
          <li className="learn__card">
            <span className="learn__no">04</span>
            <p className="learn__text">미디어쿼리로 PC·태블릿·모바일에 모두 대응하는 반응형 웹</p>
          </li>
          <li className="learn__card">
            <span className="learn__no">05</span>
            <p className="learn__text">transition·transform으로 살아 있는 인터랙션 만들기</p>
          </li>
          <li className="learn__card learn__card--accent">
            <span className="learn__no">06</span>
            <p className="learn__text">실제 쇼핑몰 메인 페이지 1종을 처음부터 끝까지 퍼블리싱</p>
          </li>
        </ul>
      </div>
      <div className="course-block practice-block">
        <h3 className="practice-block__heading">
          <span className="practice-block__title">핵심 실습 7가지</span>
          <span className="practice-block__sub">+ 실전 프로젝트</span>
        </h3>
        <ul className="practice">
          <li className="practice__item">
            <div className="practice__body">
              <p className="practice__title"><span className="practice__no">1</span><span className="practice__name">회원가입 폼 마크업 (HTML)</span></p>
              <p className="practice__text">input·label·select·체크박스를 직접 배치해 실제 가입 폼을 만듭니다. 폼 구조와 접근성 마크업이 한 번에 손에 익어요. (실습 결과물: 회원가입 폼 1종)</p>
            </div>
            <div className="practice__media"><img className="practice__image" src="/figma/course-detail/practice-1.png" alt="회원가입 폼을 마크업하는 코드 화면" loading="lazy" /></div>
          </li>
          <li className="practice__item practice__item--reverse">
            <div className="practice__media"><img className="practice__image" src="/figma/course-detail/practice-2.png" alt="카드 컴포넌트를 스타일링하는 화면" loading="lazy" /></div>
            <div className="practice__body">
              <p className="practice__title"><span className="practice__no">2</span><span className="practice__name">카드 컴포넌트 스타일링 (CSS)</span></p>
              <p className="practice__text">박스모델·그림자·둥근 모서리·호버를 적용해 강의 카드 한 장을 완성합니다. 어떤 사이트에나 쓰이는 핵심 UI를 직접 만들어봐요.</p>
            </div>
          </li>
          <li className="practice__item">
            <div className="practice__body">
              <p className="practice__title"><span className="practice__no">3</span><span className="practice__name">반응형 갤러리 레이아웃 (Flex·Grid)</span></p>
              <p className="practice__text">Flex와 Grid로 이미지 갤러리를 배치하고, 화면 크기에 따라 열 수가 바뀌게 만듭니다. 레이아웃의 두 핵심 무기를 실전에서 익혀요.</p>
            </div>
            <div className="practice__media"><img className="practice__image" src="/figma/course-detail/practice-3.png" alt="반응형 갤러리 그리드 레이아웃" loading="lazy" /></div>
          </li>
          <li className="practice__item practice__item--reverse">
            <div className="practice__media"><img className="practice__image" src="/figma/course-detail/practice-4.png" alt="여러 화면 크기로 반응형 전환을 확인하는 모습" loading="lazy" /></div>
            <div className="practice__body">
              <p className="practice__title"><span className="practice__no">4</span><span className="practice__name">메인 페이지 반응형 전환 (미디어쿼리)</span></p>
              <p className="practice__text">PC용으로 만든 화면을 미디어쿼리로 태블릿·모바일까지 대응시킵니다. ‘깨지지 않는 화면’을 만드는 감각을 잡아요.</p>
            </div>
          </li>
          <li className="practice__item">
            <div className="practice__body">
              <p className="practice__title"><span className="practice__no">5</span><span className="practice__name">쇼핑몰 메인 — 헤더 &amp; 내비게이션 (프로젝트)</span></p>
              <p className="practice__text">로고·메뉴·검색·아이콘이 담긴 실제 쇼핑몰 헤더를 퍼블리싱합니다. 모바일에서는 햄버거 메뉴로 전환되는 구조까지 구현해요.</p>
            </div>
            <div className="practice__media"><img className="practice__image" src="/figma/course-detail/practice-5.png" alt="쇼핑몰 헤더와 내비게이션 퍼블리싱 화면" loading="lazy" /></div>
          </li>
          <li className="practice__item practice__item--reverse">
            <div className="practice__media"><img className="practice__image" src="/figma/course-detail/practice-6.png" alt="상품 카드 그리드를 배치한 쇼핑몰 화면" loading="lazy" /></div>
            <div className="practice__body">
              <p className="practice__title"><span className="practice__no">6</span><span className="practice__name">쇼핑몰 메인 — 상품 카드 그리드 (프로젝트)</span></p>
              <p className="practice__text">상품 카드를 반응형 그리드로 배치하고 할인율·평점 같은 요소를 채웁니다. 카드(1·2번)와 레이아웃(3번) 실습이 하나로 합쳐지는 단계예요.</p>
            </div>
          </li>
          <li className="practice__item">
            <div className="practice__body">
              <p className="practice__title"><span className="practice__no">7</span><span className="practice__name">쇼핑몰 메인 — 푸터 &amp; 전체 마무리 (프로젝트)</span></p>
              <p className="practice__text">링크 컬럼·사업자 정보·SNS가 담긴 푸터를 완성하고 전체 페이지를 점검합니다. 한 페이지가 처음부터 끝까지 연결되는 경험을 해요.</p>
            </div>
            <div className="practice__media"><img className="practice__image" src="/figma/course-detail/practice-7.png" alt="쇼핑몰 푸터와 전체 페이지 마무리 화면" loading="lazy" /></div>
          </li>
          <li className="practice__item practice__item--reverse practice__item--accent">
            <div className="practice__media"><img className="practice__image" src="/figma/course-detail/practice-8.png" alt="포트폴리오 코드 리뷰를 진행하는 화면" loading="lazy" /></div>
            <div className="practice__body">
              <p className="practice__title"><span className="practice__no practice__no--plus">＋</span><span className="practice__name">＋ 포트폴리오 다듬기 &amp; 멘토 코드 리뷰</span></p>
              <p className="practice__text">완성한 쇼핑몰 메인을 포트폴리오용으로 정리하고, 멘토에게 코드 리뷰를 받습니다. 면접에서 바로 보여줄 결과물 1종이 남아요.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="course-block">
        <h3 className="course-block__heading course-block__heading--underline">다양한 학습 자료 제공</h3>
        <ul className="materials">
          <li className="materials__item"><span className="icon icon--folder" aria-hidden="true"></span>모든 강의 실습 예제 소스 코드(챕터별 zip)</li>
          <li className="materials__item"><span className="icon icon--folder" aria-hidden="true"></span>실전 프로젝트 완성본 소스 (쇼핑몰 메인)</li>
          <li className="materials__item"><span className="icon icon--folder" aria-hidden="true"></span>강의에서 쓰는 디자인 시안 파일</li>
          <li className="materials__item"><span className="icon icon--folder" aria-hidden="true"></span>자주 쓰는 HTML/CSS 스니펫 모음</li>
          <li className="materials__item"><span className="icon icon--folder" aria-hidden="true"></span>학습 흐름을 정리한 PDF 요약 노트</li>
        </ul>
      </div>

      <div className="course-banner" style={{backgroundImage: "url('/figma/course-detail/banner-2.png')"}}>
        <div className="course-banner__inner">
          <p className="course-banner__title">완강하면, 당신은</p>
          <span className="course-banner__rule" aria-hidden="true"></span>
          <div className="course-banner__desc">
            <p>시안을 보고 <b>스스로 구조를 잡아</b> 마크업할 수 있어요.</p>
            <p><b>반응형 레이아웃</b>을 막힘없이 구현할 수 있어요.</p>
            <p>포트폴리오에 올릴 <b>반응형 웹페이지</b> 1종과 졸업모(수료증)를 갖게 돼요.</p>
          </div>
        </div>
      </div>
      </section>

      <section className="course-section" id="curriculum" aria-labelledby="curriculum-title">
        <div className="section-band">
          <h2 className="section-band__title" id="curriculum-title">커리큘럼</h2>
          <p className="section-band__lead">총 7챕터 · 52강 · 약 11시간</p>
          <p className="section-band__desc">노베이스도 끝까지 따라올 수 있도록 짧은 호흡으로 설계했어요. 챕터 1은 무료로 미리 볼 수 있습니다.</p>
        </div>
        <div className="curriculum">
      <details className="curriculum__chapter" open>
        <summary className="curriculum__summary">
          <span className="curriculum__chapter-head">
            <span className="curriculum__chapter-title">Chapter 01. 오리엔테이션 <span className="curriculum__free">무료 공개</span></span>
            <span className="curriculum__chapter-desc">개발 환경을 세팅하고, 웹 퍼블리셔가 무슨 일을 하는지 그림을 그립니다.</span>
          </span>
          <span className="curriculum__chapter-meta">4강 · 39분</span>
          <span className="curriculum__chevron icon icon--chevron-right" aria-hidden="true"></span>
        </summary>
        <ul className="curriculum__lessons">
          <li className="curriculum__lesson curriculum__lesson--free">
            <span className="curriculum__lesson-no">01</span>
            <span className="curriculum__lesson-title">웹 퍼블리셔라는 직업, 무엇을 하나요</span>
            <span className="curriculum__lesson-free">미리보기</span>
            <span className="curriculum__lesson-time">08:00</span>
          </li>
          <li className="curriculum__lesson curriculum__lesson--free">
            <span className="curriculum__lesson-no">02</span>
            <span className="curriculum__lesson-title">개발 환경 세팅: VS Code &amp; 확장 프로그램</span>
            <span className="curriculum__lesson-free">미리보기</span>
            <span className="curriculum__lesson-time">10:30</span>
          </li>
          <li className="curriculum__lesson curriculum__lesson--free">
            <span className="curriculum__lesson-no">03</span>
            <span className="curriculum__lesson-title">브라우저와 개발자도구(DevTools) 친해지기</span>
            <span className="curriculum__lesson-free">미리보기</span>
            <span className="curriculum__lesson-time">12:00</span>
          </li>
          <li className="curriculum__lesson curriculum__lesson--free">
            <span className="curriculum__lesson-no">04</span>
            <span className="curriculum__lesson-title">이 강의를 200% 활용하는 법 + 실습 자료 안내</span>
            <span className="curriculum__lesson-free">미리보기</span>
            <span className="curriculum__lesson-time">08:30</span>
          </li>
        </ul>
      </details>
      <details className="curriculum__chapter">
        <summary className="curriculum__summary">
          <span className="curriculum__chapter-head">
            <span className="curriculum__chapter-title">Chapter 02. HTML 기초 </span>
            <span className="curriculum__chapter-desc">화면의 ‘뼈대’를 세우는 법. 의미 있는 마크업의 원리를 익힙니다.</span>
          </span>
          <span className="curriculum__chapter-meta">10강 · 약 2시간 9분</span>
          <span className="curriculum__chevron icon icon--chevron-right" aria-hidden="true"></span>
        </summary>
        <ul className="curriculum__lessons">
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">01</span>
            <span className="curriculum__lesson-title">HTML 문서 구조와 태그의 원리</span>
            
            <span className="curriculum__lesson-time">11:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">02</span>
            <span className="curriculum__lesson-title">텍스트 태그: 제목·문단·줄바꿈·강조</span>
            
            <span className="curriculum__lesson-time">10:30</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">03</span>
            <span className="curriculum__lesson-title">링크와 이미지 다루기</span>
            
            <span className="curriculum__lesson-time">12:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">04</span>
            <span className="curriculum__lesson-title">리스트와 표(table) 만들기</span>
            
            <span className="curriculum__lesson-time">13:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">05</span>
            <span className="curriculum__lesson-title">시맨틱 태그로 의미 있는 마크업하기</span>
            
            <span className="curriculum__lesson-time">14:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">06</span>
            <span className="curriculum__lesson-title">폼(form)의 기본: input·label·button</span>
            
            <span className="curriculum__lesson-time">12:30</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">07</span>
            <span className="curriculum__lesson-title">폼 심화: select·radio·checkbox·유효성</span>
            
            <span className="curriculum__lesson-time">15:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">08</span>
            <span className="curriculum__lesson-title">미디어 요소: 오디오·비디오·iframe</span>
            
            <span className="curriculum__lesson-time">11:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">09</span>
            <span className="curriculum__lesson-title">자주 쓰는 마크업 패턴과 접근성 기초</span>
            
            <span className="curriculum__lesson-time">13:30</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">10</span>
            <span className="curriculum__lesson-title">[실습] 회원가입 폼 마크업하기</span>
            
            <span className="curriculum__lesson-time">18:00</span>
          </li>
        </ul>
      </details>
      <details className="curriculum__chapter">
        <summary className="curriculum__summary">
          <span className="curriculum__chapter-head">
            <span className="curriculum__chapter-title">Chapter 03. CSS 기초 </span>
            <span className="curriculum__chapter-desc">‘뼈대’에 옷을 입히는 법. 박스모델과 선택자의 원리를 잡습니다.</span>
          </span>
          <span className="curriculum__chapter-meta">10강 · 약 2시간 7분</span>
          <span className="curriculum__chevron icon icon--chevron-right" aria-hidden="true"></span>
        </summary>
        <ul className="curriculum__lessons">
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">01</span>
            <span className="curriculum__lesson-title">CSS 적용 3가지 방법과 선택자</span>
            
            <span className="curriculum__lesson-time">12:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">02</span>
            <span className="curriculum__lesson-title">색상·단위·타이포그래피</span>
            
            <span className="curriculum__lesson-time">13:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">03</span>
            <span className="curriculum__lesson-title">박스모델: margin·border·padding 완전 이해</span>
            
            <span className="curriculum__lesson-time">15:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">04</span>
            <span className="curriculum__lesson-title">display 속성과 요소의 흐름</span>
            
            <span className="curriculum__lesson-time">11:30</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">05</span>
            <span className="curriculum__lesson-title">배경(background)과 그라데이션</span>
            
            <span className="curriculum__lesson-time">12:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">06</span>
            <span className="curriculum__lesson-title">웹폰트 적용하기 (Pretendard·구글폰트)</span>
            
            <span className="curriculum__lesson-time">10:30</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">07</span>
            <span className="curriculum__lesson-title">가상 클래스·가상 요소 활용</span>
            
            <span className="curriculum__lesson-time">12:30</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">08</span>
            <span className="curriculum__lesson-title">우선순위(명시도)와 상속</span>
            
            <span className="curriculum__lesson-time">14:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">09</span>
            <span className="curriculum__lesson-title">CSS 변수(custom property)로 관리하기</span>
            
            <span className="curriculum__lesson-time">11:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">10</span>
            <span className="curriculum__lesson-title">[실습] 카드 컴포넌트 스타일링</span>
            
            <span className="curriculum__lesson-time">17:00</span>
          </li>
        </ul>
      </details>
      <details className="curriculum__chapter">
        <summary className="curriculum__summary">
          <span className="curriculum__chapter-head">
            <span className="curriculum__chapter-title">Chapter 04. 레이아웃 마스터 </span>
            <span className="curriculum__chapter-desc">이 강의의 심장부. Flex·Grid로 어떤 화면이든 배치합니다.</span>
          </span>
          <span className="curriculum__chapter-meta">10강 · 약 2시간 12분</span>
          <span className="curriculum__chevron icon icon--chevron-right" aria-hidden="true"></span>
        </summary>
        <ul className="curriculum__lessons">
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">01</span>
            <span className="curriculum__lesson-title">position의 모든 것 (static~sticky)</span>
            
            <span className="curriculum__lesson-time">12:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">02</span>
            <span className="curriculum__lesson-title">z-index와 쌓임 맥락</span>
            
            <span className="curriculum__lesson-time">09:30</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">03</span>
            <span className="curriculum__lesson-title">Flex 기초: 주축과 교차축</span>
            
            <span className="curriculum__lesson-time">14:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">04</span>
            <span className="curriculum__lesson-title">Flex 실전: 정렬과 분배</span>
            
            <span className="curriculum__lesson-time">15:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">05</span>
            <span className="curriculum__lesson-title">Grid 기초: 행·열 정의하기</span>
            
            <span className="curriculum__lesson-time">13:30</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">06</span>
            <span className="curriculum__lesson-title">Grid 실전: 영역 배치와 반응형 그리드</span>
            
            <span className="curriculum__lesson-time">16:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">07</span>
            <span className="curriculum__lesson-title">float와 클리어픽스(레거시 이해)</span>
            
            <span className="curriculum__lesson-time">10:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">08</span>
            <span className="curriculum__lesson-title">실무에서 Flex vs Grid 선택 기준</span>
            
            <span className="curriculum__lesson-time">12:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">09</span>
            <span className="curriculum__lesson-title">자주 쓰는 레이아웃 패턴(헤더·사이드바·카드)</span>
            
            <span className="curriculum__lesson-time">13:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">10</span>
            <span className="curriculum__lesson-title">[실습] 반응형 갤러리 레이아웃</span>
            
            <span className="curriculum__lesson-time">18:00</span>
          </li>
        </ul>
      </details>
      <details className="curriculum__chapter">
        <summary className="curriculum__summary">
          <span className="curriculum__chapter-head">
            <span className="curriculum__chapter-title">Chapter 05. 반응형 웹 </span>
            <span className="curriculum__chapter-desc">하나의 코드로 모든 화면에 대응하는 반응형 원리를 완성합니다.</span>
          </span>
          <span className="curriculum__chapter-meta">8강 · 약 1시간 40분</span>
          <span className="curriculum__chevron icon icon--chevron-right" aria-hidden="true"></span>
        </summary>
        <ul className="curriculum__lessons">
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">01</span>
            <span className="curriculum__lesson-title">반응형 웹의 원리와 뷰포트</span>
            
            <span className="curriculum__lesson-time">11:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">02</span>
            <span className="curriculum__lesson-title">미디어쿼리 작성법</span>
            
            <span className="curriculum__lesson-time">13:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">03</span>
            <span className="curriculum__lesson-title">모바일 퍼스트 전략</span>
            
            <span className="curriculum__lesson-time">12:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">04</span>
            <span className="curriculum__lesson-title">가변 단위(%, vw, rem, clamp)</span>
            
            <span className="curriculum__lesson-time">12:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">05</span>
            <span className="curriculum__lesson-title">반응형 이미지와 picture 태그</span>
            
            <span className="curriculum__lesson-time">11:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">06</span>
            <span className="curriculum__lesson-title">반응형 타이포그래피</span>
            
            <span className="curriculum__lesson-time">10:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">07</span>
            <span className="curriculum__lesson-title">자주 쓰는 브레이크포인트 설계</span>
            
            <span className="curriculum__lesson-time">12:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">08</span>
            <span className="curriculum__lesson-title">[실습] 메인 페이지 반응형으로 만들기</span>
            
            <span className="curriculum__lesson-time">19:00</span>
          </li>
        </ul>
      </details>
      <details className="curriculum__chapter">
        <summary className="curriculum__summary">
          <span className="curriculum__chapter-head">
            <span className="curriculum__chapter-title">Chapter 06. 인터랙션 기초 </span>
            <span className="curriculum__chapter-desc">멈춰 있던 화면에 움직임을 더해 디테일을 살립니다.</span>
          </span>
          <span className="curriculum__chapter-meta">5강 · 약 1시간 4분</span>
          <span className="curriculum__chevron icon icon--chevron-right" aria-hidden="true"></span>
        </summary>
        <ul className="curriculum__lessons">
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">01</span>
            <span className="curriculum__lesson-title">transition으로 부드러운 변화 만들기</span>
            
            <span className="curriculum__lesson-time">12:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">02</span>
            <span className="curriculum__lesson-title">transform: 이동·회전·확대</span>
            
            <span className="curriculum__lesson-time">13:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">03</span>
            <span className="curriculum__lesson-title">hover·focus 인터랙션 디자인</span>
            
            <span className="curriculum__lesson-time">12:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">04</span>
            <span className="curriculum__lesson-title">keyframes 애니메이션 기초</span>
            
            <span className="curriculum__lesson-time">14:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">05</span>
            <span className="curriculum__lesson-title">마이크로 인터랙션으로 디테일 살리기</span>
            
            <span className="curriculum__lesson-time">13:00</span>
          </li>
        </ul>
      </details>
      <details className="curriculum__chapter">
        <summary className="curriculum__summary">
          <span className="curriculum__chapter-head">
            <span className="curriculum__chapter-title">Chapter 07. 실전 프로젝트 </span>
            <span className="curriculum__chapter-desc">배운 모든 걸 모아, 포트폴리오용 쇼핑몰 메인을 완성합니다.</span>
          </span>
          <span className="curriculum__chapter-meta">5강 · 약 1시간 24분</span>
          <span className="curriculum__chevron icon icon--chevron-right" aria-hidden="true"></span>
        </summary>
        <ul className="curriculum__lessons">
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">01</span>
            <span className="curriculum__lesson-title">[프로젝트] 쇼핑몰 메인 기획·구조 설계</span>
            
            <span className="curriculum__lesson-time">14:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">02</span>
            <span className="curriculum__lesson-title">[프로젝트] 헤더·내비게이션 퍼블리싱</span>
            
            <span className="curriculum__lesson-time">16:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">03</span>
            <span className="curriculum__lesson-title">[프로젝트] 상품 카드 그리드 &amp; 반응형</span>
            
            <span className="curriculum__lesson-time">17:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">04</span>
            <span className="curriculum__lesson-title">[프로젝트] 푸터 &amp; 전체 마무리</span>
            
            <span className="curriculum__lesson-time">15:00</span>
          </li>
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">05</span>
            <span className="curriculum__lesson-title">포트폴리오로 다듬기 + 멘토 코드 리뷰</span>
            
            <span className="curriculum__lesson-time">22:00</span>
          </li>
        </ul>
      </details>
      <details className="curriculum__chapter">
        <summary className="curriculum__summary">
          <span className="curriculum__chapter-head">
            <span className="curriculum__chapter-title">보너스 챕터 <span className="curriculum__free">AI 활용</span></span>
            <span className="curriculum__chapter-desc">완강 후 자동 오픈. 클로드 코드·커서로 퍼블리싱 속도를 끌어올리는 실무 워크플로우.</span>
          </span>
          <span className="curriculum__chapter-meta">1강 · 29분</span>
          <span className="curriculum__chevron icon icon--chevron-right" aria-hidden="true"></span>
        </summary>
        <ul className="curriculum__lessons">
          <li className="curriculum__lesson">
            <span className="curriculum__lesson-no">01</span>
            <span className="curriculum__lesson-title">AI로 퍼블리싱 속도 2배 (클로드 코드·커서 활용)</span>
            
            <span className="curriculum__lesson-time">29:00</span>
          </li>
        </ul>
      </details>
        </div>
      </section>

      <section className="course-section" id="reviews" aria-labelledby="reviews-title">
        <div className="section-band">
          <h2 className="section-band__title" id="reviews-title">수강후기</h2>
          <p className="section-band__lead">★ 4.9 / 5.0 (총 415개)</p>
          <p className="section-band__desc">노베이스에서 시작해 포트폴리오와 합격까지 — 415명의 수강생이 ★4.9로 증명한 ‘끝까지 따라가는 강의’. 막혔던 그 자리에서 다시 시작한 분들의 진짜 후기를 만나보세요.</p>
        </div>
        <div className="review-list">
        <div className="review-group">
          <h3 className="review-group__title"><span className="review-group__icon" aria-hidden="true"><span className="icon icon--briefcase"></span></span>취업·이직에 성공했어요</h3>
          <ul className="review-group__list">
            <li className="review-card">
              <div className="review-card__head">
                <img className="review-card__avatar" src="/figma/course-detail/f7d913e6959b056d28509172236ff8aa91231c19.png" alt="" loading="lazy" />
                <span className="review-card__name">과현우</span>
                <img className="review-card__stars" src="/figma/course-detail/stars-49.svg" alt="평점 5점 만점에 4.9점" loading="lazy" />
                <time className="review-card__date" dateTime="2026-05-21">2026-05-21</time>
              </div>
              <p className="review-card__body">"비전공 30대 직장인입니다. 6개월 독학하다 포기했었는데, 손으로 같이 치니까 진짜 남더라고요. 챕터 7 결과물을 그대로 포트폴리오에 넣었고, 한 달 뒤 웹 퍼블리셔로 합격했어요. 정말 인생이 바뀌었습니다."</p>
            </li>
            <li className="review-card">
              <div className="review-card__head">
                <img className="review-card__avatar" src="/figma/course-detail/01e25d4998a74f8b7ba90f415016d4b820a7924d.png" alt="" loading="lazy" />
                <span className="review-card__name">별이맘</span>
                <img className="review-card__stars" src="/figma/course-detail/stars-49.svg" alt="평점 5점 만점에 4.9점" loading="lazy" />
                <time className="review-card__date" dateTime="2026-05-21">2026-05-21</time>
              </div>
              <p className="review-card__body">"경력 단절 후 재취업이 막막했어요. 면접에서 직접 만든 반응형 사이트를 보여줬더니 분위기가 확 달라지더라고요. 결과물 하나가 이렇게 큰 무기가 될 줄 몰랐습니다. 같은 고민 하는 분들께 완전 추천해요."</p>
            </li>
          </ul>
        </div>
        <div className="review-group">
          <h3 className="review-group__title"><span className="review-group__icon" aria-hidden="true"><span className="icon icon--pencil"></span></span>이제 입문했어요</h3>
          <ul className="review-group__list">
            <li className="review-card">
              <div className="review-card__head">
                <img className="review-card__avatar" src="/figma/course-detail/725c55197645cae9c357e941e5f0e75e4dda3054.png" alt="" loading="lazy" />
                <span className="review-card__name">codingmom</span>
                <img className="review-card__stars" src="/figma/course-detail/stars-49.svg" alt="평점 5점 만점에 4.9점" loading="lazy" />
                <time className="review-card__date" dateTime="2026-05-21">2026-05-21</time>
              </div>
              <p className="review-card__body">"코딩이라곤 한 줄도 안 써본 완전 노베이스였어요. Flexbox·Grid 설명이 지금까지 본 것 중 제일 직관적이라, 매번 막히던 레이아웃이 드디어 이해됐습니다. 미디어쿼리까지 손에 익으니 자신감이 붙어요."</p>
            </li>
            <li className="review-card">
              <div className="review-card__head">
                <img className="review-card__avatar" src="/figma/course-detail/688cc60ebc5c6dbe336bab2b82519e668df9a025.png" alt="" loading="lazy" />
                <span className="review-card__name">대학생_윤</span>
                <img className="review-card__stars" src="/figma/course-detail/stars-49.svg" alt="평점 5점 만점에 4.9점" loading="lazy" />
                <time className="review-card__date" dateTime="2026-05-21">2026-05-21</time>
              </div>
              <p className="review-card__body">"유튜브 무료 강의만 보다 늘 중간에 길을 잃었는데, 챕터가 차근차근 이어져서 처음으로 끝까지 갔어요. 환경 설정부터 같이 해주니 따라가기 쉬웠습니다. 입문자에게 딱 맞는 강의를 기획해 주셔서 정말 감사합니다."</p>
            </li>
          </ul>
        </div>
        <div className="review-group">
          <h3 className="review-group__title"><span className="review-group__icon" aria-hidden="true"><span className="icon icon--journal-code"></span></span>실무하는데 도움이 됐어요</h3>
          <ul className="review-group__list">
            <li className="review-card">
              <div className="review-card__head">
                <img className="review-card__avatar" src="/figma/course-detail/e863d048bf5939c4de8ac3d8e87700f3244cdc0f.png" alt="" loading="lazy" />
                <span className="review-card__name">Andy7132</span>
                <img className="review-card__stars" src="/figma/course-detail/stars-49.svg" alt="평점 5점 만점에 4.9점" loading="lazy" />
                <time className="review-card__date" dateTime="2026-05-21">2026-05-21</time>
              </div>
              <p className="review-card__body">"현업인데 기초가 늘 불안했어요. 어깨너머로 배운 걸 이 강의로 제대로 정리했습니다. 막힐 때마다 Q&amp;A에 질문하면 하루 안에 답이 와서 큰 도움이 됐고, 이제 코드에 근거가 생겼어요. 멘토님 정말 친절합니다."</p>
            </li>
            <li className="review-card">
              <div className="review-card__head">
                <img className="review-card__avatar" src="/figma/course-detail/15e3809c10dc2d89acc44e48492df50af99d9a52.png" alt="" loading="lazy" />
                <span className="review-card__name">퍼블리셔3년차</span>
                <img className="review-card__stars" src="/figma/course-detail/stars-42.svg" alt="평점 5점 만점에 4.2점" loading="lazy" />
                <time className="review-card__date" dateTime="2026-05-21">2026-05-21</time>
              </div>
              <p className="review-card__body">"내용은 최고인데 후반부 진도가 살짝 빨라요. 0.75배속으로 두 번 봤습니다. 그래도 자주 쓰는 레이아웃 패턴 정리가 실무에 바로 도움이 됐어요. 저처럼 현업자이면서 기초를 다시 다지고 싶은 분께 강추."</p>
            </li>
          </ul>
        </div>
        <div className="review-group">
          <h3 className="review-group__title"><span className="review-group__icon" aria-hidden="true"><span className="icon icon--mouse2"></span></span>디자이너·기획자인데 들었어요</h3>
          <ul className="review-group__list">
            <li className="review-card">
              <div className="review-card__head">
                <img className="review-card__avatar" src="/figma/course-detail/b0b4e88d1f0d0aaec30d942165ef32d0bb7fe886.png" alt="" loading="lazy" />
                <span className="review-card__name">디자이너_솔</span>
                <img className="review-card__stars" src="/figma/course-detail/stars-49.svg" alt="평점 5점 만점에 4.9점" loading="lazy" />
                <time className="review-card__date" dateTime="2026-05-21">2026-05-21</time>
              </div>
              <p className="review-card__body">"맨날 개발자에게 ‘이거 구현 가능해요?’ 물어보던 디자이너입니다. 이제 제 시안을 직접 코드로 옮겨보니 협업이 훨씬 매끄러워졌어요. 기획·디자인 직군이라도 화면을 이해하고 싶다면 강력 추천합니다."</p>
            </li>
            <li className="review-card">
              <div className="review-card__head">
                <img className="review-card__avatar" src="/figma/course-detail/688cc60ebc5c6dbe336bab2b82519e668df9a025.png" alt="" loading="lazy" />
                <span className="review-card__name">기획자노트</span>
                <img className="review-card__stars" src="/figma/course-detail/stars-49.svg" alt="평점 5점 만점에 4.9점" loading="lazy" />
                <time className="review-card__date" dateTime="2026-05-21">2026-05-21</time>
              </div>
              <p className="review-card__body">"서비스 기획자예요. 기획서에 직접 만든 화면을 넣으니 설득력이 달라지더라고요. 개발자와 같은 언어로 대화하게 된 게 가장 큰 수확입니다. 저처럼 코드 하나도 모르는 비개발 직군에게도 정말 유용한 강의예요."</p>
            </li>
          </ul>
        </div>
        <div className="review-group">
          <h3 className="review-group__title"><span className="review-group__icon" aria-hidden="true"><span className="icon icon--stopwatch"></span></span>직장 다니며 완주했어요</h3>
          <ul className="review-group__list">
            <li className="review-card">
              <div className="review-card__head">
                <img className="review-card__avatar" src="/figma/course-detail/41ed853818e7ac06c83280cb969ab7b1a543a9dc.png" alt="" loading="lazy" />
                <span className="review-card__name">야근러김</span>
                <img className="review-card__stars" src="/figma/course-detail/stars-49.svg" alt="평점 5점 만점에 4.9점" loading="lazy" />
                <time className="review-card__date" dateTime="2026-05-21">2026-05-21</time>
              </div>
              <p className="review-card__body">"퇴근하면 지쳐서 늘 작심삼일이었는데, 강의가 짧게 끊겨 있어서 하루 한 강씩 밤샘 스트릭 채우는 재미로 완주했어요. 평생 소장이라 진도 압박이 없는 것도 큰 장점. 결국 끝까지 갔습니다."</p>
            </li>
            <li className="review-card">
              <div className="review-card__head">
                <img className="review-card__avatar" src="/figma/course-detail/41ed853818e7ac06c83280cb969ab7b1a543a9dc.png" alt="" loading="lazy" />
                <span className="review-card__name">두아이맘</span>
                <img className="review-card__stars" src="/figma/course-detail/stars-49.svg" alt="평점 5점 만점에 4.9점" loading="lazy" />
                <time className="review-card__date" dateTime="2026-05-21">2026-05-21</time>
              </div>
              <p className="review-card__body">"애 재우고 새벽에 조금씩 들었어요. 한 강이 길지 않아서 자투리 시간에 딱이었고, 평생 소장이라 천천히 제 속도로 끝낼 수 있었습니다. 육아하면서도 완주 가능하다는 걸 증명했네요!"</p>
            </li>
          </ul>
        </div>
        </div>
        <p className="course-section__more"><a className="btn-outline" href="#reviews">수강후기 더보기<span className="icon icon--chevron-right" aria-hidden="true"></span></a></p>
      </section>

      <section className="course-section" id="faq" aria-labelledby="faq-title">
        <div className="section-band">
          <h2 className="section-band__title" id="faq-title">자주 묻는 질문들</h2>
          <p className="section-band__lead">수강 전 꼭 알아두면 좋은 것들</p>
          <p className="section-band__desc">수강생들이 실제로 가장 많이 남긴 질문을 선별했어요. 결제·수강기간·수료증·환불 규정을 명확히 안내하니, 충분히 확인하고 결정하셔도 괜찮습니다.</p>
        </div>
        <div className="faq">
        <details className="faq__item">
          <summary className="faq__question"><span className="faq__q-text">Q1. 선수지식이나 준비물이 필요한가요?</span><span className="faq__toggle icon icon--chevron-right" aria-hidden="true"></span></summary>
          <div className="faq__answer"><p>사전 지식 없이 시작할 수 있어요. 챕터 1에서 무료 프로그램(VS Code) 설치부터 함께 진행합니다. PC만 있으면 되고, 맥·윈도우 모두 가능해요. 노트북 사양도 크게 가리지 않습니다.</p></div>
        </details>
        <details className="faq__item">
          <summary className="faq__question"><span className="faq__q-text">Q2. 정말 코딩을 한 번도 안 해본 사람도 따라갈 수 있나요?</span><span className="faq__toggle icon icon--chevron-right" aria-hidden="true"></span></summary>
          <div className="faq__answer"><p>네, ‘입문’ 난이도로 설계했어요. 모든 강의를 라이브 코딩으로 천천히 진행하고, 막히면 Q&amp;A 탭에서 바로 질문할 수 있습니다. 노베이스 수강생의 합격 후기가 그 증거예요.</p></div>
        </details>
        <details className="faq__item">
          <summary className="faq__question"><span className="faq__q-text">Q3. 디자인이나 포토샵도 다룰 줄 알아야 하나요?</span><span className="faq__toggle icon icon--chevron-right" aria-hidden="true"></span></summary>
          <div className="faq__answer"><p>아니요. 실습용 디자인 시안은 모두 제공되며, 이 클래스는 ‘화면을 코드로 구현하는 퍼블리싱’에만 집중합니다. 디자인 툴을 몰라도 전혀 문제없이 따라올 수 있어요.</p></div>
        </details>
        <details className="faq__item">
          <summary className="faq__question"><span className="faq__q-text">Q4. 강의는 언제까지 볼 수 있나요?</span><span className="faq__toggle icon icon--chevron-right" aria-hidden="true"></span></summary>
          <div className="faq__answer"><p>한 번 구매하면 평생 소장이라 수강기간 제한이 없어요. 원하는 속도로, 필요할 때마다 반복해서 보실 수 있습니다. 진도 압박 없이 내 페이스대로 끝내세요.</p></div>
        </details>
        <details className="faq__item">
          <summary className="faq__question"><span className="faq__q-text">Q5. 모바일이나 태블릿에서도 볼 수 있나요?</span><span className="faq__toggle icon icon--chevron-right" aria-hidden="true"></span></summary>
          <div className="faq__answer"><p>웹·iOS·안드로이드 앱을 모두 지원하고, 시청 기록은 기기 간 자동 동기화돼요. 배속(0.5~2.0배)·자막·이어보기도 지원해 출퇴근길에도 편하게 학습할 수 있습니다.</p></div>
        </details>
        <details className="faq__item">
          <summary className="faq__question"><span className="faq__q-text">Q6. 실습 자료는 어떻게 받나요?</span><span className="faq__toggle icon icon--chevron-right" aria-hidden="true"></span></summary>
          <div className="faq__answer"><p>각 강의 하단과 ‘수업 자료’ 탭에서 챕터별 예제 소스, 실전 프로젝트 완성본, 디자인 시안, PDF 요약 노트를 내려받을 수 있어요. 복습과 포트폴리오 정리에 그대로 쓰입니다.</p></div>
        </details>
        <details className="faq__item">
          <summary className="faq__question"><span className="faq__q-text">Q7. 완강하면 수료증이 나오나요?</span><span className="faq__toggle icon icon--chevron-right" aria-hidden="true"></span></summary>
          <div className="faq__answer"><p>네. 강의를 100% 완강하면 졸업모(수료증)가 자동 발급되어 마이 둥지에서 바로 다운로드할 수 있어요. 학습 이력을 증빙하거나 포트폴리오에 함께 첨부하기 좋습니다.</p></div>
        </details>
        <details className="faq__item">
          <summary className="faq__question"><span className="faq__q-text">Q8. 보너스 챕터(AI 퍼블리싱)도 따로 결제해야 하나요?</span><span className="faq__toggle icon icon--chevron-right" aria-hidden="true"></span></summary>
          <div className="faq__answer"><p>아니요, 본 강의에 포함되어 있어요. 본편을 완강하면 자동으로 열리며, 클로드 코드·커서로 퍼블리싱 속도를 높이는 실무 워크플로우를 추가 비용 없이 배울 수 있습니다.</p></div>
        </details>
        <details className="faq__item">
          <summary className="faq__question"><span className="faq__q-text">Q9. 강의 중 궁금한 점은 어떻게 질문하나요?</span><span className="faq__toggle icon icon--chevron-right" aria-hidden="true"></span></summary>
          <div className="faq__answer"><p>강의 ‘Q&amp;A’ 탭에서 멘토에게 직접 질문할 수 있어요. 보통 1~2일 안에 답변이 달리고, 다른 수강생의 질문도 함께 볼 수 있어 막히는 지점을 빠르게 해결할 수 있습니다.</p></div>
        </details>
        <details className="faq__item">
          <summary className="faq__question"><span className="faq__q-text">Q10. 환불 규정이 궁금해요.</span><span className="faq__toggle icon icon--chevron-right" aria-hidden="true"></span></summary>
          <div className="faq__answer"><p>결제 후 7일 이내이고 수강률 10% 미만이면 전액 환불돼요. 이후에는 진도율에 따라 환불액이 산정됩니다. 마이 둥지 &gt; 결제내역에서 신청하면 영업일 3일 내 처리됩니다.</p></div>
        </details>
        </div>
      </section>

      <section className="course-section" id="mentor" aria-labelledby="mentor-title">
        <div className="section-band">
          <h2 className="section-band__title" id="mentor-title">멘토 소개</h2>
          <p className="section-band__lead">코드랩 현우</p>
          <p className="section-band__desc">8년 차 프론트엔드 개발자이자 비전공자 대상 부트캠프 멘토. 수백 명의 노베이스 수강생을 웹 퍼블리셔로 길러낸 경험을 바탕으로, “막히는 지점”을 정확히 짚어 풀어주는 강의로 정평이 나 있습니다.</p>
        </div>

        <div className="mentor-profile">
          <div className="mentor-profile__detail">
            <div className="mentor-profile__group">
              <h3 className="mentor-profile__label">멘토 대표 분야</h3>
              <p className="mentor-profile__text">웹 퍼블리싱 · HTML/CSS · 반응형 웹 · 프론트엔드 입문</p>
            </div>
            <div className="mentor-profile__group">
              <h3 className="mentor-profile__label">주요 경력 &amp; 활동</h3>
              <ul className="mentor-profile__list">
                <li>현) 프론트엔드 개발 8년 차 · 비전공자 부트캠프 멘토</li>
                <li>시맨틱 마크업·웹 접근성 실무 교육 다수 진행</li>
                <li>훗업 ‘웹 퍼블리싱’ 카테고리 대표 멘토</li>
                <li>훗업 매거진(블로그) ‘비전공자가 6개월 만에 웹 퍼블리셔로 취업한 진짜 순서’ 기고</li>
              </ul>
            </div>
          </div>
          <figure className="mentor-profile__card">
            <img className="mentor-profile__avatar" src="/figma/course-detail/mentor-avatar.png" alt="멘토 코드랩 현우 프로필 사진" loading="lazy" width="100" height="100" />
            <figcaption className="mentor-profile__caption">
              <p className="mentor-profile__name">코드랩 현우</p>
              <p className="mentor-profile__quote">“코드는 외우는 게 아니라 손에 익히는 거예요. 그래서 저는 절대 결과 화면만 보여주지 않습니다.”</p>
            </figcaption>
          </figure>
        </div>

        <div className="mentor-courses">
          <div className="mentor-courses__head">
            <h3 className="mentor-courses__title">멘토의 다른 강의</h3>
            <a className="mentor-courses__all" href="/courses">전체 클래스 보기</a>
          </div>
          <ul className="mentor-courses__list">
            <li className="mentor-course">
              <a className="mentor-course__thumb" href="/course/responsive-publishing" tabIndex={-1}><img src="/figma/course-detail/mentor-course-htmlcss.png" alt="HTML과 CSS 기초를 실습하는 강의 썸네일" loading="lazy" /></a>
              <div className="mentor-course__body">
                <img className="mentor-course__avatar" src="/figma/course-detail/mentor-avatar.png" alt="" loading="lazy" width="30" height="30" />
                <div className="mentor-course__info">
                  <h4 className="mentor-course__title"><a href="/course/responsive-publishing">손에 익히는 HTML/CSS 기초 부트캠프</a></h4>
                  <p className="mentor-course__meta">코드랩 현우・60강・12시간 30분</p>
                  <p className="mentor-course__price"><span className="mentor-course__rate">20%</span><del className="mentor-course__before">77,000원</del><span className="icon icon--arrow-price mentor-course__arrow" aria-hidden="true"></span><ins className="mentor-course__after">61,600원</ins></p>
                  <p className="mentor-course__rating"><img className="mentor-course__stars" src="/figma/course-detail/stars-48.svg" alt="평점 5점 만점에 4.8점" loading="lazy" /><span className="mentor-course__score">4.8</span><span className="mentor-course__sep" aria-hidden="true">|</span><span className="mentor-course__students">5,640명 수강</span></p>
                </div>
              </div>
            </li>
            <li className="mentor-course">
              <a className="mentor-course__thumb" href="/course/responsive-publishing" tabIndex={-1}><img src="/figma/course-detail/mentor-course-css.png" alt="CSS Flexbox와 Grid 레이아웃 강의 썸네일" loading="lazy" /></a>
              <div className="mentor-course__body">
                <img className="mentor-course__avatar" src="/figma/course-detail/mentor-avatar.png" alt="" loading="lazy" width="30" height="30" />
                <div className="mentor-course__info">
                  <h4 className="mentor-course__title"><a href="/course/responsive-publishing">CSS Flexbox &amp; Grid 레이아웃 완전 정복</a></h4>
                  <p className="mentor-course__meta">코드랩 현우・44강・8시간 30분</p>
                  <p className="mentor-course__price"><span className="mentor-course__rate">40%</span><del className="mentor-course__before">99,000원</del><span className="icon icon--arrow-price mentor-course__arrow" aria-hidden="true"></span><ins className="mentor-course__after">59,400원</ins></p>
                  <p className="mentor-course__rating"><img className="mentor-course__stars" src="/figma/course-detail/stars-49.svg" alt="평점 5점 만점에 4.9점" loading="lazy" /><span className="mentor-course__score">4.9</span><span className="mentor-course__sep" aria-hidden="true">|</span><span className="mentor-course__students">3,210명 수강</span></p>
                </div>
              </div>
            </li>
            <li className="mentor-course">
              <a className="mentor-course__thumb" href="/course/responsive-publishing" tabIndex={-1}><img src="/figma/course-detail/mentor-course-js.png" alt="자바스크립트 핵심 문법 강의 썸네일" loading="lazy" /></a>
              <div className="mentor-course__body">
                <img className="mentor-course__avatar" src="/figma/course-detail/mentor-avatar.png" alt="" loading="lazy" width="30" height="30" />
                <div className="mentor-course__info">
                  <h4 className="mentor-course__title"><a href="/course/responsive-publishing">실무에서 바로 쓰는 자바스크립트 핵심 완전 정복</a></h4>
                  <p className="mentor-course__meta">코드랩 현우・72강・15시간</p>
                  <p className="mentor-course__price"><span className="mentor-course__rate">35%</span><del className="mentor-course__before">132,000원</del><span className="icon icon--arrow-price mentor-course__arrow" aria-hidden="true"></span><ins className="mentor-course__after">85,800원</ins></p>
                  <p className="mentor-course__rating"><img className="mentor-course__stars" src="/figma/course-detail/stars-48.svg" alt="평점 5점 만점에 4.8점" loading="lazy" /><span className="mentor-course__score">4.8</span><span className="mentor-course__sep" aria-hidden="true">|</span><span className="mentor-course__students">4,760명 수강</span></p>
                </div>
              </div>
            </li>
            <li className="mentor-course">
              <a className="mentor-course__thumb" href="/course/responsive-publishing" tabIndex={-1}><img src="/figma/course-detail/mentor-course-vanilla.png" alt="바닐라 자바스크립트로 만드는 인터랙티브 웹 강의 썸네일" loading="lazy" /></a>
              <div className="mentor-course__body">
                <img className="mentor-course__avatar" src="/figma/course-detail/mentor-avatar.png" alt="" loading="lazy" width="30" height="30" />
                <div className="mentor-course__info">
                  <h4 className="mentor-course__title"><a href="/course/responsive-publishing">바닐라 자바 스크립트로 만드는 인터랙티브 웹</a></h4>
                  <p className="mentor-course__meta">코드랩 현우・56강・12시간</p>
                  <p className="mentor-course__price"><span className="mentor-course__rate">30%</span><del className="mentor-course__before">143,000원</del><span className="icon icon--arrow-price mentor-course__arrow" aria-hidden="true"></span><ins className="mentor-course__after">100,100원</ins></p>
                  <p className="mentor-course__rating"><img className="mentor-course__stars" src="/figma/course-detail/stars-47.svg" alt="평점 5점 만점에 4.7점" loading="lazy" /><span className="mentor-course__score">4.7</span><span className="mentor-course__sep" aria-hidden="true">|</span><span className="mentor-course__students">2,180명 수강</span></p>
                </div>
              </div>
            </li>
            <li className="mentor-course">
              <a className="mentor-course__thumb" href="/course/responsive-publishing" tabIndex={-1}><img src="/figma/course-detail/mentor-course-react.png" alt="React 프론트엔드 실전 프로젝트 강의 썸네일" loading="lazy" /></a>
              <div className="mentor-course__body">
                <img className="mentor-course__avatar" src="/figma/course-detail/mentor-avatar.png" alt="" loading="lazy" width="30" height="30" />
                <div className="mentor-course__info">
                  <h4 className="mentor-course__title"><a href="/course/responsive-publishing">포트폴리오까지 끝내는 React 프론트엔드 실전 프로젝트</a></h4>
                  <p className="mentor-course__meta">코드랩 현우・88강・18시간</p>
                  <p className="mentor-course__price"><span className="mentor-course__rate">40%</span><del className="mentor-course__before">165,000원</del><span className="icon icon--arrow-price mentor-course__arrow" aria-hidden="true"></span><ins className="mentor-course__after">99,000원</ins></p>
                  <p className="mentor-course__rating"><img className="mentor-course__stars" src="/figma/course-detail/stars-48.svg" alt="평점 5점 만점에 4.8점" loading="lazy" /><span className="mentor-course__score">4.8</span><span className="mentor-course__sep" aria-hidden="true">|</span><span className="mentor-course__students">2,604명 수강</span></p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

    </div>

    <aside className="course-aside" aria-label="수강 신청">
      <div className="enroll-card" id="enroll">
        <figure className="enroll-card__thumb">
          <img src="/figma/course-detail/enroll-thumb.png" alt="여러 화면 크기로 반응형 레이아웃을 확인하는 웹 퍼블리싱 작업 화면" loading="lazy" />
          <CourseEnrollWish />
          <span className="enroll-card__badge">30% 할인</span>
        </figure>
        <p className="enroll-card__hashtags"><span>#웹퍼블리싱</span><span>#반응형</span><span>#피그마</span></p>
        <ul className="enroll-card__keywords">
          <li className="enroll-card__keyword enroll-card__keyword--danger">얼리버드 할인중</li>
          <li className="enroll-card__keyword">멘토 답변 제공</li>
          <li className="enroll-card__keyword enroll-card__keyword--danger">평생무료</li>
        </ul>
        <h2 className="enroll-card__title">제로부터 완성하는 반응형 웹 퍼블리싱 마스터 클래스</h2>
        <p className="enroll-card__rating">
          <img className="enroll-card__stars" src="/figma/course-detail/stars-49.svg" alt="평점 5점 만점에 4.9점" loading="lazy" />
          <span className="enroll-card__score">4.9</span>
          <span className="enroll-card__sep" aria-hidden="true">|</span>
          <span className="enroll-card__students">4,128명 수강</span>
        </p>
        <div className="enroll-card__price">
          <span className="enroll-card__rate">30%</span>
          <div className="enroll-card__price-main">
            <ins className="enroll-card__now">77,000원</ins>
            <span className="enroll-card__monthly">월 25,670원</span>
          </div>
          <div className="enroll-card__price-sub">
            <del className="enroll-card__before">110,000원</del>
            <span className="enroll-card__installment">3개월 할부 시</span>
          </div>
        </div>
        <div className="enroll-card__actions">
          <a className="enroll-card__btn enroll-card__btn--primary" href="#enroll">지금 배우기 시작<span>(수강신청)</span></a>
          <a className="enroll-card__btn enroll-card__btn--outline" href="/cart">담은 둥지<span>(장바구니)</span></a>
          <a className="enroll-card__btn enroll-card__btn--wish" href="/wishlist">찜한 둥지<span>(위시리스트)</span></a>
        </div>
      </div>

      <div className="mentor-brief">
        <div className="mentor-brief__head">
          <img className="mentor-brief__avatar" src="/figma/course-detail/mentor-avatar.png" alt="" loading="lazy" width="30" height="30" />
          <span className="mentor-brief__name">코드랩 현우</span>
        </div>
        <dl className="mentor-brief__spec">
          <div><dt>구성</dt><dd>총 7챕터・52강・11시간</dd></div>
          <div><dt>난이도</dt><dd>입문(비전공・노베이스 환영)</dd></div>
          <div><dt>수강 형태</dt><dd>평생소장・수강기간 무제한</dd></div>
          <div><dt>완강 혜택</dt><dd>졸업모(수료증) 발급</dd></div>
        </dl>
        <a className="mentor-brief__link" href="/magazine">멘토 블로그 바로가기</a>
      </div>
    </aside>
  </div>

</main>
  )
}
