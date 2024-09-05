import { Component } from "react";
import Example3 from "./Example3";

class Example2 extends Component{
    state = {
        name : "Hariram"
    }
    render(){
        const mystyle = {
            color : "green",
            backgroundColor : "skyblue"
        }
        return(
            <div style={mystyle}>
                <h1>Multi style</h1>
                <h2>(Class component and state)This is my class Component: {this.state.name}</h2>
                <Example3 name={this.state.name}/>
            </div>
        )
    }
}

export default Example2;