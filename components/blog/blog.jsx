import * as React from 'react';
import styles from './blog.module.scss';
import { Card } from './card';


const cardList = [
  {
    image: "/images/articulo1.jpg",
    title: "Loren ipsum",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro atque ab recusandae, voluptates repellendus ratione tempora.",
  },
  {
    image: "/images/articulo2.jpg",
    title: "Loren sit",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit recusandae, volup tempora tates ratione repellendus.",
  },
  {
    image: "/images/article1.jpg",
    title: "Loren amet",
    text: "Lorem ipsum dolor sit amet consectetur a repellendus ratione dipisicing elit. Porro atque ab recusandae, voluptates repellendus ratione tempora.",
  },
]

export const Blog = () => {
  return (
    <section id="blog">
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}><span className={styles.span2}>My</span> Blog</h3>
        </div>
        <div className={styles.cardsContainer}>
          <Card {...cardList[0]}/>
          <Card title={cardList[1].title} image={cardList[1].image} text={cardList[1].text}/>
          <Card {...cardList[2]}/>
        </div>
      </div>
    </section>
  )
}