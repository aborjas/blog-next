import '../styles/main.scss'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
  <>
   <Head>
    <link rel="icon" href="/favicon.ico" />
    <title>Adriana Borjas</title>
        <meta
          name="description"
          content="Hello world! I'm Adriana Borjas"
        />
    </Head>
    <Component {...pageProps} />
   
  </>
  )
}