import * as React from 'react';
import styles from './logo.module.scss';
import Link from 'next/link';


export const Logo = () => {
  return (
    <Link href="#">
      <a className={styles.logo}>
        <img className={styles.icon} src="/images/logo.png"/>
      </a>
    </Link>
  )
}