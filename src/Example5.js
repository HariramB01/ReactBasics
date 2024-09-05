

const Example5 = () => {

    function paramFunc(num, e){
        alert("button clicked : "+ num)
        console.log(e.target);
    }

    const paramFunc1 = (e) => {
        console.log(e.target);
    }


    return(
        <div>
            <button onClick={(e)=> {paramFunc(10,e)}}>Click</button>
            <br />
            <input type="text" onKeyUp={(e)=>{paramFunc1(e)}}/>
            <input type="text" onKeyUp={(e)=>console.log(e.target)}/>
        </div>
    )
}

export default Example5;