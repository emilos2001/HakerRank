import './style.css'
import {Cards} from './Cards';

export function Feedback (){
    return (
        <>
            <div className="app-header">
                <h2>Code Review Feedback</h2>
            </div>
            <Cards />
        </>
    )
}