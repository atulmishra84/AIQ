import { NextRequest, NextResponse } from 'next/server'; import { enforceConsent, redactPII } from '@/lib/policy';
export async function POST(req:NextRequest){ const consent=enforceConsent(req.headers); if(!consent.allowed) return NextResponse.json({ok:false,reason:consent.reason},{status:403});
  const payload=await req.json().catch(()=>({})); const {redacted,blocked}=redactPII(payload); if(blocked) return NextResponse.json({ok:false,reason:'Secret detected'},{status:400});
  const token=process.env.LINKEDIN_ACCESS_TOKEN; if(!token) return NextResponse.json({ok:false,reason:'Server not configured'},{status:500});
  const url='https://api.linkedin.com/v2/conversionEvents'; const res=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${token}`,'X-Restli-Protocol-Version':'2.0.0'},body:JSON.stringify(redacted)});
  const ok=res.ok; const text=await res.text(); return NextResponse.json({ok,upstream:text.slice(0,500)}); }