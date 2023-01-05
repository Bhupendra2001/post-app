import React from "react";
import './Counter.css'
class Counter  extends React.Component {

    constructor(){
    super()
    this.state = {
    count : 0,
    };   
    }
    IncreaseCounter(){ this.setState({  count : this.state.count + 1,  }) }
    DecreaseCounter(){ this.setState({ count : this.state.count -1, })}  
    ChangeInput(value){  this.setState({ count : value,  }) } 
    render(){
        return (
            <div className = "count-component">
              <h1 id = "c">Simple Counter</h1>
            <p>Count - {this.state.count}</p>
            <input type= "number" value={this.state.count} onChange ={(event)=> this.ChangeInput(event.target.value)}/> 
            <button className="b" onClick={()=> this.IncreaseCounter()}> + Increment </button>
            <button className="b" onClick={()=> this.DecreaseCounter() }> - Decrement </button>
            </div>
        )
    }
}



export default Counter