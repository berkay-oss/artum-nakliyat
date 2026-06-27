import './globals.css'
import type { Metadata } from 'next'
import { phone, phoneDisplay, instagram } from '@/data/config'

export const metadata: Metadata = {
  metadataBase: new URL('https://artumnakliyat.com'),
  title: { default:'Artum Nakliyat | Türkiye Geneli Evden Eve Nakliyat', template:'%s | Artum Nakliyat' },
  description:'Artum Nakliyat; Türkiye geneli evden eve, şehirler arası, asansörlü ve sigortalı nakliyat hizmeti sunar.',
  openGraph:{title:'Artum Nakliyat',description:'Türkiye geneli profesyonel nakliyat.',url:'https://artumnakliyat.com',siteName:'Artum Nakliyat',locale:'tr_TR',type:'website'},
  alternates:{canonical:'https://artumnakliyat.com'}
}

export default function RootLayout({children}:{children:React.ReactNode}){
return <html lang="tr"><body>
<div className="top"><div className="container"><span>Türkiye Geneli Profesyonel Nakliyat</span><a href={`tel:+90${phone}`}>📞 {phoneDisplay}</a></div></div>
<nav className="nav"><div className="container"><a className="brand" href="/">ARTUM <b>NAKLİYAT</b></a><div className="menu"><a href="/hizmetler">Hizmetler</a><a href="/hizmet-bolgeleri">Bölgeler</a><a href="/#harita">81 İl</a><a href="/#iletisim">İletişim</a></div><a className="call" href={`tel:+90${phone}`}>Hemen Ara</a></div></nav>
{children}
<footer><div className="container">© 2026 Artum Nakliyat • {phoneDisplay} • Instagram: @{instagram}</div></footer>
<a className="sticky" href={`tel:+90${phone}`}>📞 Ara</a>
</body></html>
}
