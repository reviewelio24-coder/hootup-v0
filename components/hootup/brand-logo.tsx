export function BrandLogo({ invert = false }: { invert?: boolean }) {
  return (
    <a className={`brand-logo${invert ? ' brand-logo--invert' : ''}`} href="#" aria-label="HOOT UP 홈">
      <span className="brand-logo__hoot">HOOT</span>
      <span className="brand-logo__up">UP</span>
      <img
        className="brand-logo__rocket"
        src="/figma/rocket.svg"
        alt=""
        width={11}
        height={28}
        aria-hidden="true"
      />
    </a>
  )
}
