
import { MetadataRoute } from 'next'
import { regions } from '@/data/locations'
const domain = 'https://artumnakliyat.com'
function slugify(s:string){ return s.toLocaleLowerCase('tr-TR').replaceAll('ı','i').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ş/g,'s').replace(/ö/g,'o').replace(/ç/g,'c').replace(/\s+/g,'-') }
export default function sitemap(): MetadataRoute.Sitemap {
  const base = ['', '/hizmetler', '/hizmet-bolgeleri'].map(p=>({url:`${domain}${p}`, lastModified:new Date(), changeFrequency:'weekly' as const, priority:p===''?1:.8}))
  const regionUrls = Object.keys(regions).map(r=>({url:`${domain}/bolgeler/${slugify(r)}-nakliyat`, lastModified:new Date(), changeFrequency:'weekly' as const, priority:.8}))
  const cityUrls = Object.values(regions).flat().map(c=>({url:`${domain}/iller/${slugify(c)}-evden-eve-nakliyat`, lastModified:new Date(), changeFrequency:'weekly' as const, priority:.75}))
  return [...base, ...regionUrls, ...cityUrls]
}
