import fs from 'node:fs'; import path from 'node:path';
type Policies={consent:{required:boolean;header:string};redaction:{pii_patterns:Record<string,string>};blocking:{deny_if_no_consent:boolean;deny_if_contains_secret:boolean};};
function loadPolicies():Policies{
  const file=path.join(process.cwd(),'content','policies','policies.yaml'); const text=fs.readFileSync(file,'utf8');
  const lines=text.split(/\r?\n/); const out:any={consent:{},redaction:{pii_patterns:{}},blocking:{}}; let section:string|null=null; let sub:string|null=null;
  for(const raw of lines){const line=raw.trim(); if(!line||line.startsWith('#')||!line.includes(':')) continue; const indent=(raw.match(/^\s*/)||[''])[0].length;
    const [k,...rest]=line.split(':'); const v=rest.join(':').trim();
    if(indent===0){section=k; sub=null; continue;}
    if(indent===2){ if(section==='redaction'&&k==='pii_patterns'){sub='pii_patterns'; continue;}
      (out[section!]||(out[section!]={}))[k]=(v==='true'||v==='false')?(v==='true'):v.replace(/^"|"$/g,'').replace(/^\'|\'$/g,''); continue;}
    if(indent===4&&section==='redaction'&&sub==='pii_patterns'){ out.redaction.pii_patterns[k]=v.replace(/^"|"$/g,'').replace(/^\'|\'$/g,'');}
  } return out as Policies;
}
export function enforceConsent(headers:Headers){const p=loadPolicies(); if(!p.consent.required) return {allowed:true}; const key=p.consent.header.toLowerCase(); const val=headers.get(key)||'false';
  if(val!=='true'&&p.blocking.deny_if_no_consent) return {allowed:false,reason:'Consent not granted'}; return {allowed:true};}
export function redactPII(payload:any){const p=loadPolicies(); const regexes=Object.values(p.redaction.pii_patterns).map(x=>new RegExp(x,'g')); let blocked=false;
  const replacer=(k:string,v:any)=>{if(typeof v==='string'){let r=v; for(const rg of regexes){r=r.replace(rg,'[REDACTED]');} if(r!==v&&p.blocking.deny_if_contains_secret) blocked=true; return r;} return v;};
  const redacted=JSON.parse(JSON.stringify(payload),replacer); return {redacted,blocked};}
