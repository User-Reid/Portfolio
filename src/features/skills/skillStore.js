import { configureStore } from "@reduxjs/toolkit";

import skillSlice from "./skillSlice";

const store = configureStore({
  reducer: {
    skillDescriptions: skillSlice,
  },
});

export default store;
