
import { regions } from '@/data/locations'
import { phone, phoneDisplay } from '@/data/config'

const services = ['Evden Eve Nakliyat','Şehirler Arası Nakliyat','Asansörlü Nakliyat','Ofis Taşıma','Parça Eşya Taşıma','Profesyonel Ambalajlama']

export default function Home() {
  return <>
    <header className="hero"><div className="container hero-grid"><div><span className="badge">🚚 81 İl • Profesyonel Taşıma</span><h1>Eşyalarınız bizimle evde hissedecek.</h1><p className="lead">Artum Nakliyat; Türkiye geneli evden eve, şehirler arası, asansörlü ve sigortalı nakliyat hizmetlerinde hızlı, planlı ve güvenilir çözümler sunar.</p><div className="btns"><a className="btn primary" href={`tel:+90${phone}`}>📞 {phoneDisplay}</a><a className="btn secondary" href={`https://wa.me/90${phone}`}>WhatsApp</a></div></div><div className="truck">ARTUM NAKLİYAT<br/><small>Premium Taşımacılık Deneyimi</small></div></div></header>
    <section className="section"><div className="container"><h2>Hizmetlerimiz</h2><p className="muted">Taşınma sürecinizi baştan sona profesyonelce yönetiyoruz.</p><div className="grid">{services.map(s=><div className="card" key={s}><div className="icon">🚚</div><h3>{s}</h3><p className="muted">Türkiye geneli güvenilir, hızlı ve özenli {s.toLowerCase()} hizmeti.</p></div>)}</div></div></section>
    <section className="section" id="neden"><div className="container"><h2>Neden Artum Nakliyat?</h2><div className="stats"><div className="stat"><b>81</b><span>İle Hizmet</span></div><div className="stat"><b>7/24</b><span>Telefon Desteği</span></div><div className="stat"><b>%100</b><span>Özenli Paketleme</span></div><div className="stat"><b>Hızlı</b><span>Planlama</span></div></div></div></section>
    <section className="section"><div className="container"><h2>Hizmet Bölgeleri</h2><p className="muted">7 bölge ve 81 il için SEO uyumlu hizmet sayfaları.</p><div className="region-grid">{Object.entries(regions).map(([r, list])=><a className="card" href={`/bolgeler/${slugify(r)}-nakliyat`} key={r}><h3>{r}</h3><p className="muted">{list.length} ilde profesyonel hizmet</p></a>)}</div></div></section>
    <section className="section cta" id="iletisim"><div className="container"><h2>Taşınma için hemen arayın</h2><p className="muted">Teklif formu yok. En hızlı iletişim telefon ve WhatsApp üzerinden.</p><div className="phone">{phoneDisplay}</div><div className="btns"><a className="btn primary" href={`tel:+90${phone}`}>Hemen Ara</a><a className="btn secondary" href={`https://wa.me/90${phone}`}>WhatsApp</a></div></div></section>
  </>
}

function slugify(s:string){ return s.toLocaleLowerCase('tr-TR').replaceAll('ı','i').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ş/g,'s').replace(/ö/g,'o').replace(/ç/g,'c').replace(/\s+/g,'-') }
