import Link from 'next/link';
export default function Nav(){
  return (<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
    <div className="container py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/brand/aiq-logo.svg" alt="AIQ" className="h-9 w-9 rounded-xl"/>
        <div><h1 className="text-lg font-semibold tracking-tight">AIQ Security</h1>
          <p className="text-xs text-slate-400 -mt-1">AI & Quantum-Native Protection</p></div></div>
      <nav className="hidden md:flex gap-6 text-sm text-slate-300">
        <Link href="/#products">Products</Link><Link href="/integrations">Integrations</Link><Link href="/compliance">Compliance</Link><Link href="/pricing">Pricing</Link><Link href="/contact">Contact</Link>
      </nav>
      <Link href="/contact" className="btn btn-primary">Request Demo</Link>
    </div></header>);
}