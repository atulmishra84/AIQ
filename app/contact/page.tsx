export default function Page(){ return(<div className="container py-16">
  <h1 className="text-3xl font-bold">Contact</h1>
  <p className="mt-2 text-slate-300">Tell us about your stack and compliance needs. We'll tailor a demo.</p>
  <form className="grid md:grid-cols-2 gap-4 max-w-2xl mt-6">
    <input className="rounded-xl bg-black/40 border border-white/10 px-4 py-2 text-sm w-full" placeholder="First name"/>
    <input className="rounded-xl bg-black/40 border border-white/10 px-4 py-2 text-sm w-full" placeholder="Last name"/>
    <input className="md:col-span-2 rounded-xl bg-black/40 border border-white/10 px-4 py-2 text-sm w-full" placeholder="Work email"/>
    <textarea className="md:col-span-2 rounded-xl bg-black/40 border border-white/10 px-4 py-2 text-sm w-full" placeholder="Your use case (agents, LLMs, compliance…)" rows={4}/>
    <button type="button" className="btn btn-primary w-fit">Request Demo</button>
  </form></div>);}
