import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { Header } from 'components/header'
import { Body } from 'components/body'
import { Footer } from 'components/footer'
import { NextSeo } from 'next-seo';


export default function Home({ allPostsData }) {
  return (
    <>
      <NextSeo
      title="Adriana Borjas"
      description="Hello there! I'm Adriana Borjas, an engineer and front-end developer with additional studies in graphic design. Take a look of my work here."
      canonical="https://adriborjas.com/"
      openGraph={{
        url: 'https://adriborjas.com/',
        title: 'Adriana Borjas',
        description: `Hello there! I'm an engineer and front-end developer with additional studies in graphic design. Take a look of my work here.`,
        images: [
          {
            url: 'https://adriborjas.com/images/fondo.png',
            width: 800,
            height: 600,
            alt: 'img alt',
          }
        ],
        site_name: 'Adriana Borjas',
      }}
      />
      <Header />
      <Body posts={allPostsData}/>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData: allPostsData.slice(0, 3)
    }
  }
}
