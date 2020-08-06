import * as React from 'react';
import styles from './card.module.scss';
import Link from 'next/link';

export const Card = ({title, image, id}) => {
  return (
    <Link href="/posts/[id]" as={`/posts/${id}`}>
      <a className={styles.container}>
        <img src={image} className={styles.img} />
        <div className={styles.info}>
          <h4 className={styles.articleTitle}>{title}</h4>
          <div className={styles.btnContainer}>
            <a className={styles.btn}>Read more &#8594;</a>
          </div>
        </div>
      </a>
    </Link>  
  )
}
