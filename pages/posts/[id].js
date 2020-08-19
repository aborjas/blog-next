
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { Article } from 'components/article'
import { NextSeo } from 'next-seo';


export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({postData}) {
  return (
    <>  
      <NextSeo
      title={postData.title}
      description={postData.description}
      canonical={`https://adriborjas.com/posts/${id}`}
      openGraph={{
        type: 'website',
        url: `https://adriborjas.com/posts/${id}`,
        title: postData.title,
        description: postData.description,
        images: [
          {
            url: postData.image,
          }
        ],
        site_name: 'Adriana Borjas',
      }}
      />
      <Article postData={postData} />
    </>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}