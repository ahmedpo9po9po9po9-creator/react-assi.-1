import { Link, useParams } from 'react-router-dom'
import postsData from '../data/posts.json'
import NotFound from './NotFound.jsx'
import PostCard from '../components/PostCard.jsx'

const dateFormatter = new Intl.DateTimeFormat('ar-EG', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

function BlogDetails() {
  const { id } = useParams()
  const post = postsData.posts.find((item) => String(item.id) === id)

  if (!post) return <NotFound />

  const paragraphs = post.content.split('\n\n')
  const relatedPosts = postsData.posts
    .filter((item) => item.category === post.category && item.id !== post.id)
    .slice(0, 3)

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-9 sm:px-6">
      <Link className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-accent-dark no-underline" to="/blog">
        <span aria-hidden="true">→</span> العودة إلى المدونة
      </Link>
      <header className="mx-auto mb-7 max-w-4xl text-center">
        <span className="text-sm font-bold text-accent-dark">{post.category}</span>
        <h1 className="mt-3 font-display text-4xl font-medium leading-snug text-ink sm:text-6xl">{post.title}</h1>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 text-xs text-ink">
          {post.author && <img className="size-8.5 rounded-full object-cover" src={post.author.avatar} alt="" />}
          <span>{post.author ? post.author.name : 'فريق عدسة'}</span>
          {post.author && <span className="text-muted">{post.author.role}</span>}
          <time className="text-muted" dateTime={post.date}>{dateFormatter.format(new Date(`${post.date}T00:00:00`))}</time>
          {post.readTime && <span className="text-muted">{post.readTime}</span>}
        </div>
      </header>

      <img className="aspect-[1.9] max-h-140 w-full object-cover max-sm:aspect-[1.25]" src={post.image} alt={post.title} />
      <div className="mx-auto my-10 max-w-3xl">
        {paragraphs.map((paragraph, index) => (
          paragraph.startsWith('## ')
            ? <h2 className="mb-3 mt-9 font-display text-2xl text-ink" key={index}>{paragraph.slice(3)}</h2>
            : <p className="mb-5 whitespace-pre-line text-base leading-9 text-zinc-300" key={index}>{paragraph}</p>
        ))}
      </div>
      <Link className="mb-12 inline-flex items-center gap-2 text-sm font-bold text-accent-dark no-underline" to="/blog">
        <span aria-hidden="true">→</span> العودة إلى جميع المقالات
      </Link>

      {relatedPosts.length > 0 && (
        <section className="border-t border-zinc-800 pt-9">
          <div className="mb-6">
            <p className="mb-2 text-xs font-bold tracking-widest text-accent-dark">تابع القراءة</p>
            <h2 className="font-display text-3xl font-medium text-ink">مقالات ذات صلة</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => <PostCard key={relatedPost.id} post={relatedPost} />)}
          </div>
        </section>
      )}
    </article>
  )
}

export default BlogDetails
