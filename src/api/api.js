import { createAsyncThunk } from '@reduxjs/toolkit';

// Base URL for your API from env
const API_URL = process.env.REACT_APP_API_URL;

// Async thunk to fetch all posts using fetch
export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
	const response = await fetch(API_URL);
	if (!response.ok) {
		throw new Error('Failed to fetch posts');
	}
	const data = await response.json();
	return data; // Assuming API returns the posts array
});

// Async thunk to add a post using fetch
export const addPostAsync = createAsyncThunk(
	'post/addPost',
	async (newPost) => {
		const response = await fetch(API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newPost),
		});
		if (!response.ok) {
			throw new Error('Failed to add post');
		}
		const data = await response.json();
		return data; // Assuming API returns the added post
	}
);

// Async thunk to delete a post using fetch
export const deletePostAsync = createAsyncThunk(
	'post/deletePost',
	async (postId) => {
		const response = await fetch(`${API_URL}/${postId}`, {
			method: 'DELETE',
		});
		if (!response.ok) {
			throw new Error('Failed to delete post');
		}
		return postId; // Return the id of the deleted post
	}
);
