import '../styles/globals.css'
import type { AppProps } from 'next/app'

// partials
import Header from "../partials/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
