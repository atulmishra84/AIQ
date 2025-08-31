type Props={title:string;blurb:string;features:string[]};
export default function ProductCard({title,blurb,features}:Props){
  return(<article className="card hover:border-brand.cyan/40 transition">
    <div className="flex items-start justify-between"><h3 className="text-lg font-semibold">{title}</h3><span className="badge">Included</span></div>
    <p className="mt-2 text-slate-300 text-sm">{blurb}</p>
    <ul className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-300">
      {features.map(f=>(<li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand.cyan"/>{f}</li>))}
    </ul>
  </article>);
}