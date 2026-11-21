import { Link } from 'react-router-dom'

const dateFormatter = new Intl.DateTimeFormat('ar-EG', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

function PostCard({ post, view = 'grid' }) {
  const isList = view === 'list'

  return (
    <article className={`min-w-0 overflow-hidden rounded-3xl border border-zinc-800 bg-[#141414] transition hover:border-zinc-700 ${isList ? 'grid grid-cols-1 sm:grid-cols-2' : ''}`}>
      <Link
        className={`block overflow-hidden bg-zinc-900 ${isList ? 'aspect-[1.7] sm:aspect-auto sm:min-h-70' : 'aspect-[1.68]'}`}
        to={`/blog/${post.id}`}
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          className="size-full object-cover transition-transform duration-500 hover:scale-105"
          src={post.image}
          alt=""
          loading="lazy"
        />
      </Link>
      <div className={`p-5 sm:p-7 ${isList ? 'self-center sm:p-10' : ''}`}>
      <div className="flex items-center justify-between gap-2 text-xs text-zinc-400">
        <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 font-bold text-orange-400">{post.category}</span>
        <time dateTime={post.date}>{dateFormatter.format(new Date(`${post.date}T00:00:00`))}</time>
        </div>
      <h3 className="mb-3 mt-4 font-display text-xl font-bold leading-relaxed text-white sm:text-2xl">
        <Link className="no-underline hover:text-orange-400" to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
      <p className={`mb-5 line-clamp-3 text-sm leading-7 text-zinc-400 ${isList ? 'sm:line-clamp-3' : ''}`}>{post.excerpt}</p>
      <div className="flex items-center justify-between gap-3">
        {post.author && <span className="inline-flex items-center gap-2 text-xs text-zinc-300">
          <img className="size-8 rounded-full object-cover" src={post.author.avatar} alt="" loading="lazy" />
          {post.author.name}
        </span>}
      <Link className="inline-flex items-center gap-2 text-sm font-bold text-orange-500" to={`/blog/${post.id}`}>
          اقرأ المقال <span aria-hidden="true">←</span>
        </Link>
      </div>
      </div>
    </article>
  )
}

export default PostCard
