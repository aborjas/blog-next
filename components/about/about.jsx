import * as React from 'react';
import styles from './about.module.scss';
import { Button } from 'components/button';
import { MainTitle } from 'components/titles';
import {Section} from 'components/section';



export const About = () => {
  return (
    <Section className={styles.container} id="about">
      <MainTitle title="About Me"/>
      <div className={styles.info}>
        <img src="/images/profile.jpg" className={styles.img}/>
        <div className={styles.obj}>
          <p className={styles.p}>Hello there! I'm an engineer and front-end developer with additional studies in graphic design. Based in Maracaibo, Venezuela.<br/> <br/>I studied petroleum engineering at the University of Zulia. Then I descovered the world of frontend development and web design with e-learning platforms like Platzi and Udemy. I am now applying my engineering and self-learning skills to enhance my knowledge.</p>
        </div>
      </div>
      <Button />
    </Section>
  )
}