
import { phone } from '@/data/config'
export const metadata = { title:'Nakliyat Hizmetleri', description:'Evden eve, şehirler arası, asansörlü, ofis taşıma ve ambalajlama hizmetleri.' }
const services = ['Evden Eve Nakliyat','Şehirler Arası Nakliyat','Asansörlü Nakliyat','Ofis Taşıma','Parça Eşya Taşıma','Profesyonel Ambalajlama','Sigortalı Nakliyat','Kurumsal Taşımacılık','Eşya Depolama']
export default function Page(){return <section className="section"><div className="container"><h1>Profesyonel Nakliyat Hizmetleri</h1><p className="lead">Artum Nakliyat, taşınma sürecinizi güvenli ve planlı şekilde yönetir.</p><div className="grid">{services.map(s=><div className="card" key={s}><h3>{s}</h3><p className="muted">{s} için profesyonel ekip, doğru ambalajlama ve güvenilir teslimat.</p><a className="btn secondary" href={`tel:+90${phone}`}>Bilgi Al</a></div>)}</div></div></section>}
