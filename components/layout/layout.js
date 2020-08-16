import Head from 'next/head'
import styles from './layout.module.scss'
import Link from 'next/link'


const name = 'Adriana Borjas'
export const siteTitle = `Adriana Borjas' Website`;

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Hello world! I'm Adriana Borjas"
        />
      </Head>
      <main>{children}</main>
      {!home && (
        <div className={styles.btnBox} >
          <Link href="/">
            <a className={styles.backToHome}>&#8592; Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}