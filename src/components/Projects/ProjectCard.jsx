import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, date, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />

      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.date}>{date}</h4>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {/* <a href={demo} className={styles.link}>Demo</a> */}
        <a
          className={styles.link}
          href={source}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </div>
    </div>
  );
};
