import { footerContacts, footerLinks, footerPolicies } from '@/lib/hootup-data'
import { BrandLogo } from './brand-logo'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="hoot-container site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <BrandLogo invert />
            <p className="site-footer__tagline">밤에도 깨어 배우는 사람들의 아지트</p>
          </div>

          <nav className="site-footer__links" aria-label="푸터 메뉴">
            {footerLinks.map((group) => (
              <ul className="footer-col" key={group.title}>
                <li className="footer-col__title">{group.title}</li>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href ?? '#'}>{link.label}</a>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="site-footer__mid">
          <div className="support">
            <p className="support__label">고객센터</p>
            <p className="support__phone">02-1234-5678</p>
            <p className="support__hours">주중 10:00–18:00 / 주말·공휴일 휴무</p>
          </div>

          <div className="support__emails">
            {footerContacts.map((contact) => (
              <div className="support__email" key={contact.email}>
                <p className="support__email-label">{contact.label}</p>
                <a className="support__email-link" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="site-footer__legal">
          <nav className="site-footer__policies" aria-label="약관 및 정책">
            {footerPolicies.map((policy) => (
              <a key={policy} href="#">
                {policy}
              </a>
            ))}
          </nav>

          <div className="site-footer__company">
            <p>
              <span>(주)훗업 컴퍼니</span>
              <span>대표자 : 신호진</span>
              <span>사업자등록번호 : 123-45-67890</span>
              <span>개인정보책임관리자 : 신호진</span>
            </p>
            <p>
              <span>통신판매신고 : 제 2026-서울서초-1234호</span>
              <span>(06621) 서울 서초구 강남대로 373, 10층</span>
            </p>
          </div>

          <p className="site-footer__legal-copy">Copyright © HOOT UP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
