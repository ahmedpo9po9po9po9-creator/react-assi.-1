import { Link, NavLink, useLocation } from 'react-router-dom'
import { siteInfo } from '../data/posts.json'

function Navbar() {
  const { pathname, hash } = useLocation()
  const aboutIsActive = pathname === '/' && hash === '#about'

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex min-h-21 w-full max-w-360 flex-wrap items-center justify-between gap-3 px-4 py-3 sm:flex-nowrap sm:gap-4 sm:px-7">
        <NavLink className="inline-flex shrink-0 items-center gap-3 text-white no-underline" to="/" aria-label={`${siteInfo.name} - الرئيسية`}>
          <img className="size-12 shrink-0 object-contain" src="/logo.png" alt="" />
          <span className="grid">
            <strong className="text-xl">{siteInfo.name}</strong>
            <small className="text-xs text-amber-500">عالم التصوير الفوتوغرافي</small>
          </span>
        </NavLink>

        <nav className="order-3 flex w-full items-center justify-center gap-1 rounded-full border border-zinc-800 bg-zinc-900/80 p-1 sm:order-0 sm:w-auto" aria-label="التنقل الرئيسي">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `rounded-full px-3 py-2.5 text-xs transition-colors sm:px-5 sm:py-3 sm:text-sm ${isActive && hash !== '#about' ? 'bg-accent text-white' : 'text-zinc-400 hover:text-white'}`}
          >
            الرئيسية
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => `rounded-full px-3 py-2.5 text-xs transition-colors sm:px-5 sm:py-3 sm:text-sm ${isActive ? 'bg-accent text-white' : 'text-zinc-400 hover:text-white'}`}
          >
            المدونة
          </NavLink>
          <Link
            className={`rounded-full px-3 py-2.5 text-xs no-underline transition-colors sm:px-5 sm:py-3 sm:text-sm ${aboutIsActive ? 'bg-orange-500 text-white' : 'text-zinc-400 hover:text-white'}`}
            to="/#about"
            aria-current={aboutIsActive ? 'page' : undefined}
          >
            من نحن
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link className="hidden text-xl text-zinc-400 no-underline hover:text-white sm:block" to="/blog" aria-label="ابحث في المقالات">⌕</Link>
          <Link className="rounded-full bg-linear-to-l from-orange-500 to-amber-500 px-4 py-3 text-sm font-bold text-white no-underline shadow-lg shadow-orange-950/30 transition hover:brightness-110 sm:px-6" to="/blog">
            ابدأ القراءة
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
