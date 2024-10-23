import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { theme: "light" },
  reducers: {
    toggleTheme: (state, action) => {
      if (action.payload === "light") {
        state.theme = "dark";
      } else{ state.theme = "light"};
    },
  },
});
export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
