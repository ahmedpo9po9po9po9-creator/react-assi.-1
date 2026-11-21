import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="mx-auto grid min-h-[55vh] w-full max-w-6xl content-center justify-items-start px-4 py-12 sm:px-6">
      <p className="mb-3 text-xs font-bold tracking-widest text-accent-dark">404 — الصفحة غير موجودة</p>
      <h1 className="max-w-3xl font-display text-5xl font-medium leading-tight text-ink sm:text-7xl">
        يبدو أنك ابتعدت عن <span className="text-accent">الإطار.</span>
      </h1>
      <p className="my-5 text-muted">الرابط الذي تبحث عنه غير موجود أو ربما تم نقله.</p>
      <Link className="inline-flex min-h-12 items-center bg-accent px-5 font-bold text-white no-underline transition hover:bg-accent-dark" to="/">
        العودة إلى الرئيسية
      </Link>
    </section>
  )
}

export default NotFound
