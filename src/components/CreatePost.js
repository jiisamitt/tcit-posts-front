import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPostAsync } from '../api/api';
import './CreatePost.css';

const CreatePost = () => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name && description) {
			const newPost = {
				name,
				description,
			};
			dispatch(addPostAsync(newPost));
			setName('');
			setDescription('');
		}
	};

	return (
		<form onSubmit={handleSubmit} className="container">
			<input
				type="text"
				placeholder="Post Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button type="submit">Add Post</button>
		</form>
	);
};

export default CreatePost;
