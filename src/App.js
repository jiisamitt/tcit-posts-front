import './App.css';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
function App() {
	return (
		<div className="App">
			{/* Header */}
			<h2>Mis posts</h2>
			{/* Post list/table with filter */}
			<PostList />
			{/* Create post with name and description text field and create button*/}
			<CreatePost />
		</div>
	);
}

export default App;
