// src/components/tracking/Pixels.tsx
// Píxeles de TikTok y Google (Analytics 4 / Google Ads, que también mide YouTube Ads).
// Quedan APAGADOS hasta que configures sus IDs en Vercel:
//   NEXT_PUBLIC_TIKTOK_PIXEL_ID   → ej. C1ABCDEFG2HIJKLMN
//   NEXT_PUBLIC_GOOGLE_TAG_ID     → ej. G-XXXXXXX (Analytics) o AW-XXXXXXX (Google Ads)
// Sin la variable, no se carga nada.

import Script from "next/script";

const TIKTOK_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;
const GOOGLE_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

const soloSeguro = (v: string) => /^[A-Za-z0-9-]+$/.test(v);

export function Pixels() {
  const tiktok = TIKTOK_ID && soloSeguro(TIKTOK_ID) ? TIKTOK_ID : null;
  const google = GOOGLE_ID && soloSeguro(GOOGLE_ID) ? GOOGLE_ID : null;

  return (
    <>
      {tiktok && (
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{};ttq._i[e]=[];ttq._i[e]._u=r;ttq._t=ttq._t||{};ttq._t[e]=+new Date;ttq._o=ttq._o||{};ttq._o[e]=n||{};var o=d.createElement("script");o.type="text/javascript";o.async=!0;o.src=r+"?sdkid="+e+"&lib="+t;var a=d.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};ttq.load('${tiktok}');ttq.page();}(window,document,'ttq');`}
        </Script>
      )}

      {google && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${google}`} strategy="afterInteractive" />
          <Script id="google-tag" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${google}');`}
          </Script>
        </>
      )}
    </>
  );
}
