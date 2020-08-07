import * as React from 'react';
import styles from './article.module.scss';
import Layout from '../layout/layout'
import Head from 'next/head'
import Date from '../../components/date'

export const Article = ({ postData }) => {
  return (
    <Layout >
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={styles.art}>
      <div className={styles.dateBox}>
          <Date className={styles.date} dateString={postData.date} />
        </div>
        <h1 className={styles.artTitle}>{postData.title}</h1>
        <img src={postData.image} className={styles.img} />
        <div className={styles.mdText} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
} 