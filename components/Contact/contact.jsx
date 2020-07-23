import * as React from 'react';
import styles from './contact.module.scss';
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

export const Contact = () => {
  return(
    <section className={styles.container} id="contact">
      <div className={styles.titleContainer}>
        <h3 className={styles.title}><span className={styles.span2}>Contact</span> Me</h3>
      </div>
      <div className={styles.info}>
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
      </div>  
    </section>
  )
}