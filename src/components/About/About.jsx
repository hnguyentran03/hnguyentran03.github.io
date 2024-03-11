import React from "react";

import styles from "./About.module.css";
import skills from "../../data/skills.json";

import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <div className={styles.col}>
          <h2 className={styles.title}>About</h2>
          <div className={`${styles.aboutItems} ${styles.aboutItemText}`}>
            <p>
              Hello! I'm <span className={styles.custom_bold}>Ben Nguyen</span>, a junior at Carnegie Mellon
              University majoring in Computer Science. During my time at CMU, I
              worked as a teaching assistant for the course 15-112: Fundamentals
              of Programming and Computer Science, and also took on the role as
              the division lead for review.
            </p>
            <p>
              Recently, I've taken an interest in game development, and have
              recreated a few games in my free time. Other than that, I've also
              tried my hand at AI/ML and incorporating them into the games I've
              made.
            </p>
          </div>

          {/* <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/cursorIcon.png')} alt='Cursor Icon'/>
                        <div className={styles.aboutItemText}>
                            <h3>Croaker</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/serverIcon.png')} alt='Server Icon'/>
                        <div className={styles.aboutItemText}>
                            <h3>Sobber</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/uiIcon.png')} alt='UI Icon'/>
                        <div className={styles.aboutItemText}>
                            <h3>Fired</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>
                        </div>
                    </li>
                </ul> */}
        </div>
        <div className={styles.col}>
          <h2 className={styles.title}>Skills</h2>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
