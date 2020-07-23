import * as React from 'react';
import styles from './about.module.scss';
import { Button } from 'components/button';




export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.titleContainer}>
        <h3 className={styles.title}><span className={styles.span2}>About</span> Me</h3>
      </div>
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