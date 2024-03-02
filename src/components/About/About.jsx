import React from 'react';

import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl('about/aboutImage.png')} alt='About Image' className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cursorIcon.png')} alt='Cursor Icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Croaker</h3>
                        <p>
                            I am a major croaker
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/serverIcon.png')} alt='Server Icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Sobber</h3>
                        <p>
                            I am a major sobber
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/uiIcon.png')} alt='UI Icon'/>
                    <div className={styles.aboutItemText}>
                        <h3>Fired</h3>
                        <p>
                            I am fired
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
