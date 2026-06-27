
import { regions } from '@/data/locations'
import { slugify } from '@/lib/slug'
export const metadata = { title:'Türkiye Geneli Nakliyat Hizmet Bölgeleri', description:'Artum Nakliyat 81 ilde evden eve ve şehirler arası nakliyat hizmeti sunar.' }
export default function Page(){return <section className="section"><div className="container"><h1>Türkiye Geneli Hizmet Bölgeleri</h1><p className="lead">Karadeniz Bölgesi ve büyük şehirler dahil Türkiye'nin 81 ilinde nakliyat hizmeti.</p>{Object.entries(regions).map(([r,cities])=><div className="card" style={{marginTop:24}} key={r}><h2>{r}</h2><div className="area-list">{cities.map(c=><a key={c} href={`/iller/${slugify(c)}-evden-eve-nakliyat`}>{c} Evden Eve Nakliyat</a>)}</div></div>)}</div></section>}
