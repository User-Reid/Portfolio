import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contactWholeContainer}>
      <div className={styles.contactSection}>
        <h3>{`Let's Connect!`}</h3>
      </div>
      <div className={styles.links}>
        <a href="mailto:your-email@example.com">
          <img src="./gmail-icon.png" />
        </a>
        <a>
          <img src="./phone-icon.png" />
        </a>
        <a href="https://www.linkedin.com/in/reid-herrera-6803581bb/">
          <img src="./linkedIn-icon.png" />
        </a>
        <a href="https://github.com/User-Reid">
          <img src="./github-icon.png" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
