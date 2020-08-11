import * as React from 'react';

import styles from './nav.module.scss';

const navigationList = [
  {
    link: '#about',
    name: 'About',
  },
  {
    link: '#skills',
    name: 'Skills',  },
  {
    link: '#blog',
    name: 'Blog',
    
  },
  {
    link: '#contact',
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