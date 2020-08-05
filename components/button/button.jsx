import * as React from 'react';
import styles from './button.module.scss';
import SVG from 'react-inlinesvg';

export const Button = () => {
  return (
    <div className={styles.container}>
      <a className={styles.btnLight} href="http://t.me/adriborjas" target="_blank">
        Send me a message <SVG className={styles.icon} src="/images/social/telegram.svg"/>
      </a>
      <a className={styles.btn} href="adriana-borjas-cv.pdf" target="_blank">
        Download my CV <SVG className={styles.iconLight} src="/images/social/download.svg"/>
      </a>
    </div>
  )
}