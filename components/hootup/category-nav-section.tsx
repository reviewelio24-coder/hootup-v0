import { categories } from '@/lib/hootup-data'

export function CategoryNavSection() {
  return (
    <nav className="category-nav" aria-label="카테고리 바로가기">
      <div className="hoot-container">
        <h2 className="sr-only">카테고리 바로가기</h2>
        <ul className="category-nav__list">
          {categories.map((cat) => (
            <li key={cat.id}>
              <a className="category-card" href={cat.id === 'dev' ? '/category/dev-it' : '#'}>
                <span className="category-card__badge">
                  <img className="category-card__icon" src={cat.icon || "/placeholder.svg"} alt="" width={24} height={24} aria-hidden="true" />
                </span>
                <span className="category-card__label">{cat.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
