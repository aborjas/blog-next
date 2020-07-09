import * as React from 'react';
import styles from './skills.module.scss';

const SkillList = [
  {
    skill: 'HTML',
    level: '90%',
  },
  {
    skill: 'CSS/SASS',
    level: '90%',
  },
  {
    skill: 'JavaScript/Babel',
    level: '70%'
  },
  {
    skill: 'React',
    level: '65%'
  },
  {
    skill: 'Next.js',
    level: '60%'
  },
  {
    skill: 'Git',
    level: '90%'
  },
  {
    skill: 'Responsive desing',
    level: '95%'
  },
  {
    skill: 'Command line',
    level: '70%'
  },
]

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <div className={styles.content}>
        <h3 className={styles.title}><span className={styles.span2}>Professional</span> Skills</h3>
        <div className={styles.skills}>
          {SkillList.map((value) => (
            <div className={styles.skillBox}>
              <div className={styles.level}>
                <h4 className={styles.value}>{value.level}</h4>
              </div>
              <h6 className={styles.skillTitle}>{value.skill}</h6>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}