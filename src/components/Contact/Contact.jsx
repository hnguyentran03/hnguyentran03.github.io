import React from 'react';

import styles from './Contact.module.css';
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contacts</h2>
            {/* <p>Feel free to reach out!</p> */}
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt='Email Icon'/>
                <a href="mailto:hnguyentran03@gmail.com">hnguyentran03@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt='LinkedIn Icon'/>
                <a href="https://www.linkedin.com/in/hnguyentran03/" target="_blank" rel="noopener noreferrer">linkedin.com/hnguyentran03</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt='Github Icon'/>
                <a href="https://github.com/hnguyentran03" target="_blank" rel="noopener noreferrer">github.com/hnguyentran03</a>
            </li>
        </ul>
    </footer>
  )
}
