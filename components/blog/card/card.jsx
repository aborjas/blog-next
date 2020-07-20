import * as React from 'react';
import styles from './card.module.scss';


export const Card = ({title, image, text}) => {
  return (
      <div className={styles.container}>
          <img src={image} className={styles.img} />
        <div className={styles.info}>
          <h4 className={styles.articleTitle}>{title}</h4>
          <div className={styles.btnContainer}>
            <a href="#" className={styles.btn}>Read more &#8594;</a>
          </div>
        </div>
      </div>
  )
}
