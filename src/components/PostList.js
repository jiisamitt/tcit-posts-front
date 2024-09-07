import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePostAsync, fetchPosts } from '../api/api';

import './PostList.css';

const PostList = () => {
	const dispatch = useDispatch();

	const { posts, status, error } = useSelector((state) => state.post);

	useEffect(() => {
		// Dispatch the fetchPosts action when the component is mounted
		dispatch(fetchPosts());
	}, [dispatch]);

	// State for input and search term
	const [searchInput, setSearchInput] = useState('');
	const [searchTerm, setSearchTerm] = useState('');

	// Filter posts based on the search term only when the search button is clicked
	const filteredPosts = posts.filter((post) =>
		post.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleDelete = (id) => {
		dispatch(deletePostAsync(id));
	};

	// Update the search term when the button is clicked
	const handleSearch = () => {
		setSearchTerm(searchInput);
	};

	if (status === 'loading') {
		return <div>Loading...</div>;
	}

	if (status === 'failed') {
		return <div>Error: {error}</div>;
	}

	return (
		<div className="container">
			<div className="filter">
				<input
					type="text"
					placeholder="Filter posts by name"
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)} // Only update the local input state
				/>
				<button onClick={handleSearch}>Search</button>
			</div>
			<table className="table">
				<thead className="table-header">
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{filteredPosts.map((post) => (
						<tr className="table-row" key={post.id}>
							<td>{post.name}</td>
							<td>{post.description}</td>
							<td>
								<button onClick={() => handleDelete(post.id)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PostList;
