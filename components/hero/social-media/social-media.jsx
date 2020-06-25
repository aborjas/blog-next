import * as React from 'react';
import styles from './social-media.module.scss';
import SVG from 'react-inlinesvg';

const socialMediaList = [
  {
    link: 'https://instagram.com',
    icon: '/images/social/instagram.svg',
  },
  {
    link: 'https://facebook.com/',
    icon: '/images/social/facebook.svg',
  },
  {
    link: 'https://linkedin.com/',
    icon: '/images/social/linkedin.svg',
  },
  {
    link: '#',
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