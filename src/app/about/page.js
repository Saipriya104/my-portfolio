// src/app/about/page.js

import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Me</h1>
      <p className={styles.paragraph}>
        I am a passionate Software Engineer with a strong foundation in Java and a commitment to learning. 
        With a Bachelor of Technology in Computer Science, I have a proven track record of delivering innovative solutions.
      </p>
    </div>
  );
}
