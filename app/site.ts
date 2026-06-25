/**
 * Canonical site URL used for metadata, OG image, canonical, robots and sitemap.
 *
 * On Vercel this resolves to the live production domain (e.g. the *.vercel.app
 * URL today, or surfix.co.za once the custom domain is added as production), so
 * the og:image is a real, fetchable URL — link unfurlers like WhatsApp need that.
 * Falls back to surfix.co.za locally / when the env var is absent.
 * Override explicitly with NEXT_PUBLIC_SITE_URL if needed.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://surfix.co.za")
).replace(/\/$/, "");
