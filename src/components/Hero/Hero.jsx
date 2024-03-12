import { useState, useEffect } from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [iteration, setIteration] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const rotation = ["Croaker", "Computer Science student", "Software Engineer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = iteration % rotation.length;
    let fullText = rotation[i];
    let newFullText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(newFullText);
    console.log(newFullText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta < 25 ? 25 : prevDelta / 2);
    }

    if (!isDeleting && newFullText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && newFullText === "") {
      setIsDeleting(false);
      setIteration(iteration + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Ben Nguyen</h1>
        <p className={styles.description}>
          {" "}
          I am a{" "}
          <span
            data-period="1000"
            data-rotate={`${rotation}`}
          >
            {text}
          </span>
        </p>
        <a href="mailto:hnguyentran03@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
