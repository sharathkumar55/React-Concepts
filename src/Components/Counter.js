import React from 'react'

class Counter extends React.Component{

    constructor(props)
    {
        super(props);

        this.state = {
            name:'sharath'
        }

        this.state = {
            count:0
        }
    }

    handleChange = () =>{
        this.setState({
            name:'bharath'
        })
    }

    handleIncrease = () =>{
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
    }

    render(){
        return (
            <>
            <h2>{this.state.name}</h2>
            <button onClick={this.handleChange}>Click me</button>
            <label>Count is {this.state.count}</label>
            <button onClick={this.handleIncrease}>Increase me</button>

            </>
        )
    }
}

export default Counter;
