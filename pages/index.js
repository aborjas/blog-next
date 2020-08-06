import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { Header } from 'components/header'
import { Body } from 'components/body'
import { Footer } from 'components/footer'


export default function Home({ allPostsData }) {
  return (
    <>
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
