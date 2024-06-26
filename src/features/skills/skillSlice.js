import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skill: "",
  skillDescription: "",
  project: "",
  isLoading: false,
  yearsOfExperience: 1,
  skillLogo: "",
  bgColor: "",
  profilePic: "./IMG_1052.png",
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    html(state) {
      state.skill = "HTML";
      state.skillDescription =
        "HTML is where it all started for me and many others I would imagine. Though it can be viewed by most as simple, I see it as essential and neccissary to learn!";
      state.project = "https://youtu.be/_vZDpPBjce0";
      state.yearsOfExperience = 2;
      state.skillLogo = "/html-icon-100x100.png";
      state.bgColor = "linear-gradient(to bottom, orange, white)";
      state.profilePic = "./html-alt-profile-pic-wt.png";
    },
    css(state) {
      state.skill = "CSS";
      state.skillDescription =
        "CSS is one of my favorite things to do! It is so much fun being creative and designing things just the way you want them!";
      state.project = "https://youtu.be/5wM4E3Gm6Z4";
      state.yearsOfExperience = 2;
      state.skillLogo = "/css-icon-100x100.png";
      state.bgColor = "linear-gradient(to bottom, darkblue, white)";
      state.profilePic = "./react-alt-profile-pic.png";
    },
    javascript(state) {
      state.skill = "Javascript";
      state.skillDescription =
        "JavaScript is incredible and I cannot stress its importance! It is what is making all of this happen right now!";
      state.project = "https://youtu.be/8ke8sYQX6k4";
      state.yearsOfExperience = 1;
      state.skillLogo = "/javascript-icon-100x100.png";
      state.bgColor = "linear-gradient(to bottom, yellow, white)";
      state.profilePic = "./javascript-profile-pic.png";
    },
    react(state) {
      state.skill = "React";
      state.skillDescription =
        "React is my favorite library! I Love how efficient and fast it is!";
      state.project = "https://youtu.be/ilocOyuerS0";
      state.yearsOfExperience = 1;
      state.skillLogo = "/react-icon-100x100.png";
      state.bgColor = "linear-gradient(to bottom, lightblue, white)";
      state.profilePic = "./react-profile-pic-wt.png";
    },
    nodeJs(state) {
      state.skill = "NodeJS";
      state.skillDescription =
        "NodeJS is great and was a great experience to learn! 🥳";
      state.project = "https://youtu.be/ilocOyuerS0";
      state.yearsOfExperience = 1;
      state.skillLogo = "/nodeJs-icon-100x100.png";
      state.bgColor = "linear-gradient(to bottom, green, white)";
      state.profilePic = "./nodeJs-profile-pic.png";
    },
    sql(state) {
      state.skill = "SQL";
      state.skillDescription = "SQL is neato mosquito";
      state.project = "https://youtu.be/ilocOyuerS0";
      state.yearsOfExperience = 1;
      state.skillLogo = "/sql-icon-100x100.png";
      state.bgColor = "linear-gradient(to bottom, lightblue, white)";
      state.profilePic = "./react-alt-2-profile-pic.png";
    },
    photoshop(state) {
      state.skill = "Adobe Photoshop";
      state.skillDescription =
        "I have been using Photoshop for roughly 8 years now! I have used photoshop for graphic design, photo editing, and content creation!";
      state.project = "https://youtu.be/H22h5fvUz_s";
      state.yearsOfExperience = 8;
      state.skillLogo = "/photoshop-100x100.png";
      state.bgColor = "linear-gradient(to bottom, darkblue, white)";
      state.profilePic = "./premierePro-profile-pic.png";
    },
    premierePro(state) {
      state.skill = "Adobe Premiere Pro";
      state.skillDescription =
        "Adobe Premier Pro has been my go-to video editing software as of late due to its incredible tools and user prefrences (and because I mainly use Windows😅";
      state.project = "https://youtu.be/hVC4_mhK7NE";
      state.yearsOfExperience = 4;
      state.skillLogo = "/premierePro-100x100.png";
      state.bgColor = "linear-gradient(to bottom, darkblue, white)";
      state.profilePic = "./premierePro-profile-pic.png";
    },
    finalCutPro(state) {
      state.skill = "Final Cut Pro";
      state.skillDescription =
        "Final Cut Pro was actually the first video editing software that I used way back in 2014! I have always found Final Cut Pro to be very user friendly and easy to use. I also find Final Cut Pro capable of getting the job done quick without sacrificing quality!";
      state.project = "https://youtu.be/ilocOyuerS0";
      state.yearsOfExperience = 10;
      state.skillLogo = "/finalCutPro-100x100.png";
      state.bgColor = "linear-gradient(to bottom, pink, white)";
      state.profilePic = "./finalCutPro-profile-pic.png";
    },
    afterEffects(state) {
      state.skill = "Adobe After Effects";
      state.skillDescription =
        "Adobe After Effects is the top of the line when it comes to video editting and it is clear to see in the work that it is used for.";
      state.project = "https://youtu.be/jCqCO5bxRc8";
      state.yearsOfExperience = 3;
      state.skillLogo = "/afterEffects-100x100.png";
      state.bgColor = "linear-gradient(to bottom, darkblue, white)";
      state.profilePic = "./premierePro-profile-pic.png";
    },
    inDesign(state) {
      state.skill = "Adobe InDesign";
      state.skillDescription =
        "Adobe InDesign has been my go to adobe product when it comes to postcards, newsletters, and more!";
      state.project = "https://youtu.be/ilocOyuerS0";
      state.yearsOfExperience = 2;
      state.skillLogo = "/inDesign-100x100.png";
      state.bgColor = "linear-gradient(to bottom, red, white)";
      state.profilePic = "./inDesign-profile-pic.png";
    },
    illustrator(state) {
      state.skill = "Adobe Illustrator";
      state.skillDescription =
        "Adobe Illustrator has been a great tool for me in the last few years. I have used it to take many graphic designs into real world use such as tents or merchandise!";
      state.project = "https://youtu.be/ilocOyuerS0";
      state.yearsOfExperience = 2;
      state.skillLogo = "/illustrator-100x100.png";
      state.bgColor = "linear-gradient(to bottom, orange, white)";
      state.profilePic = "./premierePro-profile-pic.png";
      state.profilePic = "./html-alt-profile-pic.png";
    },
    pigGame(state) {
      state.project = "https://youtu.be/8ke8sYQX6k4";
    },
    guessTheNumber(state) {
      state.project = "https://youtu.be/dCYojTrAAE4";
    },
  },
});

export const {
  html,
  css,
  javascript,
  react,
  nodeJs,
  sql,
  illustrator,
  inDesign,
  photoshop,
  afterEffects,
  premierePro,
  finalCutPro,
  pigGame,
  guessTheNumber,
} = skillsSlice.actions;

export default skillsSlice.reducer;
