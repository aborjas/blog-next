import * as React from 'react';
import styles from './card.module.scss';


export const Card = ({title, image, text}) => {
  return (
      <div className={styles.container}>
        <picture className={styles.imgContainer}>
          <img src={image} className={styles.img} />
        </picture>
        <div className={styles.info}>
          <h4 className={styles.articleTitle}>{title}</h4>
          <p className={styles.text}>{text}</p>
          <a href="#" className={styles.btn}>Read more &#8594;</a>
        </div>
      </div>
  )
}
