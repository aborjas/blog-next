import * as React from 'react';
import styles from './contact.module.scss';
import SVG from 'react-inlinesvg';
import { SocialMedia } from 'components/hero/social-media';
import { MainTitle } from 'components/titles';

const BasicInfo = [
  {
    url: "/images/social/name.svg",
    info: "Name",
    description: "Adriana Borjas",
  },
  {
    url: "/images/social/phone.svg",
    info: "Phone",
    description: "+58 412-105-9481",
  },
  {
    url: "/images/social/email.svg",
    info: "E-mail",
    description: "aborjasmontiel@gmail.com",
  },
  {
    url: "/images/social/nationality.svg",
    info: "Nationality",
    description: "Venezuelan",
  },
  {
    url: "/images/social/age.svg",
    info: "Age",
    description: "25 years old",
  },
  {
    url: "/images/social/location.svg",
    info: "Location",
    description: "Maracaibo, Venezuela",
  },
  
]

export const Contact = () => {
  return(
    <section className={styles.container} id="contact">
      <MainTitle title="Contact Me"/>
      <div className={styles.info}>
        <div className={styles.basic}>
          {BasicInfo.map((value) => (
              <div className={styles.dataContainer}>
                <SVG className={styles.icon} src={value.url}/>
                <div className={styles.data}>
                  <h6 className={styles.tinyTitle}>{value.info}:</h6>
                  <p className={styles.p}>{value.description}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
      <div className={styles.social}>
        <SocialMedia />
      </div>
    </section>
  )
}