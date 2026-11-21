function CategoryFilter({ categories, value, onChange }) {
  return (
    <label className="grid gap-1 text-xs text-muted">
      <span>التصنيف</span>
      <select className="h-14 min-w-38.75 rounded-2xl border border-zinc-800 bg-[#090909] px-3 text-sm text-white transition focus:border-orange-500" value={value || 'all'} onChange={(event) => onChange(event.target.value)}>
        <option value="all">جميع التصنيفات</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </label>
  )
}

export default CategoryFilter
