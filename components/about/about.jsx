import * as React from 'react';
import styles from './about.module.scss';
import { Button } from 'components/button';

const BasicInfo = [
  {
    info: "Name",
    description: "Adriana Borjas",
  },
  {
    info: "Age",
    description: "25",
  },
  {
    info: "Phone",
    description: "+58 412-105-9481",
  },
  {
    info: "Nationality",
    description: "Venezuelan",
  },
  {
    info: "Location",
    description: "Maracaibo, Venezuela",
  },
  {
    info: "E-mail",
    description: "aborjasmontiel@gmail.com",
  },
  
]

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.info}>
        <img src="/images/profile.jpg" className={styles.img}/>
        <div className={styles.obj}>
          <h3 className={styles.title}><span className={styles.span2}>About</span> Me</h3>
          <h5 className={styles.subtitle}> Objective</h5>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit molestiae quod explicabo tenetur quo aliquam vitae odit atque voluptas error, quis facilis laudantium, sed ad impedit, nesciunt magni recusandae iste.</p>
        </div>
      </div>
      <div className={styles.basic}>
        {BasicInfo.map((value) => (
            <div className={styles.data}>
            <h6 className={styles.tinyTitle}>{value.info}:</h6>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
      <Button />
    </section>
  )
}