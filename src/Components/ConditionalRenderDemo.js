import React, { Component } from 'react'

 class ConditionalRenderDemo extends Component {

    
    constructor(){
        super();

        this.state=({
            isTrue:true
        })
    }
    

  render() {
      
    // If/else 
        // if(this.state.isTrue)
        //     {
        //         return (
        //             <>
        //             <h1>hey Sharath</h1>
        //             </>
        //         )
        //     }
        // else
        // {
        //     return (
        //         <>
        //         <h1>hey Demo User</h1>
        //         </>
        //     )
        // }

        //Approach 2
        // let message;
        // if(this.state.isTrue)
        // {
        //      message = <h1>Hello Bharath</h1>
        // }
        // else{
        //       message = <h2>Hey User</h2>
        // }
        // return(
        //     <>
        //     {message}
        //     </>
        // )

        //Approach 3

        // return (
        //     <>
        //     {this.state.isTrue ? <h1>hey hero</h1> : <h2>hey nahh</h2> }
        //     </>
        // )

        //Approach 4
        return (
                <>
                {this.state.isTrue && <h1>hey hero</h1> }
                </>
            )
      
  }
}

export default ConditionalRenderDemo;