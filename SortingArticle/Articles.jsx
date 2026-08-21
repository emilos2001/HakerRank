import './style.css'
export default function Articles({article=[]}){
    return (
        <div className="table">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {article.map((article, index) => (
                    <tr key={index} data-testid='article'>
                        <td data-testid='article-title'>{article.title}</td>
                        <td data-testid='article-upvotes'>{article.upvotes}</td>
                        <td data-testid='article-date'>{article.date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}