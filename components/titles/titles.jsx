import * as React from 'react';
import styles from './titles.module.scss';


export const Title = ({ text }) => {
  return(
  <h3 className={styles.title}>{text}</h3>
  )
}