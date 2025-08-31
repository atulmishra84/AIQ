import fs from 'node:fs'; import path from 'node:path';
export type Product={slug:string;title:string;blurb:string;features:string[];frameworks?:string[]};
export function getProducts():Product[]{const file=path.join(process.cwd(),'content','products.json');return JSON.parse(fs.readFileSync(file,'utf8')).items as Product[];}
export function getProduct(slug:string){return getProducts().find(p=>p.slug===slug)||null;}
export function getHome(){const file=path.join(process.cwd(),'content','home.json');return JSON.parse(fs.readFileSync(file,'utf8'));}
