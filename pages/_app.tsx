import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/globalStyles'
import themes from '../styles/themes'

import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['400','700','900'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={themes.light}>
        <GlobalStyles />
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
