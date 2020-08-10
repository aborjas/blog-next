import * as React from 'react';

import styles from './nav.module.scss';

const navigationList = [
  {
    link: 'https://adriborjas/#about',
    name: 'About',
  },
  {
    link: 'https://adriborjas/#skills',
    name: 'Skills',  },
  {
    link: 'https://adriborjas/#blog',
    name: 'Blog',
    
  },
  {
    link: 'https://adriborjas/#contact',
    name: 'Contact',
  },
]

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navigationList.map((value) => (
            <li className={styles.item}>
              <a href={value.link} className={styles.ancla}>
                {value.name}
              </a>
            </li>
        ))}
      </ul>
    </nav>
  )
}