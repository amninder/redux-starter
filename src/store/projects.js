import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

// Slices
const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, action) => {
      projects.push({
        name: action.payload.name,
        id: ++lastId,
      });
    },
    projectRemoved: (projects, action) => {
      const index = projects.indexOf(
        (project) => project.id === action.payload.id
      );
      projects.splice(index, 1);
    },
  },
});
export const { projectAdded, projectRemoved } = slice.actions;
export default slice.reducer;
