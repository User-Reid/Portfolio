import { useSelector } from "react-redux";
import styles from "./Header.module.css";

function Header() {
  const profilePic = useSelector((state) => state.skillDescriptions.profilePic);
  const isMobile = window.innerWidth <= 390;

  console.log(isMobile);
  return (
    // <header className={styles.headerContainer} >
    //   <h1>{`Hi I'm Reid`}</h1>
    // </header>

    <header
      className={isMobile ? styles.mobileMode : styles.desktopMode}
      style={{ backgroundImage: `url("${profilePic}")` }}
    >
      <div
        className={
          isMobile ? styles.mobileHeaderText : styles.desktopHeaderText
        }
      >
        <h1 className={styles.fadeIn}>{`Hi, I'm Reid`}</h1>
        {isMobile ? (
          <>
            <p className={styles.fadeInLater}>Digital Marketing</p>
            <p className={styles.fadeInLater}>Software Developer</p>
          </>
        ) : (
          <p className={styles.fadeInLater}>
            Digital Marketing Software Developer
          </p>
        )}
      </div>
    </header>
  );
}

export default Header;
