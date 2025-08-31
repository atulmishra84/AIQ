import type { Metadata } from 'next'; import './globals.css'; import Nav from '@/components/Nav'; import Footer from '@/components/Footer';
export const metadata:Metadata={title:'AIQ Security – AI & Quantum Security',description:'Govern AI & Agentic AI, prove compliance, and get quantum-ready.'};
export default function RootLayout({children}:{children:React.ReactNode}){return(<html lang="en"><body><Nav/><main>{children}</main><Footer/></body></html>);}
