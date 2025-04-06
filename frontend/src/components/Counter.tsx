import { useState } from "react";

function Counter() {
    const fixedNumber = 5;
    const [startFrom, Setincrement] = useState(2);
    const [count, setCount] = useState(50);



    // const skl = "GS Tumba";

    // if (skl)
    //     return <div>School is {skl}</div>
    // return <h1>School not defined</h1>

    // {setTimeout(() => {
    //     Setincrement(startFrom+2)
    // }, 5)}
    // return (
    //     <div>
    //         {<p>Count: {count}</p>
    //         <button onClick={(count > 0) ? () => { setCount(count - fixedNumber) } : alert('Null')}>Click to Increment</button>}
    //     <h1>Counter : {startFrom}</h1>
    //     </div>
    // )
}


export default Counter;