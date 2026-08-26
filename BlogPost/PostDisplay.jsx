import './style.css'

export default function PostDisplay({ posts, setPosts }) {
    const handleDelete = (indexToDelete) => {
        setPosts(prevState => prevState.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div data-testid="posts-container" className="post-display">
            {posts.map((post, index) => (
                <div key={index} className="post-box">
                    <div className="post-item">
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <button type="button" onClick={() => handleDelete(index)}>
                            Delete
                        </button>
                    </div>
            </div>))}
        </div>
    );
}