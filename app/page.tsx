import Link from 'next/link'; import ProductCard from '@/components/ProductCard'; import { getHome, getProducts } from '@/lib/content';
export const dynamic='force-static';
export default function Page(){ const home=getHome(); const products=getProducts();
  return(<section className="relative overflow-hidden">
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-brand.cyan/10 blur-3xl"/>
    <div className="container pt-20 pb-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div><h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">{home.hero.title}</h2>
          <p className="mt-4 text-slate-300 text-lg">{home.hero.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">{home.hero.ctaPrimary}</Link>
            <Link href="/#products" className="btn btn-ghost">{home.hero.ctaSecondary}</Link>
          </div>
          <div className="mt-6 text-xs text-slate-400">Built-in: consent-aware tracking • PQC-ready keys • zero-trust for agents</div>
        </div>
        <div className="relative"><div className="card shadow-glow">
          <div className="grid grid-cols-2 gap-4">{products.map(p=>(
            <div key={p.slug} className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-xs text-slate-400">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">{p.features.map(f=>(<span key={f} className="text-[10px] rounded-lg bg-white/10 px-2 py-1 text-slate-300 ring-1 ring-white/5">{f}</span>))}</div>
            </div>))}
          </div></div>
          <div className="absolute -bottom-8 -right-8 hidden md:block h-40 w-40 rounded-full bg-brand.cyan/20 blur-2xl"/>
        </div>
      </div>
      <div id="products" className="mt-16 grid md:grid-cols-2 gap-6">{products.map(p=>(<ProductCard key={p.slug} title={p.title} blurb={p.blurb} features={p.features}/>))}</div>
    </div>
  </section>);}
