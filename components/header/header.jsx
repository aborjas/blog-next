import * as React from 'react';

import styles from './header.module.scss';
import { Logo } from './logo';
import { Nav } from './nav';
export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Logo />
        <Nav />
      </div>
    </header>
  )
}