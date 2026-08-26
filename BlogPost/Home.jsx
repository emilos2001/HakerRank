import Input from "./Input.jsx"
import PostDisplay from "./PostDisplay.jsx";
import './style.css'
import { useState } from "react";

export function Home(){
    const [posts, setPosts] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        description: ""
    });
    const setTitle = (title) => {
        setFormData(prev => ({ ...prev, title }));
    };
    const setDescription = (description) => {
        setFormData(prev => ({ ...prev, description }));
    };

    const handleCreatePost = () => {
        if (!formData.title || !formData.description) {
            return;
        }
        setPosts(prevPosts => [...prevPosts, formData]);
        setFormData({ title: "", description: "" });
    };

    return (
        <>
            <div className="app-header">
                <p>Blog Post</p>
            </div>
            <div className="app">
                <Input
                    postTitle={formData.title}
                    postDescription={formData.description}
                    setPostTitle={setTitle}
                    setPostDescription={setDescription}
                />
                <button
                    data-testid="create-button"
                    className="mt-10"
                    onClick={handleCreatePost}
                >
                    Create Post
                </button>
            </div>
            <div className="posts-section">
                <PostDisplay posts={posts} setPosts={setPosts} />
            </div>
        </>
    );
}