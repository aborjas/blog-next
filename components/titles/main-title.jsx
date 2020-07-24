import * as React from 'react';
import styles from './main-title.module.scss';


export const MainTitle = ({ title }) => {
  const titleArray = title.split(' ')
  return(
    <div className={styles.titleContainer}>
      <h3 className={styles.title}><span className={styles.span2}>{titleArray[0]}</span> {titleArray[1]}</h3>
    </div>
  )
}