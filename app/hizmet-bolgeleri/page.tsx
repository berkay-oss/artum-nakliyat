
import { regions } from '@/data/locations'
export const metadata = { title:'Türkiye Geneli Nakliyat Hizmet Bölgeleri | Artum Nakliyat', description:'Artum Nakliyat 81 ilde evden eve ve şehirler arası nakliyat hizmeti sunar.' }
export default function Page(){return <section className="section"><div className="container"><h1>Türkiye Geneli Hizmet Bölgeleri</h1><p className="lead">Karadeniz Bölgesi başta olmak üzere Türkiye'nin 81 ilinde nakliyat hizmeti.</p>{Object.entries(regions).map(([r,cities])=><div className="card" style={{marginTop:24}} key={r}><h2>{r}</h2><div className="area-list">{cities.map(c=><a key={c} href={`/iller/${slugify(c)}-evden-eve-nakliyat`}>{c} Evden Eve Nakliyat</a>)}</div></div>)}</div></section>}
function slugify(s:string){ return s.toLocaleLowerCase('tr-TR').replaceAll('ı','i').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ş/g,'s').replace(/ö/g,'o').replace(/ç/g,'c').replace(/\s+/g,'-') }
