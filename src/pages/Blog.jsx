import { useSearchParams } from 'react-router-dom'
import CategoryFilter from '../components/CategoryFilter.jsx'
import Pagination from '../components/Pagination.jsx'
import PostCard from '../components/PostCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import ViewToggle from '../components/ViewToggle.jsx'
import postsData from '../data/posts.json'

const POSTS_PER_PAGE = 6
const categories = [...new Set(postsData.posts.map((post) => post.category))]

function Blog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search') || ''
  const category = searchParams.get('category') || 'all'
  const requestedPage = Math.max(1, Number.parseInt(searchParams.get('page') || '1', 10) || 1)
  const requestedView = searchParams.get('view')
  const view = requestedView === 'list' ? 'list' : 'grid'

  const filteredPosts = postsData.posts.filter((post) => {
    const matchesSearch = post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    const matchesCategory = category === 'all' || post.category === category
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const currentPage = totalPages === 0 ? 1 : Math.min(requestedPage, totalPages)
  const visiblePosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  )

  function updateParams(name, value, resetPage = false) {
    const nextParams = new URLSearchParams(searchParams)

    if (
      value === '' ||
      (name === 'category' && value === 'all') ||
      (name === 'view' && value === 'grid')
    ) {
      nextParams.delete(name)
    } else {
      nextParams.set(name, value)
    }

    if (resetPage) nextParams.delete('page')
    setSearchParams(nextParams)
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-8">
        <p className="mb-3 text-xs font-bold tracking-widest text-accent-dark">من دفتر المصور</p>
        <h1 className="font-display text-5xl font-medium text-ink sm:text-7xl">مدونة <span className="text-accent">عدسة</span></h1>
        <p className="mt-3 leading-8 text-muted">أفكار وتقنيات وقصص تساعدك على رؤية العالم بطريقة جديدة.</p>
      </div>

      <div className="grid gap-4 rounded-3xl border border-zinc-800 bg-[#111] p-4 sm:p-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <SearchBar value={search} onChange={(value) => updateParams('search', value, true)} />
        <div className="flex items-end justify-between gap-3 md:justify-start">
          <CategoryFilter
            categories={categories}
            value={category}
            onChange={(value) => updateParams('category', value, true)}
          />
          <ViewToggle value={view} onChange={(value) => updateParams('view', value)} />
        </div>
      </div>

      <p className="my-4 text-xs text-muted">عرض {filteredPosts.length} مقالاً</p>
      {visiblePosts.length > 0 ? (
        <>
          <div className={`grid gap-4 ${view === 'list' ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
            {visiblePosts.map((post) => <PostCard key={post.id} post={post} view={view} />)}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => updateParams('page', String(page))}
          />
        </>
      ) : (
        <div className="grid min-h-64 justify-items-center content-center border border-dashed border-stone-300 p-8 text-center">
          <span className="text-4xl text-accent" aria-hidden="true">⌕</span>
          <h2 className="my-2 font-display text-2xl text-ink">No posts found</h2>
          <p className="max-w-md leading-8 text-muted">لم يتم العثور على مقالات تطابق بحثك. جرّب تغيير كلمات البحث أو التصنيف.</p>
        </div>
      )}
    </section>
  )
}

export default Blog
