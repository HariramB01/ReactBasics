import { useState } from "react";

const Example1 = () => {
    const [name, setName] = useState("Hariram")
    return(
        <div>
            <h1>Inline style</h1>
        <h2 style={{color:"red"}}>This is my Function component....</h2>
        <h3 style={{backgroundColor:"yellow"}}>Using useState {name}</h3>
        </div>
    )
}

export default Example1;