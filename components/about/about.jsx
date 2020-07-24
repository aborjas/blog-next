import * as React from 'react';
import styles from './about.module.scss';
import { Button } from 'components/button';
import { MainTitle } from 'components/titles';




export const About = () => {
  return (
    <section className={styles.container} id="about">
      <MainTitle title="About Me"/>
      <div className={styles.info}>
        <img src="/images/profile.jpg" className={styles.img}/>
        <div className={styles.obj}>
          <h5 className={styles.subtitle}> Objective</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet officia doloremque autem velit a pariatur in quod esse tempora laborum eaque soluta omnis odit eum, sequi inventore incidunt placeat alias. lore ipsum dolor, sit amet consectetur adipisicing elit. Sit molestiae quod explicabo voluptas error, quis facilis laudantium, sed ad impedit, nesciunt magni recusandae iste.</p>
        </div>
      </div>
      <Button />
      
    </section>
  )
}