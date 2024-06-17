import { useSelector } from "react-redux";
import { useState } from "react";
import {
  html,
  css,
  react,
  javascript,
  nodeJs,
  sql,
  premierePro,
  afterEffects,
  inDesign,
  illustrator,
  finalCutPro,
  photoshop,
} from "./skillSlice";
import styles from "./SkillBox.module.css";
import SkillDescription from "./SkillDescription";
import ProjectDisplay from "./ProjectDisplay";

import { useDispatch } from "react-redux";

function SkillBox() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);

  const skill = useSelector((state) => state.skillDescriptions.skill);

  // const isLoading = useSelector((state) => state.skillDescriptions.isLoading);
  // const skillLogo = useSelector((state) => state.skillDescriptions.skillLogo);
  // const skillDescription = useSelector(
  //   (state) => state.skillDescriptions.skillDescription
  // );
  // const project = useSelector((state) => state.skillDescriptions.project);
  // const yearsOfExperience = useSelector(
  //   (state) => state.skillDescriptions.yearsOfExperience
  // );
  // const bgColor = useSelector((state) => state.skillDescriptions.bgColor);

  function handleSkillSwitch(x, y) {
    if (skill === y) {
      setDisplay(!display);
    } else {
      setDisplay(true);
      dispatch(x);
    }
  }

  return (
    <div style={{ marginBottom: "50px" }}>
      <div className={styles.skillRow}>
        <a onClick={() => handleSkillSwitch(html(), "HTML")}>
          <img src="/html-icon-100x100.png" />
        </a>
        <a onClick={() => handleSkillSwitch(css(), "CSS")}>
          <img src="/css-icon-100x100.png" />
        </a>
        <a onClick={() => handleSkillSwitch(javascript(), "Javascript")}>
          <img src="/javascript-icon-100x100.png" />
        </a>
        <a onClick={() => handleSkillSwitch(react(), "React")}>
          <img src="/react-icon-100x100.png" />
        </a>
        <a onClick={() => handleSkillSwitch(nodeJs(), "NodeJS")}>
          <img src="/nodeJs-icon-100x100.png" />
        </a>
        <a onClick={() => handleSkillSwitch(sql(), "SQL")}>
          <img src="/sql-icon-100x100.png" />
        </a>
        <a onClick={() => handleSkillSwitch(photoshop(), "Adobe Photoshop")}>
          <img src="/photoshop-100x100.png" />
        </a>
        <a
          onClick={() => handleSkillSwitch(premierePro(), "Adobe Premiere Pro")}
        >
          <img src="/premierePro-100x100.png" />
        </a>
        <a
          onClick={() =>
            handleSkillSwitch(afterEffects(), "Adobe After Effects")
          }
        >
          <img src="/afterEffects-100x100.png" />
        </a>
        <a onClick={() => handleSkillSwitch(inDesign(), "Adobe InDesign")}>
          <img src="/inDesign-100x100.png" />
        </a>
        <a
          onClick={() => handleSkillSwitch(illustrator(), "Adobe Illustrator")}
        >
          <img src="/illustrator-100x100.png" />
        </a>
        <a onClick={() => handleSkillSwitch(finalCutPro(), "Final Cut Pro")}>
          <img src="/finalCutPro-100x100.png" />
        </a>
      </div>
      {display ? (
        <div className={styles.skillContainer}>
          <SkillDescription />
          <ProjectDisplay />
        </div>
      ) : null}
    </div>
  );
}

export default SkillBox;
