import { phone, phoneDisplay, whatsapp, instagramUrl } from '@/data/config'
import { slugify } from '@/lib/slug'

const services = [
 ['Evden Eve Nakliyat','Eşyalarınızı özenle paketliyor, güvenle yeni adresinize taşıyoruz.','🏠'],
 ['Asansörlü Nakliyat','Yüksek katlarda güvenli ve hızlı taşıma işlemi gerçekleştiriyoruz.','🏗️'],
 ['Ofis & İşyeri Taşıma','İş akışınızı aksatmadan planlı ofis taşıma hizmeti sunuyoruz.','🏢'],
 ['Paketleme Hizmeti','Eşyalarınızı profesyonel malzemelerle koruma altına alıyoruz.','📦'],
 ['Eşya Depolama','Eşyalarınızı güvenli depolama alanlarında saklıyoruz.','🔒'],
 ['Şehirler Arası Nakliyat','Türkiye genelinde planlı ve güvenilir taşımacılık sağlıyoruz.','🚚'],
]
const bigCities = ['İstanbul','Ankara','İzmir','Bursa','Antalya','Kocaeli','Sakarya','Konya','Adana','Gaziantep','Samsun','Trabzon','Zonguldak','Eskişehir','Kayseri']
const testimonials = [
 ['Ahmet Yılmaz','İstanbul','Evimizi sorunsuz taşıdılar. Ekip çok profesyoneldi, tüm eşyalar sağlam ulaştı.'],
 ['Merve Demir','Ankara','Asansörlü taşıma hizmeti aldık. Zamanında geldiler, hızlı ve güvenli taşıma oldu.'],
 ['Mehmet Kaya','İzmir','Ofis taşıma işimizi kusursuz yaptılar. Planlı ve düzenli çalışmaları sayesinde hiç aksaklık yaşamadık.']
]

export default function Home(){
 return <>
  <header className="hero"><div className="container hero-grid"><div><div className="kicker">Profesyonel Nakliyat Hizmeti</div><h1>Eşyalarınız <span>Bizimle</span> Güvende</h1><p className="lead">Artum Nakliyat olarak eşyalarınızı özenle taşıyor, yeni adresinize güvenle ulaştırıyoruz. Türkiye'nin 81 ilinde profesyonel nakliyat hizmeti.</p><div className="actions"><a className="btn primary" href="#hizmetler">Hizmetlerimiz →</a><a className="btn dark" href={`tel:${phone}`}>☎ {phoneDisplay}</a><a className="btn whatsapp" href={`https://wa.me/${whatsapp}`}>WhatsApp</a><a className="btn instagram" href={instagramUrl}>Instagram</a></div></div><div className="truck-card"><b>ARTUM<br/>NAKLİYAT</b><small>Eşyalarınız bizimle evde hissedecek.</small></div></div></header>
  <section className="trust"><div className="container trust-grid"><div className="trust-item">☎ <b>7/24 Destek</b><span>Kesintisiz hizmet</span></div><div className="trust-item">🛡 <b>Sigortalı Taşıma</b><span>%100 güvence</span></div><div className="trust-item">👥 <b>Uzman Ekip</b><span>Deneyimli kadro</span></div><div className="trust-item">⏱ <b>Zamanında Teslimat</b><span>Planlı ve hızlı</span></div></div></section>
  <section id="hizmetler" className="section light"><div className="container"><div className="section-title"><div className="kicker">Hizmetlerimiz</div><h2>Profesyonel Nakliyat Hizmetleri</h2><p className="muted">Taşınma sürecinizi baştan sona planlıyor, güvenle tamamlıyoruz.</p></div><div className="service-grid">{services.map(([t,d,i])=><a href="/hizmetler" className="card" key={t}><div className="icon">{i}</div><h3>{t}</h3><p className="muted">{d}</p><b style={{color:'#ff6b00'}}>Detaylı Bilgi →</b></a>)}</div></div></section>
  <section className="section map-section"><div className="container map-grid"><div><div className="kicker">Türkiye'nin Her Yerine</div><h2>81 İlde Hizmet Veriyoruz!</h2><p className="muted">Türkiye'nin dört bir yanına güvenilir ve zamanında nakliyat hizmeti sunuyoruz.</p><div className="actions"><a className="btn primary" href="/hizmet-bolgeleri">Tüm İlleri Görüntüle</a></div></div><div className="mapbox"><div className="city-cloud">{bigCities.map(c=><a className="chip" href={`/iller/${slugify(c)}-evden-eve-nakliyat`} key={c}>📍 {c}</a>)}</div></div></div></section>
  <section className="section light"><div className="container"><div className="section-title"><div className="kicker">Müşteri Yorumları</div><h2>Müşterilerimiz Bizim İçin Ne Diyor?</h2></div><div className="testimonials">{testimonials.map(([n,c,t])=><div className="card" key={n}><div className="stars">★★★★★</div><p>{t}</p><b>{n}</b><br/><span className="muted">{c}</span></div>)}</div></div></section>
  <section className="section consult"><div className="container consult-box"><div><div className="kicker">Ücretsiz Keşif ve Danışmanlık</div><h2>Taşınma Süreciniz İçin Hemen Bilgi Alın</h2><p className="muted">Fiyat hesaplama formu yerine doğrudan iletişim kuruyoruz. Taşınma detaylarınızı dinleyip size en uygun çözümü telefon veya WhatsApp üzerinden sunuyoruz.</p></div><div className="actions"><a className="btn primary" href={`tel:${phone}`}>☎ Hemen Ara: {phoneDisplay}</a><a className="btn whatsapp" href={`https://wa.me/${whatsapp}`}>WhatsApp</a><a className="btn instagram" href={instagramUrl}>Instagram</a></div></div></section>
 </>
}
