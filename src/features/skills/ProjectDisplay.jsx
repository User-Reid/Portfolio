import ReactPlayer from "react-player/youtube";
import { useSelector } from "react-redux";

function ProjectDisplay() {
  const project = useSelector((state) => state.skillDescriptions.project);
  const isWideScreen = window.innerWidth > 699;

  return (
    // <p className={styles}>
    //   display projects via video or images here with link to github pages
    // </p>

    <div
      style={{
        width: isWideScreen === true ? "50%" : "90%",
        height: isWideScreen === true ? "351px" : "197px",
      }}
    >
      <ReactPlayer
        url={project}
        playing={true}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default ProjectDisplay;
