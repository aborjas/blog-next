import * as React from 'react';

import styles from './nav.module.scss';

const navigationList = [
  {
    link: '#',
    name: 'About Me',
  },
  {
    link: '#',
    name: 'Work',  },
  {
    link: '#',
    name: 'Blog',
    
  },
  {
    link: '#',
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