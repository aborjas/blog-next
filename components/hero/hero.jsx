import * as React from 'react';
import styles from './hero.module.scss';
import { SocialMedia } from './social-media';
import { Nav } from '../header/nav';

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.info}>
        <h2 classname={styles.name}><span className={styles.span}>Hello World!</span><br/>I'm Adriana Borjas</h2>
        <p class={styles.p}>Engineer | Frontend Developer</p>
        <SocialMedia />
      </div>
    </div>
  )
}