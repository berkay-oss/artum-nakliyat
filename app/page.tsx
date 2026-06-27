
import { regions } from '@/data/locations'
import { phone, phoneDisplay } from '@/data/config'
import { slugify } from '@/lib/slug'

const services = ['Evden Eve Nakliyat','Şehirler Arası Nakliyat','Asansörlü Nakliyat','Ofis Taşıma','Parça Eşya Taşıma','Profesyonel Ambalajlama']
const bigCities = ['İstanbul','Ankara','İzmir','Bursa','Antalya','Kocaeli','Samsun','Trabzon','Zonguldak','Gaziantep','Adana','Konya']

export default function Home(){
return <>
<header className="hero"><div className="container hero-grid"><div><span className="badge">🚚 81 İl • Premium Taşımacılık</span><h1>Türkiye'nin her yerine güvenle taşıyoruz.</h1><p className="lead">Artum Nakliyat; evden eve, şehirler arası, asansörlü ve sigortalı nakliyatta profesyonel ekip, hızlı planlama ve güçlü iletişim sunar.</p><div className="btns"><a className="btn primary" href={`tel:+90${phone}`}>📞 {phoneDisplay}</a><a className="btn secondary" href={`https://wa.me/90${phone}`}>WhatsApp ile Yaz</a></div></div><div className="truck-stage"><div className="truck-art">ARTUM<br/>NAKLİYAT<small>Kurumsal • Hızlı • Güvenilir</small></div></div></div></header>

<section className="section"><div className="container"><h2>Hizmetlerimiz</h2><p className="muted">Taşınma sürecini baştan sona planlıyoruz.</p><div className="grid">{services.map((s,i)=><a className="card" href="/hizmetler" key={s}><div className="icon">{['🏠','🚚','🏗️','🏢','📦','🛡️'][i]}</div><h3>{s}</h3><p className="muted">Türkiye geneli profesyonel {s.toLowerCase()} hizmeti.</p></a>)}</div></div></section>

<section className="section" id="harita"><div className="container"><h2>81 İlde Hizmet</h2><p className="muted">Karadeniz ve büyük şehirler başta olmak üzere Türkiye'nin tamamına nakliyat çözümleri.</p><div className="map"><h3>Popüler Hizmet Şehirleri</h3><div className="city-cloud">{bigCities.map(c=><a className="chip" key={c} href={`/iller/${slugify(c)}-evden-eve-nakliyat`}>{c} Nakliyat ✅</a>)}</div></div></div></section>

<section className="section"><div className="container"><h2>Yapay Zekâ Destekli Yönlendirme</h2><div className="ai-box"><p className="muted">Ziyaretçi “İstanbul'dan Trabzon'a taşınacağım” yazdığında ilgili şehir ve hizmet sayfasına yönlendirecek altyapı için hazır tasarım.</p><div className="searchbar"><input placeholder="Örn: İstanbul'dan Trabzon'a taşınacağım" /><button>Ara</button></div></div></div></section>

<section className="section" id="neden"><div className="container"><h2>Neden Artum Nakliyat?</h2><div className="stats"><div className="stat"><b>81</b><span>İle Hizmet</span></div><div className="stat"><b>7/24</b><span>Telefon Desteği</span></div><div className="stat"><b>%100</b><span>Özenli Paketleme</span></div><div className="stat"><b>Hızlı</b><span>Planlama</span></div></div></div></section>

<section className="section"><div className="container"><h2>Galeri</h2><div className="gallery"><div className="ph">Premium Nakliye Aracı</div><div className="ph">Asansörlü Taşıma</div><div className="ph">Profesyonel Paketleme</div></div></div></section>

<section className="section"><div className="container"><h2>Hizmet Bölgeleri</h2><div className="grid">{Object.entries(regions).map(([r,list])=><a className="card" href={`/bolgeler/${slugify(r)}-nakliyat`} key={r}><h3>{r}</h3><p className="muted">{list.length} ilde profesyonel hizmet</p></a>)}</div></div></section>

<section className="section cta" id="iletisim"><div className="container"><h2>Taşınma için hemen arayın</h2><p className="muted">Form yok. En hızlı iletişim telefon ve WhatsApp üzerinden.</p><div className="phone">{phoneDisplay}</div><div className="btns"><a className="btn primary" href={`tel:+90${phone}`}>Hemen Ara</a><a className="btn secondary" href={`https://wa.me/90${phone}`}>WhatsApp</a></div></div></section>
</>
}
