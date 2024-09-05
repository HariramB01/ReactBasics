import React, { useState, useEffect } from "react";

const Assignment1 = () => {
    const [i, setI] = useState(1);
    const [j, setJ] = useState(1);

    useEffect(() => { 
        console.log("Clicked 3...."); // This will print only once on mount
    }, []);

    // Print only on the state change of `i`
    useEffect(() => {
        console.log("clicked....");
    }, [i]);

    function myfunc(){
        setJ(j + 1);
    }

    return (
        <div style={{ color: "cyan", backgroundColor: "green" }}>
            {2 * i}
            <div>
                <button type="button" onClick={() => { setI(i + 1) }}>Multiple2</button>
            </div>
            <br />
            <br />
            <br />
            {3 * j}
            <div>
                <button type="button" onClick={myfunc}>Multiple3</button>
            </div>
        </div>
    );
}

export default Assignment1;
