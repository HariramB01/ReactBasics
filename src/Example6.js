import { useState } from "react"

const Example6 = () => {

    const [user, setUser] = useState("") 

    const myfunc = (e) => {
        setUser(e.target.value)
        console.log(user);
    }

    return(
        <div>
            <div>
                <br />
                <br />
                <input type="text" placeholder="username" value={user} name="user" 
                // onChange={(e)=>{myfunc(e)}}
                onChange={myfunc}
                />
                <br />
                <br />
            </div>
        </div>
    )

}

export default Example6;