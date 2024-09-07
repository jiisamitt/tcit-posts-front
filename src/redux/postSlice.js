import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts, addPostAsync, deletePostAsync } from '../api/api';

export const postSlice = createSlice({
	name: 'post',
	initialState: {
		posts: [],
	},
	reducers: {
		/*
		addPost: (state, action) => {
			state.posts.push(action.payload);
		},
		deletePost: (state, action) => {
			state.posts = state.posts.filter((post) => post.id !== action.payload);
		},
		*/
	},
	extraReducers: (builder) => {
		// Handle fetchPosts action
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.posts = action.payload; // Replace posts with fetched data
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			// Handle addPostAsync action
			.addCase(addPostAsync.fulfilled, (state, action) => {
				state.posts.push(action.payload); // Add the new post to the state
			})
			// Handle deletePostAsync action
			.addCase(deletePostAsync.fulfilled, (state, action) => {
				state.posts = state.posts.filter((post) => post.id !== action.payload);
			});
	},
});

export default postSlice.reducer;
