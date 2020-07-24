import * as React from 'react';
import styles from './section.module.scss';

export const Section = ({ children, className, id }) => {
  return (
    <section className={`${className} ${styles.section}`} id={id}>
      {children}
    </section>
  )
}