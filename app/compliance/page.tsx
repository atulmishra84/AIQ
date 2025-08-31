export default function Page(){ return(<div className="container py-16">
  <h1 className="text-3xl font-bold">Compliance & Assurance</h1>
  <div className="grid md:grid-cols-3 gap-6 mt-6 text-sm text-slate-300">
    <div className="card"><h4 className="font-semibold">Frameworks</h4><p className="mt-1 text-slate-400">HIPAA, HITRUST, NIST AI RMF, ISO 27001, SOC 2, CSA AI, OWASP AI, MITRE ATLAS (mapped).</p></div>
    <div className="card"><h4 className="font-semibold">Evidence</h4><p className="mt-1 text-slate-400">Continuous control tests, attestation packages, auditor portals, immutable logs.</p></div>
    <div className="card"><h4 className="font-semibold">Privacy</h4><p className="mt-1 text-slate-400">Consent Mode, DSR workflows, data minimization, first‑party storage, encryption in transit & at rest.</p></div>
  </div></div>);}
