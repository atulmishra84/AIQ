import { getProducts, getProduct } from '@/lib/content'; import ProductCard from '@/components/ProductCard';
export const dynamicParams=false; export function generateStaticParams(){return getProducts().map(p=>({slug:p.slug}));}
export default function Page({params}:{params:{slug:string}}){ const product=getProduct(params.slug);
  if(!product) return <div className="container py-20">Not found</div>;
  return(<div className="container py-16"><h1 className="text-3xl font-bold">{product.title}</h1>
    <p className="mt-2 max-w-2xl text-slate-300">{product.blurb}</p>
    <div className="mt-6 max-w-3xl"><ProductCard title={product.title} blurb={product.blurb} features={product.features}/></div></div>);}
