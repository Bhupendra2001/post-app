import React from "react";
import './Counter.css'
class Counter  extends React.Component {

    constructor(){
        super()
        this.state = {
            count : 0,
        };   
    }

    IncreaseCounter(){
         this.setState({
            count : this.state.count + 1,
    })
   }
    DecreaseCounter(){
        this.setState({
        count : this.state.count -1,
      })

    }  
    
  
   ChangeInput(value){
        this.setState({
        count : value,
      })

    } 

    showTypeOfCount(){
      if(this.state.count % 2 === 0)
      return <span id="even"> Even </span>
      else
      return  <span id= "odd"> Odd </span>
      
    }
    render(){
        return (
            <div className = "count-component">
            <p>Count - {this.state.count}</p>
            <input 
            type= "number"
            value={this.state.count}
            onChange ={(event)=> this.ChangeInput(event.target.value)}
              /> 
            <button onClick={()=> this.IncreaseCounter()}> + Increment </button>
            <button  onClick={()=> this.DecreaseCounter() }> - Decrement </button>
            <div className="count-type" >
            { this.showTypeOfCount() }

            </div>
            </div>
        )
    }
}



export default Counter