import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { Header } from 'components/header'
import { Hero } from 'components/hero'
import { About } from 'components/about'
import { Skills } from 'components/skills'


export default function Home({ allPostsData }) {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
