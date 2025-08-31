export default function Page(){ return(<div className="container py-16">
  <h1 className="text-3xl font-bold">Integrations – Ad Solutions</h1>
  <p className="mt-2 text-slate-300 max-w-3xl">Connect AIQ Security to your marketing stack with privacy-first conversion tracking. We support server-side tagging, consent enforcement, and policy‑guarded data flows.</p>
  <div className="grid md:grid-cols-3 gap-6 mt-8">{[{name:'Google Ads / GA4',desc:'Consent Mode v2, server-side tagging, Measurement Protocol.'},{name:'Meta Ads',desc:'Conversions API, hashed user data, event policy gating.'},{name:'LinkedIn Ads',desc:'Insight Tag with first-party storage and server events.'}].map(i=>(
    <div key={i.name} className="card"><h3 className="font-semibold">{i.name}</h3><p className="mt-2 text-sm text-slate-300">{i.desc}</p>
      <ul className="mt-3 text-xs text-slate-400 list-disc ml-4"><li>Consent-aware firing</li><li>Redaction & guardrails</li><li>Immutable audit logs</li></ul></div>))}
  </div></div>);}
