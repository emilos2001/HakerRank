import {Aspects as aspects} from './Aspects.js';
import {explicitRate as rates} from "./Aspects.js";
import {ColorRates as colorRates} from "./Aspects.js";
import './style.css'
import {useEffect, useState} from "react";
export function Cards(){
    const[cards, setCards]= useState(aspects)
    const[addCard,setAddCard]=useState(false)
    const[votes, setVotes]= useState(
        aspects.map(() => ({
            up: 0,
            down: 0,
        }))
    )

    

    const upVote = (index) => {
        setVotes(prevState =>
            prevState.map((vote, i) =>
                i === index ? { ...vote, up: vote.up + 1 } : vote
            )
        );
    };

    const downVote = (index) => {
        setVotes(prevState =>
            prevState.map((vote, i) =>
                i === index ? { ...vote, down: vote.down + 1 } : vote
            )
        );
    };

    const currentVote = (index) => {
        return votes[index] || {up: 0, down: 0};
    }

    const totalVote = (index) => {
        return currentVote(index).up + currentVote(index).down;
    }

    const percent = (index)=> {
        const total = totalVote(index);
        if (total <= 0) {
            return 0;
        }
        return Math.round((currentVote(index).up / total) * 100);
    }

    return (
        <>
            <div className="cards">
                {cards.map((card, index) => (
                    <div key={index} className="single-card">
                        {card}
                        <div className="card-btn">
                            <button
                                onClick={() => upVote(index)}
                                style={{ backgroundColor: "green"}}
                            >
                                👍 Upvote
                            </button>
                            <button
                                onClick={() => downVote(index)}
                                style={{ backgroundColor: "red"}}>
                                👎 Downvote
                            </button>
                        </div>
                        <p>Up votes: {currentVote(index).up}</p>
                        <p>Down votes {currentVote(index).down}</p>
                       <div className="status-bar"
                            style={{backgroundColor: colorRates(percent(index))}}>
                           <p>{percent(index)}%</p>
                        </div>
                        <h4 style={{color: '#000000'}}>{rates(percent(index))}</h4>
                    </div>
                ))}
                <button className='add-btn' onClick={() => {
                    setAddCard(prevState => !prevState)
                }}><h1>+</h1></button>
            </div>
        </>
    )
}