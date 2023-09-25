import React from 'react'

export  class BindingEventsDemo extends React.Component{

    constructor(){
        super()

        this.state = {
            name:'Hey'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(){
    //     this.setState({
    //         name:'sharath'
    //     })
    // }

    //Approach 4
    handleChange = () =>{
        this.setState({
            name:'sharath'
        })
    }

    render(){
        return (
            <>
            <label>{this.state.name}</label>
            {/* Approach 1  method binding*/}
            {/* <button onClick={this.handleChange.bind(this)}>Approach 1</button> */}

            {/* Approach 2  using arrow declaration*/}
            {/* <button onClick={()=>this.handleChange()}>Approach 2</button> */}

            {/* Approach 3  in constructor */}
            {/* <button onClick={this.handleChange}>Approach 3</button> */}

            {/* Approach 3  arrow function function defination */}
            <button onClick={this.handleChange}>Approach 3</button>
            </>
        )
    }
}

