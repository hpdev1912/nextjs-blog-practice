import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  posts: [],
};
export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload.map((post) => ({
        ...post,
        isRead: false,
        timeRead: "",
      }));
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
export const { setPosts, togglePostRead } = postSlice.actions;

export default postSlice.reducer;
