import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contactWholeContainer}>
      <div className={styles.contactSection}>
        <h3>{`Let's Connect!`}</h3>
      </div>
      <div className={styles.links}>
        <a>
          <img src="./gmail-icon.png" />
        </a>
        <a>
          <img src="./phone-icon.png" />
        </a>
        <a>
          <img src="./linkedIn-icon.png" />
        </a>
        <a>
          <img src="./github-icon.png" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
