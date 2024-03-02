import React from 'react';

import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl('about/aboutImage.png')} alt='About Image' className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cursorIcon.png')} alt='Cursor Icon'/>
                    <div className={styles.aboutItemText}>
                        <h1>Croaker</h1>
                        <p>
                            I am a major croaker
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/serverIcon.png')} alt='Server Icon'/>
                    <div className={styles.aboutItemText}>
                        <h1>Sobber</h1>
                        <p>
                            I am a major sobber
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/uiIcon.png')} alt='UI Icon'/>
                    <div className={styles.aboutItemText}>
                        <h1>Fired</h1>
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
