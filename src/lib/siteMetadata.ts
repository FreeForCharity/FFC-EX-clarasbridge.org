import type { Metadata } from 'next'

// Get basePath for GitHub Pages deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://clarasbridge.org'),
  title: {
    default: "Clara's Bridge | Recovery Mentorship & Support",
    template: "%s | Clara's Bridge",
  },
  description:
    "Clara's Bridge supports individuals rebuilding their lives in recovery by providing structured mentorship, regular check-ins, and connections to community resources.",
  keywords: [
    'recovery',
    'mentorship',
    'addiction recovery',
    'nonprofit',
    'community support',
    'sober living',
    'life skills',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://clarasbridge.org/',
    siteName: "Clara's Bridge",
    title: "Clara's Bridge | Recovery Mentorship & Support",
    description:
      "Supporting individuals rebuilding their lives in recovery through structured mentorship and community connections.",
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: "Clara's Bridge",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '',
    title: "Clara's Bridge | Recovery Mentorship & Support",
    description:
      "Supporting individuals rebuilding their lives in recovery through structured mentorship and community connections.",
    images: ['/web-app-manifest-512x512.png'],
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: '32x32' },
      { url: `${basePath}/icon.png`, type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: `${basePath}/apple-icon.png`, sizes: '180x180', type: 'image/png' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}
