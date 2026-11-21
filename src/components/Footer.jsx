import { Link } from 'react-router-dom'
import { siteInfo } from '../data/posts.json'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-paper">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6">
        <div>
          <Link className="inline-flex items-center gap-2 font-display text-2xl font-bold text-white no-underline" to="/">
            <img className="size-9 object-contain" src="/logo.png" alt="" />
            {siteInfo.name}
          </Link>
          <p className="mt-2 max-w-md text-sm leading-7 text-zinc-400">{siteInfo.description}</p>
        </div>
        <div className="grid content-start gap-3 text-sm text-zinc-400 sm:justify-end">
          <strong className="mb-1 text-base text-white">استكشف</strong>
          <Link className="hover:text-orange-400" to="/">الرئيسية</Link>
          <Link className="hover:text-orange-400" to="/blog">المدونة والتصنيفات</Link>
          <a className="hover:text-orange-400" href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
        </div>
        <small className="border-t border-zinc-800 pt-5 text-xs text-zinc-500 sm:col-span-2">© {currentYear} {siteInfo.name}. صنع بكل حب — جميع الحقوق محفوظة.</small>
      </div>
    </footer>
  )
}

export default Footer
