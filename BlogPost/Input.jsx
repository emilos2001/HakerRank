import './style.css'

export default function Input({ postTitle, postDescription, setPostTitle, setPostDescription }) {
    return (
        <div className='inputs'>
            <input className='title'
                   type="text"
                   placeholder="Enter Title"
                   value={postTitle}
                   onChange={(e) => setPostTitle(e.target.value)}
                   data-testid="title-input"
            />
            <textarea className='description'
                      placeholder="Enter Description"
                      value={postDescription}
                      onChange={(e) => setPostDescription(e.target.value)}
                      data-testid="description-input"
            />
        </div>
    );
}