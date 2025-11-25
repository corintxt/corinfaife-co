import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import '../styles/main.css'
import 'prismjs/themes/prism-tomorrow.css'

// Background pattern variants - uncomment one to use:
import '../styles/bg-dots.css'
// import '../styles/bg-blueprint.css'

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

  return (
    <>
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
