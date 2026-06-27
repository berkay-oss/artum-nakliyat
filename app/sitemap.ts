import { MetadataRoute } from 'next'
import { regions } from '@/data/locations'
import { slugify } from '@/lib/slug'
const domain = 'https://artumnakliyat.com'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = ['', '/kurumsal', '/hizmetler', '/hizmet-bolgeleri', '/blog', '/iletisim', '/kvkk', '/gizlilik-politikasi'].map(p=>({url:`${domain}${p}`, lastModified:new Date(), changeFrequency:'weekly' as const, priority:p===''?1:.8}))
  const regionUrls = Object.keys(regions).map(r=>({url:`${domain}/bolgeler/${slugify(r)}-nakliyat`, lastModified:new Date(), changeFrequency:'weekly' as const, priority:.8}))
  const cityUrls = Object.values(regions).flat().map(c=>({url:`${domain}/iller/${slugify(c)}-evden-eve-nakliyat`, lastModified:new Date(), changeFrequency:'weekly' as const, priority:.75}))
  return [...base, ...regionUrls, ...cityUrls]
}
