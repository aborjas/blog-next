import * as React from 'react';
import styles from './body.module.scss';
import { Hero } from 'components/hero';
import { About } from 'components/about';
import { Skills } from 'components/skills';
import { Blog } from 'components/blog';
import { Contact } from 'components/Contact';


export const Body = ({posts}) => {
  return (
    <div className={styles.container}>
      <Hero />
      <About />
      <Skills />
      <Blog posts={posts}/>
      <Contact />
    </div>
  )
}