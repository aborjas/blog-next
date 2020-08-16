import * as React from 'react';


import styles from './nav.module.scss';

const navigationList = [
  {
    link: '#about',
    otherLink: '/#about',
    name: 'About',
  },
  {
    link: '#skills',
    otherLink: '/#skills',
    name: 'Skills',
  },
  {
    link: '#blog',
    otherLink: '/#blog',
    name: 'Blog',
    
  },
  {
    link: '#contact',
    otherLink: '/#contact',
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