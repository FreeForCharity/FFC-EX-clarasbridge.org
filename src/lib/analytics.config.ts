// Analytics & tracking IDs - the single place to change them.
//
// These are NOT secrets. They are public, client-side identifiers baked into
// the static export and visible in page source anyway. They live here so a
// forking charity - or an automated assistant - can point the site at its own
// accounts by editing this one file. Provisioned by FFC workflow 704.
export const analyticsConfig = {
  // Google Tag Manager container ID, e.g. 'GTM-ABC1234'.
  gtmId: 'GTM-5DXNHQJQ',

  // Google Analytics 4 measurement ID, e.g. 'G-ABC1234567'. The GA4 tag itself
  // fires inside the GTM container; this is kept for reference/components.
  gaMeasurementId: 'G-4NT10KY46J',

  // Meta (Facebook) Pixel ID.
  metaPixelId: 'XXXXXXXXXXXXXXX',

  // Microsoft Clarity project ID.
  clarityProjectId: 'XXXXXXXX',
} as const

// The placeholder values shipped above. Loaders check against this list so
// that "leave a value as its placeholder to keep that integration
// effectively inert" (the promise a few lines up) is actually honored.
const PLACEHOLDER_IDS: readonly string[] = [
  'G-XXXXXXXXXX',
  'XXXXXXXXXXXXXXX',
  'XXXXXXXXXX',
  // clarityProjectId as shipped above (8 X's — both clarity variants listed
  // so the list stays aligned with reality even if the X-run regex changes).
  'XXXXXXXX',
]

/**
 * True when an analytics ID has been replaced with a real value. A falsy
 * or whitespace-only value, one of the shipped placeholders, or any
 * obviously-templated value (six or more consecutive X's) counts as NOT
 * configured, so the integration it belongs to stays inert.
 */
export function isConfigured(id: string | undefined | null): boolean {
  if (!id) return false
  const trimmed = id.trim()
  if (!trimmed) return false
  if (PLACEHOLDER_IDS.includes(trimmed)) return false
  if (/X{6,}/.test(trimmed)) return false
  return true
}
