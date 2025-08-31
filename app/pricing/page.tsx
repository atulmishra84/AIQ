export default function Page(){ return(<div className="container py-16">
  <h1 className="text-3xl font-bold">Pricing</h1>
  <div className="grid md:grid-cols-3 gap-6 mt-8">{[{name:'Starter',price:'$0 → $299/mo',bullets:['Up to 3 projects','Basic policies','Email support']},{name:'Growth',price:'$999/mo',bullets:['Unlimited projects','Advanced guardrails','SLA support']},{name:'Enterprise',price:'Custom',bullets:['SOCs & HITRUST mapping','PQC options','Dedicated support']}].map(t=>(
    <div key={t.name} className="card"><div className="text-sm text-slate-400">{t.name}</div><div className="text-3xl font-extrabold mt-1">{t.price}</div>
      <ul className="mt-4 text-sm text-slate-300 list-disc ml-4">{t.bullets.map(b=>(<li key={b}>{b}</li>))}</ul></div>))}</div></div>);}
