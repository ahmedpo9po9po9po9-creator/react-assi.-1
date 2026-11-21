function ViewToggle({ value, onChange }) {
  return (
    <div className="flex h-14 items-center rounded-2xl border border-zinc-800 bg-[#090909] p-1" role="group" aria-label="طريقة عرض المقالات">
      <button
        type="button"
        className={`h-11 w-11 cursor-pointer rounded-xl border-0 text-lg transition-colors ${value === 'grid' ? 'bg-orange-500 text-white' : 'bg-transparent text-zinc-400 hover:text-white'}`}
        aria-pressed={value === 'grid'}
        onClick={() => onChange('grid')}
      >
        <span aria-hidden="true">▦</span><span className="sr-only">شبكة</span>
      </button>
      <button
        type="button"
        className={`h-11 w-11 cursor-pointer rounded-xl border-0 text-lg transition-colors ${value === 'list' ? 'bg-orange-500 text-white' : 'bg-transparent text-zinc-400 hover:text-white'}`}
        aria-pressed={value === 'list'}
        onClick={() => onChange('list')}
      >
        <span aria-hidden="true">☰</span><span className="sr-only">قائمة</span>
      </button>
    </div>
  )
}

export default ViewToggle
