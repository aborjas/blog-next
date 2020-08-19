import '../styles/main.scss'
import Head from 'next/head'
import App from 'next/app'
import Router from 'next/router'
import { initGA, logPageView } from '../lib/analytics'



export default class MyApp extends App {
  componentDidMount() {
   if (process.env.NODE_ENV != 'development') {
    initGA()
    logPageView()
    Router.events.on('routeChangeComplete', logPageView)
   }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Adriana Borjas</title>
          <meta
            name="description"
            content="Hello world! I'm Adriana Borjas"
          />
       </Head>
       <Component {...pageProps} />
    </>)
  }
}