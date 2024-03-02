import React from 'react';

import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I'm Ben</h1>
            <p className={styles.description}>I am croaking</p>
            <a href="mailto:hnguyentran03@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl('hero/heroImage.png')} alt='Hero Image' className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}
