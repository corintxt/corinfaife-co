import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import '../styles/main.css'
import 'prismjs/themes/prism-tomorrow.css'

// Background pattern variants - uncomment one to use:
import '../styles/bg-dots.css'
// import '../styles/bg-blueprint.css'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function Nextra({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Load Prism for syntax highlighting
    if (typeof window !== 'undefined') {
      require('prismjs')
      require('prismjs/components/prism-python')
      require('prismjs/components/prism-bash')
      require('prismjs/components/prism-javascript')
      require('prismjs/components/prism-json')
      require('prismjs/components/prism-sql')
      require('prismjs/components/prism-git')
    }
  }, [])

  useEffect(() => {
    // Highlight code blocks on route change and initial load
    if (typeof window !== 'undefined' && window.Prism) {
      setTimeout(() => window.Prism.highlightAll(), 0)
    }
  }, [router.asPath])

  useEffect(() => {
    // Force full reload for Fast Refresh to update markdown content
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      let lastCompileTime = Date.now()

      const checkForUpdates = () => {
        const now = Date.now()
        if (now - lastCompileTime > 100 && now - lastCompileTime < 5000) {
          console.log('[Dev] Reloading page for markdown updates...')
          window.location.reload()
        }
      }

      // Listen for webpack HMR built event
      if (module.hot) {
        module.hot.addStatusHandler(status => {
          if (status === 'idle') {
            lastCompileTime = Date.now()
            setTimeout(checkForUpdates, 150)
          }
        })
      }
    }
  }, [])

  return (
    <>
      {/* Google Analytics */}
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `,
            }}
          />
        </>
      )}
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
