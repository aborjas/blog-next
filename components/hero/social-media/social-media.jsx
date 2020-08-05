import * as React from 'react';
import styles from './social-media.module.scss';
import SVG from 'react-inlinesvg';

const socialMediaList = [
  {
    link: 'http://github.com/aborjas',
    icon: '/images/social/github.svg',
  },
  {
    link: 'https://instagram.com/adri.code/',
    icon: '/images/social/instagram.svg',
  },
  {
    link: 'https://facebook.com/',
    icon: '/images/social/facebook.svg',
  },
  {
    link: 'https://linkedin.com/in/adriborjas',
    icon: '/images/social/linkedin.svg',
  },
  {
    link: 'http://t.me/adriborjas',
    icon: '/images/social/telegram.svg',
  },
] 

export const SocialMedia = () => {
  return (
    <ul className={styles.list}>
        {socialMediaList.map((value) => (
          <li className={styles.item}>
            <a href={value.link} target="_blank"><SVG className={styles.icon} src={value.icon} /></a>
          </li>
        ))}
    </ul>
  )
}