import React, { Component } from 'react';

class Schalter extends Component {
    state = {
        hdl: "Day",
        btn: "Change to Night",
        status: true
    }
    
    handleChange = () => {
        console.log("working")
        if (this.state.hdl == "Day") {
            this.setState({ hdl: "Night" });
            this.setState({ btn: "Change to Day" });
            this.setState({ status: false });
        }
        else {
            this.setState({ hdl: "Day" });
            this.setState({ btn: "Change to Night" });
            this.setState({ status: true });
        }
    }

    render() { 
        return ( 
            <section className={this.state.status ? 'blackWhite' : 'whiteBlack'} id="schalter">
                <h1 className={this.state.status ? 'blackWhite' : 'whiteBlack'}>{this.state.hdl}</h1>
                <input className={this.state.status? 'blackWhite': 'whiteBlack'} type="button" value={this.state.btn} onClick={this.handleChange}/>
            </section>
         );
    }
}
 
export default Schalter;