import "./globals.css"
import Script from "next/script"
import type { Metadata } from "next"
import { GlobalToaster } from "@/components/GlobalToaster"
//import PromoBanner from "@/components/PromoBanner"
import StickyCTA from "@/components/StickyCTA"

export const metadata: Metadata = {
  metadataBase: new URL("https://waliasuh.grahadhuafa.org"),
  title: {
    default: "Program Kakak Asuh Yatim Dhuafa Tahfizh",
    template: "%s | Graha Dhuafa Indonesia",
  },
  description:
    "Program Kakak Asuh & Beasiswa Pendidikan Yatim Dhuafa Tahfizh. Mulai Rp50.000/bulan, bantu anak-anak tetap sekolah & menghafal Al-Qur’an.",
  keywords: [
    "kakak asuh yatim",
    "beasiswa yatim dhuafa",
    "sedekah pendidikan",
    "donasi tahfizh",
    "graha dhuafa indonesia",
  ],
  authors: [{ name: "LAZ Graha Dhuafa Indonesia" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://waliasuh.grahadhuafa.org",
    siteName: "Graha Dhuafa Indonesia",
    images: [
      {
        url: "/og-kakak-asuh.jpg",
        width: 1200,
        height: 630,
        alt: "Program Kakak Asuh Yatim Dhuafa Tahfizh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        {/* JSON-LD ORGANIZATION */}
        <Script
          id="jsonld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "LAZ Graha Dhuafa Indonesia",
              url: "https://runforroots.id",
              logo: "https://runforroots.id/logo.png",
              sameAs: [
                "https://instagram.com/grahadhuafa",
                "https://facebook.com/gdi",
              ],
            }),
          }}
        />

        {/* GOOGLE TAG */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>

        {/* META PIXEL */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'META_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* TIKTOK PIXEL */}
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;
              var ttq=w[t]=w[t]||[];
              ttq.methods=["page","track","identify"];
              ttq.setAndDefer=function(t,e){t[e]=function(){
              t.push([e].concat(Array.prototype.slice.call(arguments,0))) }};
              for(var i=0;i<ttq.methods.length;i++)
              ttq.setAndDefer(ttq,ttq.methods[i]);
              ttq.load=function(e){
              var i=d.createElement("script");
              i.async=true;i.src="https://analytics.tiktok.com/i18n/pixel/events.js?sdkid="+e;
              var n=d.getElementsByTagName("script")[0];
              n.parentNode.insertBefore(i,n)};
              ttq.load('TIKTOK_PIXEL_ID');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>

      </head>

      <body>
        {children}
        <GlobalToaster />
        
         <StickyCTA />
      </body>
    </html>
  )
}
