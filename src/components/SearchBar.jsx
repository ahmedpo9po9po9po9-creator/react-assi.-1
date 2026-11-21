function SearchBar({ value, onChange }) {
  return (
    <div className="flex h-14 w-full min-w-0 items-center gap-3 rounded-2xl border border-zinc-800 bg-[#090909] px-4 text-zinc-400 transition focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20">
      <label className="sr-only" htmlFor="post-search">ابحث في المقالات</label>
      <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m16 16 4 4" strokeLinecap="round" />
      </svg>
      <input
        className="min-w-0 flex-1 border-0 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500 focus-visible:outline-none"
        type="search"
        id="post-search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="ابحث عن مقال..."
      />
      {value && (
        <button
          className="grid size-8 shrink-0 place-items-center rounded-full text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
          type="button"
          onClick={() => onChange('')}
          aria-label="مسح البحث"
        >
          ×
        </button>
      )}
    </div>
  )
}

export default SearchBar
