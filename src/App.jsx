import Header from "./components/Header";
// import Introduction from "./components/Introduction";
import SkillBox from "./features/skills/SkillBox";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import styles from "./App.module.css";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const bgColor = useSelector((state) => state.skillDescriptions.bgColor);

  console.log(bgColor);
  // const dispatch = useDispatch();

  return (
    <div
      className={styles.entireSpaceContainer}
      style={{
        background: bgColor,
      }}
    >
      <div className={styles.useableSpaceContainer}>
        <Header />
        {/* <Introduction /> */}
        <SkillBox />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
