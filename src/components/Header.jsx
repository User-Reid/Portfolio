import styles from "./Header.module.css";

function Header() {
  const isMobile = window.innerWidth <= 390;

  return (
    // <header className={styles.headerContainer} >
    //   <h1>{`Hi I'm Reid`}</h1>
    // </header>

    <header className={isMobile ? styles.mobileMode : styles.desktopMode}>
      <div
        className={
          isMobile ? styles.mobileHeaderText : styles.desktopHeaderText
        }
      >
        <h1>{`Hi I'm Reid`}</h1>
        {isMobile ? (
          <>
            <p>Digital Marketing</p>
            <p>Software Developer</p>
          </>
        ) : (
          <p>Digital Marketing Software Developer</p>
        )}
      </div>
    </header>
  );
}

export default Header;
