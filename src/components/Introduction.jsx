// import SkillBox from "../features/skills/SkillBox";
import styles from "./Introduction.module.css";

function Introduction() {
  return (
    <div className={styles.introductionContainer}>
      <div className={styles.profileSection}>
        <img src="/reid-herrera-profile-picture-300x300.png" />
        <div className={styles.profileDetails}>
          <h2>Reid Herrera</h2>
          <p>Digital Marketing Software Developer</p>
          {/* <SkillBox /> */}
        </div>
      </div>
      <div className={styles.bioSection}>
        <h2>Bio:</h2>
        <p>
          Highly motivated and highly driven with endless ambition. Open minded
          and charismatic with a strong positive mindset. Flexible, reliable,
          who has excellent communication skills! An energetic team player,
          outgoing personality, strong work ethic, organized, and has the
          ability to work in a fast paced environment.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
