import * as React from 'react';
import styles from './hero.module.scss';
import { SocialMedia } from './social-media';
import { Nav } from '../header/nav';
import { Section } from 'components/section';

export const Hero = () => {
  return (
    <Section className={styles.hero} id="hero">
      <div className={styles.info}>
        <h1 classname={styles.name}><span className={styles.span}>Hello World!</span><br/>I'm Adriana Borjas</h1>
        <p class={styles.p}>Engineer | Frontend Developer</p>
        <SocialMedia />
      </div>
    </Section>
  )
}