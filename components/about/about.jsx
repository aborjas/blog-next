import * as React from 'react';
import styles from './about.module.scss';
import { Button } from 'components/button';
import SVG from 'react-inlinesvg';

const BasicInfo = [
  {
    url: "/images/social/name.svg",
    info: "Name",
    description: "Adriana Borjas",
  },
  {
    url: "/images/social/age.svg",
    info: "Age",
    description: "25",
  },
  {
    url: "/images/social/phone.svg",
    info: "Phone",
    description: "+58 412-105-9481",
  },
  {
    url: "/images/social/nationality.svg",
    info: "Nationality",
    description: "Venezuelan",
  },
  {
    url: "/images/social/location.svg",
    info: "Location",
    description: "Maracaibo, Venezuela",
  },
  {
    url: "/images/social/email.svg",
    info: "E-mail",
    description: "aborjasmontiel@gmail.com",
  },
  
]

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
      <div className={styles.basic}>
        {BasicInfo.map((value) => (
            <div className={styles.dataContainer}>
              <SVG className={styles.icon} src={value.url}/>
              <div className={styles.data}>
                <h6 className={styles.tinyTitle}>{value.info}:</h6>
                <p>{value.description}</p>
              </div>
            </div>
        ))}
      </div>
    </section>
  )
}