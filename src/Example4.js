import { useState } from "react";

function Example4() {
  const [i, setI] = useState(1);
  
  const alertfunc= () => {
    alert("hello")
  }

  function myfunc (){
    setI(i - 1);
  }
  return (
    <div>
      {i}
      <form>
        <button type="button" onClick={() => alert("hello!!!")}>Click</button>
        <br />
        <button type="button" onClick={alertfunc}>Click</button>
        <br />
        <button type="button" onClick={()=>{setI(i+1)}}>Increment</button>
        <br />
        <button type="button" onClick={myfunc}>Decrement</button>
      </form>
    </div>
  );
}

export default Example4;
