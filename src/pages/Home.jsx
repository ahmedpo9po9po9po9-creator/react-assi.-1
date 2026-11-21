import { Link } from 'react-router-dom'
import postsData from '../data/posts.json'
import PostCard from '../components/PostCard.jsx'

const latestPosts = [...postsData.posts].sort((a, b) => b.date.localeCompare(a.date))
const featuredPosts = latestPosts.filter((post) => post.featured).slice(0, 3)
const recentPosts = latestPosts.filter((post) => !post.featured).slice(0, 3)
const categories = [...new Set(postsData.posts.map((post) => post.category))]
const authorCount = new Set(postsData.posts.map((post) => post.author && post.author.name).filter(Boolean)).size
const categoryIcons = ['☼', '◉', '⌁', '✦', '⚙']

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-zinc-900 bg-[#090909]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)',
            backgroundSize: '75px 75px',
          }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(249,115,22,0.12),transparent_58%)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 text-center sm:px-6 sm:pb-20 sm:pt-16">
          <div className="mx-auto mb-2 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/5 px-5 py-2.5 text-sm text-zinc-300">
            <span className="size-2 rounded-full bg-orange-500" aria-hidden="true" />
            مرحباً بك في عدسة
            <span className="size-1.5 rounded-full bg-amber-400" aria-hidden="true" />
          </div>
          <h1 className="mx-auto max-w-5xl font-display text-5xl font-black leading-[1.3] tracking-tight text-white sm:text-7xl lg:text-7xl">
            اكتشف <span className="text-orange-500">فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-xl">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link className="inline-flex min-h-14.5 items-center gap-3 rounded-full bg-linear-to-l from-orange-500 to-amber-500 px-8 font-bold text-white no-underline shadow-lg shadow-orange-950/30 transition hover:scale-[1.02]" to="/blog">
              استكشف المقالات <span aria-hidden="true">←</span>
            </Link>
            <a className="inline-flex min-h-14.5 items-center gap-3 rounded-full border border-zinc-700 px-8 font-bold text-white no-underline transition hover:border-orange-500 hover:text-orange-400" href="#featured">
              اعرف المزيد <span aria-hidden="true">ⓘ</span>
            </a>
          </div>
          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              [postsData.posts.length, 'مقالة'],
              [authorCount, 'كاتب'],
              [categories.length, 'تصنيفات'],
              [featuredPosts.length, 'مقالات مميزة'],
            ].map(([value, label], index) => (
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 px-4 py-6" key={label}>
                <span className="mb-3 block text-3xl text-orange-500" aria-hidden="true">{['▤', '✎', '▰', '✦'][index]}</span>
                <strong className="block text-3xl font-black text-orange-400">{value}</strong>
                <span className="mt-1 block text-sm text-zinc-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6" id="featured">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <span className="mb-3 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-bold text-orange-400">مميز</span>
            <h2 className="font-display text-3xl font-black text-white sm:text-4xl">مقالات مختارة</h2>
            <p className="mt-2 text-sm text-zinc-500">محتوى منتقى لبدء رحلة تعلمك</p>
          </div>
          <Link className="shrink-0 text-sm font-bold text-orange-500 no-underline hover:text-orange-300" to="/blog">عرض الكل <span aria-hidden="true">←</span></Link>
        </div>
        <div className="grid gap-7">
          {featuredPosts.map((post) => <PostCard key={post.id} post={post} view="list" />)}
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-[#0d0d0d] py-20" id="categories">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="mb-8">
            <span className="mb-3 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-bold text-orange-400">التصنيفات</span>
            <h2 className="font-display text-3xl font-black text-white sm:text-4xl">استكشف حسب الموضوع</h2>
            <p className="mt-2 text-sm text-zinc-500">اعثر على محتوى مصمم حسب اهتماماتك</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((category, index) => {
              const count = postsData.posts.filter((post) => post.category === category).length
              return (
                <Link
                  className="group rounded-3xl border border-zinc-800 bg-[#141414] p-5 text-white no-underline transition hover:-translate-y-1 hover:border-orange-500/50"
                  key={category}
                  to={`/blog?category=${encodeURIComponent(category)}`}
                >
                  <span className="mb-6 grid size-12 place-items-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-2xl text-orange-500 group-hover:bg-orange-500/20" aria-hidden="true">
                    {categoryIcons[index % categoryIcons.length]}
                  </span>
                  <h3 className="font-bold">{category}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{count} مقالة</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <span className="mb-3 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-bold text-orange-400">الأحدث</span>
            <h2 className="font-display text-3xl font-black text-white sm:text-4xl">أحدث المقالات</h2>
            <p className="mt-2 text-sm text-zinc-500">محتوى جديد من عالم التصوير</p>
          </div>
          <Link className="shrink-0 text-sm font-bold text-orange-500 no-underline hover:text-orange-300" to="/blog">عرض جميع المقالات <span aria-hidden="true">←</span></Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      </section>

      <section className="scroll-mt-28 px-4 pb-20" id="about">
        <div className="mx-auto grid max-w-6xl justify-items-center rounded-4xl border border-zinc-800 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.12),transparent_60%),#111] px-6 py-14 text-center sm:py-20">
          <span className="mb-4 text-4xl text-orange-500" aria-hidden="true">✦</span>
          <h2 className="max-w-2xl font-display text-3xl font-black text-white sm:text-5xl">كل لقطة بداية لحكاية جديدة</h2>
          <p className="my-4 max-w-xl leading-8 text-zinc-400">تعلّم، جرّب، وشارك العالم رؤيتك. رحلتك في التصوير تبدأ من هنا.</p>
          <Link className="mt-2 inline-flex min-h-13.5 items-center gap-3 rounded-full bg-linear-to-l from-orange-500 to-amber-500 px-7 font-bold text-white no-underline transition hover:brightness-110" to="/blog">
            ابدأ القراءة <span aria-hidden="true">←</span>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
