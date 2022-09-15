import react from 'react';
import './App.css';

function Quiz () {
    const [count, setCount] = react.useState(0)
    return (
        <>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}></button>
        </>
    )
}

export default Quiz;