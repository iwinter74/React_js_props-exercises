import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        i : 0
    }
    handleDecrement = () => {
        console.log("minus")
        this.setState({ i:this.state.i-1  });
    }
    handleIncrement = () => {
        console.log("plus")
        this.setState({ i:this.state.i+1  });
    }
    handleReset = () => {
        console.log("reset")
        this.setState({ i: 0 });
    }
    render() { 
        return ( 
            <section>
                <button className="plusMinus" onClick={this.handleDecrement}>-</button>
                <span>{this.state.i}</span>
                <button className="plusMinus" onClick={this.handleIncrement}>+</button>
                <div>
                <button className="reset" onClick={this.handleReset}>Reset</button>
                </div>
            </section>
         );
    }
}
 
export default Counter;