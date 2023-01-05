import React from "react";
class HeadingClass extends React.Component{

    constructor(){
        super();
        console.log("hello  from constructor")
        this.state = {
            a : 1,
        }

       
    }

    componentDidMount (){
    console.log(" hello from DidMount ")
    this.updateVariableVar()
    }

    componentDidUpdate (){
        console.log(" hello from DidUpdate ")
    }

    componentWillUpdate (){
        console.log(" hello from WillUpdate ")
    }

    updateVariableVar() {
    setInterval(()=> {

        console.log("value is -", this.state.a)

        this.setState({
        a : this.state.a + 1,
         } ,()=> {
            console.log("update successFully")
         })
       
    },5000);
}

    render(){
        return(
            <div> 
                <h1> class compt --</h1> <br/>{" "}
                <p> value -- {this.state.a} </p>
            </div>
            )
    }
}

export default HeadingClass