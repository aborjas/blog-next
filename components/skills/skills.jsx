import * as React from 'react';
import styles from './skills.module.scss';
import { Level } from './level';
import { MainTitle } from 'components/titles';
import {Section} from 'components/section';


const SkillList = [
  {
    skill: 'HTML',
    level: '95',
  },
  {
    skill: 'CSS/SASS',
    level: '95',
  },
  {
    skill: 'JavaScript/Babel',
    level: '80'
  },
  {
    skill: 'React',
    level: '75'
  },
  {
    skill: 'Next.js',
    level: '80'
  },
  {
    skill: 'Responsive desing',
    level: '95'
  },
  {
    skill: 'Git',
    level: '90'
  },
  {
    skill: 'Command line',
    level: '70'
  },
]

export const Skills = () => {
  return (
    <Section className={styles.container} id="skills">
      <div className={styles.content}>
        <MainTitle title="Technical Skills"/>
        <div className={styles.skills}>
          {SkillList.map((value) => (
            <div className={styles.skillBox}>
              <Level level={value.level}/>
              <div className={styles.progress}><h4 className={styles.value}>{value.level}%</h4></div>
              <h6 className={styles.skillTitle}>{value.skill}</h6>
              
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}