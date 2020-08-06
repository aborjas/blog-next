import * as React from 'react';
import styles from './blog.module.scss';
import { Card } from './card';
import {Section} from 'components/section';



const cardList = [
  {
    image: "/images/articulo2.jpg",
    title: "From petroleum engineer to frontend developer",
    link: "#",
  },
  {
    image: "/images/article1.jpg",
    title: "First steps to become a frontend developer",
    link: "#",
  },
  {
    image: "/images/articulo1.jpg",
    title: "Loren amet ipsum sit voluptates dolorem quante nole",
    link: "#",
  },
]

export const Blog = ({ posts }) => {
  return (
    <Section className={styles.container} id="blog">
      <div className={styles.titleContainer}>
        <h3 className={styles.title}><span className={styles.span2}>My</span> Blog</h3>
        <a href="#" className={styles.btnSee}>See all &#8594;</a>
      </div>
      <div className={styles.cardsContainer}>
        {posts.map(post => (
          <Card id={post.id} title={post.title} image={post.image}/>
        ))}
      </div>
    </Section>
  )
}