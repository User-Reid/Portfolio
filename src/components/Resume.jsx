import styles from "./Resume.module.css";
import { useSelector } from "react-redux";

function Resume() {
  const isMobile = window.innerWidth <= 390;
  const bgColor = useSelector((state) => state.skillDescriptions.bgColor);

  console.log(isMobile);
  console.log(bgColor);

  // className={isMobile ? styles.mobileMode : styles.desktopMode}

  // <h1 className={styles.fadeIn}>{`Hi, I'm Reid`}</h1>
  //       {isMobile ? (
  //         <>
  //           <p className={styles.fadeInLater}>Digital Marketing</p>
  //           <p className={styles.fadeInLater}>Software Developer</p>
  //         </>
  //       ) : (
  //         <p className={styles.fadeInLater}>
  //           Digital Marketing Software Developer
  //         </p>
  //       )}

  return (
    <div
      className={
        isMobile ? styles.mobileResumeContainer : styles.desktopResumeContainer
      }
    >
      <div className={styles.resumeSide}>
        {isMobile ? (
          <a>📁Resume</a>
        ) : (
          <iframe
            src="https://drive.google.com/file/d/1n05iVFx2tAq-KhUJ1aGIyrUhD-M3F289/preview"
            width="100%"
            height="100%"
            allow="autoplay"
            className={styles.iframe}
          ></iframe>
        )}
      </div>
      <div className={styles.bioSide}>
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

export default Resume;
