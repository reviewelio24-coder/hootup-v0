import { footerLinks } from '@/lib/hootup-data'
import { BrandLogo } from './brand-logo'

const socials = [
  { name: '인스타그램', src: '/figma/instagram.svg' },
  { name: '유튜브', src: '/figma/youtube.svg' },
  { name: '블로그', src: '/figma/blog.svg' },
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="hoot-container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <BrandLogo invert />
            <p className="site-footer__tagline">
              밤에 깨어 배우는 사람들의 아지트. 커리어부터 취미까지, HOOT UP과 함께 오늘도 레벨업하세요.
            </p>
            <ul className="site-footer__social">
              {socials.map((social) => (
                <li key={social.name}>
                  <a href="#" aria-label={`HOOT UP ${social.name}`}>
                    <img src={social.src || '/placeholder.svg'} alt="" width={18} height={18} loading="lazy" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="site-footer__links" aria-label="푸터 메뉴">
            {footerLinks.map((group) => (
              <ul className="footer-col" key={group.title}>
                <li className="footer-col__title">{group.title}</li>
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="site-footer__mid">
          <div className="support">
            <p className="support__label">고객센터</p>
            <p className="support__phone">1600-0000</p>
            <p className="support__hours">평일 10:00 – 18:00 (점심 12:30 – 13:30 / 주말 · 공휴일 휴무)</p>
          </div>
          <div className="support">
            <p className="support__label">문의</p>
            <div className="support__emails">
              <a href="mailto:help@hootup.co.kr">수강 문의 · help@hootup.co.kr</a>
              <a href="mailto:creator@hootup.co.kr">클래스 개설 · creator@hootup.co.kr</a>
              <a href="mailto:biz@hootup.co.kr">제휴 · 광고 · biz@hootup.co.kr</a>
            </div>
          </div>
        </div>

        <div className="site-footer__legal">
          <p>
            (주)훗업 컴퍼니 · 대표 신호진 · 서울특별시 서초구 강남대로 000 · 사업자등록번호 000-00-00000 ·
            통신판매업신고 제2026-서울서초-0000호
          </p>
          <p className="site-footer__legal-copy">© 2026 HOOT UP Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
