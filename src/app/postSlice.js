import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  posts: [],
};
export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    initPostState(state, action) {
      const postState = action.payload.map((post) => ({
        ...post,
        isRead: false,
        timeRead: "",
      }));
      state.posts = postState;
      localStorage.setItem("POST_DATA", JSON.stringify(postState));
    },
    setPostState(state, action) {
      state.posts = action.payload;
      localStorage.setItem("POST_DATA", JSON.stringify(state.posts));
    },
    togglePostRead(state, action) {
      const { slug, time } = action.payload;
      //check if product is in cart
      const index = state.posts.findIndex((item) => item.slug === slug);

      if (index >= 0) {
        state.posts[index].isRead = state.posts[index].isRead === true ? false : true;
        state.posts[index].timeRead = time;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { initPostState, setPostState, togglePostRead } = postSlice.actions;

export default postSlice.reducer;
