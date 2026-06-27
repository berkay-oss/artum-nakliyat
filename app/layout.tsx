import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { phone, phoneDisplay, whatsapp, email, instagramUser, instagramUrl } from '@/data/config'

export const metadata: Metadata = {
  metadataBase: new URL('https://artumnakliyat.com'),
  title: { default:'Artum Nakliyat | Türkiye Geneli Evden Eve Nakliyat', template:'%s | Artum Nakliyat' },
  description:'Artum Nakliyat; Türkiye geneli evden eve, şehirler arası, asansörlü ve sigortalı nakliyat hizmeti sunar.',
  keywords:['evden eve nakliyat','şehirler arası nakliyat','asansörlü nakliyat','Artum Nakliyat','Türkiye nakliyat'],
  openGraph:{title:'Artum Nakliyat',description:'Türkiye geneli profesyonel nakliyat.',url:'https://artumnakliyat.com',siteName:'Artum Nakliyat',locale:'tr_TR',type:'website'},
  twitter:{card:'summary_large_image',title:'Artum Nakliyat',description:'Türkiye geneli profesyonel nakliyat.'},
  alternates:{canonical:'https://artumnakliyat.com'}
}

export default function RootLayout({children}:{children:React.ReactNode}){
const jsonLd = {
  '@context':'https://schema.org',
  '@type':'MovingCompany',
  name:'Artum Nakliyat',
  url:'https://artumnakliyat.com',
  telephone:'+905307926734',
  email:'berkay@artumnakliyat.com',
  areaServed:'Türkiye',
  slogan:'Eşyalarınız bizimle evde hissedecek',
  sameAs:['https://www.instagram.com/artumnakliyat']
}
return <html lang="tr"><body>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
<div className="topbar"><div className="container"><span>📍 Türkiye'nin 81 ilinde güvenilir nakliye hizmeti</span><span className="toplinks"><a href={`tel:${phone}`}>☎ {phoneDisplay}</a><a href={instagramUrl}>📸 Instagram</a></span></div></div>
<nav className="nav"><div className="container"><a className="brand" href="/"><img src="/logo.png" alt="Artum Nakliyat Logo"/><span>ARTUM <b>NAKLİYAT</b></span></a><div className="menu"><a href="/">Anasayfa</a><a href="/kurumsal">Kurumsal</a><a href="/hizmetler">Hizmetlerimiz</a><a href="/hizmet-bolgeleri">Şehirlerimiz</a><a href="/blog">Blog</a><a href="/iletisim">İletişim</a></div><a className="navcall" href={`tel:${phone}`}>Hemen Ara</a></div></nav>
{children}
<section className="contact-strip"><div className="container contact-grid"><div className="contact-box">☎ <b>Telefon</b><br/><a href={`tel:${phone}`}>{phoneDisplay}</a></div><div className="contact-box">💬 <b>WhatsApp</b><br/><a href={`https://wa.me/${whatsapp}`}>{phoneDisplay}</a></div><div className="contact-box">✉ <b>E-Posta</b><br/><a href={`mailto:${email}`}>{email}</a></div><div className="contact-box">📸 <b>Instagram</b><br/><a href={instagramUrl}>@{instagramUser}</a></div></div></section>
<footer className="footer"><div className="container footergrid"><div><img src="/logo.png" alt="Artum Nakliyat"/><p>Artum Nakliyat, Türkiye'nin 81 ilinde güvenilir, hızlı ve sigortalı nakliyat hizmetleri sunar.</p></div><div><b>Hızlı Linkler</b><p><a href="/kurumsal">Hakkımızda</a><br/><a href="/hizmetler">Hizmetlerimiz</a><br/><a href="/hizmet-bolgeleri">Şehirlerimiz</a><br/><a href="/iletisim">İletişim</a></p></div><div><b>Hizmetlerimiz</b><p>Evden Eve Nakliyat<br/>Asansörlü Nakliyat<br/>Ofis Taşıma<br/>Paketleme<br/>Eşya Depolama</p></div><div><b>Sosyal Medya</b><p><a href={instagramUrl}>Instagram: @{instagramUser}</a></p><p className="small">© 2026 Artum Nakliyat. Tüm hakları saklıdır.</p></div></div></footer>
<div className="sticky-actions"><a className="phone" href={`tel:${phone}`}>☎</a><a className="wa" href={`https://wa.me/${whatsapp}`}>☘</a><a className="ig" href={instagramUrl}>◎</a></div>
<GoogleAnalytics gaId="G-32CXT61NQN" />
</body></html>
}
