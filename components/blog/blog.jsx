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
    title: "Loren sit amet a ratione elit voluptates",
    link: "#",
  },
  {
    image: "/images/articulo1.jpg",
    title: "Loren amet ipsum sit voluptates dolorem quante nole",
    link: "#",
  },
]

export const Blog = () => {
  return (
    <Section className={styles.container} id="blog">
      <div className={styles.titleContainer}>
        <h3 className={styles.title}><span className={styles.span2}>My</span> Blog</h3>
        <a href="#" className={styles.btnSee}>See all &#8594;</a>
      </div>
      <div className={styles.cardsContainer}>
        <Card {...cardList[0]}/>
        <Card title={cardList[1].title} image={cardList[1].image}/>
        <Card {...cardList[2]}/>
      </div>
    </Section>
  )
}