import {ARTICLES_DATA as articles} from "./constants.js";
import Articles  from './Articles.jsx'
import './style.css'
import {useEffect, useState} from "react";

export function App(){
    const [article, setArticle] = useState([])

    useEffect(() => {
        setArticle(articles)
    }, [articles]);

    const handleMostRecent = () => {
        const byDates = [...article].sort((a, b) => new Date(b.date) - new Date(a.date));
        setArticle(byDates);
        byDates.forEach((article) => {
            console.log(article);
        })
    }

    const handleMostUpvoted = () => {
        const byUpvotes = [...article].sort((a, b) => b.upvotes - a.upvotes);
        setArticle(byUpvotes);
        byUpvotes.forEach((article) => {
            console.log(article);
        })
    }

    return (
        <>
            <div className="App">
                <div className="App-header">
                    Sorting Articles
                </div>
                <div className="App-body">
                    <label>
                        Sort By
                    </label>
                    <button
                        className="small-button"
                        onClick={handleMostUpvoted}
                    >
                        Most Upvoted
                    </button>
                    <button
                        className="small-button"
                        onClick={handleMostRecent}
                    >
                        Most Recent
                    </button>
                </div>
                <Articles article={article}/>
            </div>
        </>
    )
}