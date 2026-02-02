import React, { useState, useRef } from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

const TRANSITION_MS = 300;

export const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const leaveTimeoutRef = useRef(null);

  const handleMouseEnter = (id) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredId(null);
      leaveTimeoutRef.current = null;
    }, TRANSITION_MS);
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <div
            key={id}
            className={`${hoveredId === id ? styles.projectHovered : ""} ${styles.project}`}
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={handleMouseLeave}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};
