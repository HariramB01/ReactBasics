import { Component } from "react";


class Example3 extends Component{
    render(){
        return(
            <h2>(Class component and props)This name is from Example2 file {this.props.name}</h2>
        )
    }
}

export default Example3;