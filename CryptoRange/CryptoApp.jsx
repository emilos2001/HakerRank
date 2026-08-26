import './style.css'
import Main from "./CryptoMain.jsx";

const title = 'Cryptocurrency Exchange'

export function App(){
    return (
        <>
            <div className='App-head'>
                <h2>{title}</h2>
            </div>
            <Main/>
        </>
    )
}