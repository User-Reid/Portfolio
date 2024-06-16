import { useSelector } from "react-redux";
import styles from "./SkillDescription.module.css";
// import { guessTheNumber, pigGame } from "./skillSlice";

function SkillDisplay() {
  const skill = useSelector((state) => state.skillDescriptions.skill);
  const skillLogo = useSelector((state) => state.skillDescriptions.skillLogo);
  const yearsOfExperience = useSelector(
    (state) => state.skillDescriptions.yearsOfExperience
  );
  const skillDescription = useSelector(
    (state) => state.skillDescriptions.skillDescription
  );
  // const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.skillTextBox}>
        <img src={skillLogo} />
        <div className={styles.skillAndYears}>
          <h2>{skill}</h2>
          {yearsOfExperience === 1 ? (
            <p>{yearsOfExperience} year of experience</p>
          ) : (
            <p>{yearsOfExperience} years of experience</p>
          )}
        </div>
      </div>
      <p className={styles.skillDescription}>{skillDescription}</p>
      {/* <div className="projectIcons">
        <button onClick={() => dispatch(pigGame())}>Project 1</button>
        <button onClick={() => dispatch(guessTheNumber())}>Project 2</button>
        <button>Project 3</button>
        <button>Project 4</button>
      </div> */}
    </div>
  );
}

export default SkillDisplay;
