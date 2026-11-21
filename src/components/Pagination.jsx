function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  return (
    <nav className="mt-8 flex flex-wrap justify-center gap-2" aria-label="صفحات المقالات">
      <button
        type="button"
        className="min-h-10 min-w-10 rounded-xl border border-zinc-700 bg-zinc-900 px-3 text-sm text-zinc-200 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-45"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        السابق
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          type="button"
          className={`min-h-10 min-w-10 rounded-xl border px-3 text-sm transition ${page === currentPage ? 'border-orange-500 bg-orange-500 text-white' : 'border-zinc-700 bg-zinc-900 text-zinc-200 hover:border-orange-500 hover:text-white'}`}
          aria-current={page === currentPage ? 'page' : undefined}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        className="min-h-10 min-w-10 rounded-xl border border-zinc-700 bg-zinc-900 px-3 text-sm text-zinc-200 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-45"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        التالي
      </button>
    </nav>
  )
}

export default Pagination
