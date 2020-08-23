import React, { Component } from 'react';




class Faq extends Component {
    state = {
        status: true,
        status1:true

    }
    handleAnswer = () => {
        // console.log(this.state.statusShort)
        // let newStatus = !status
        // console.log(newStatus)
        if (this.state.status1 === false) {
            this.setState({ status1: true });
        }
        this.setState({ status: !this.state.status });
    }
    handleAnswer1 = () => {
        // console.log(this.state.statusShort)
        // let newStatus = !status
        // console.log(newStatus)

        this.setState({ status1: !this.state.status1 });
    }
    render() {
        return (
//             <section>
//                 <label htmlFor="">Why is React great?</label>
//                 <button onClick={this.handleAnswer}>{this.state.status ? '+' : '-'}</button>
//                 <div>
//                     <label className={this.state.status ? 'hide' : 'show'} htmlFor="">Fast learning curve</label>
//                     <button className={this.state.status ? 'hide' : 'show'} onClick={this.handleAnswer1}>{this.state.status1 ? '+' : '-'}</button>
//                 </div>
//                 <p className={this.state.status1 ? 'hide' : 'show'}>React is very a simple and lightweight library that only deals with the view layer. It is not a beast like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start developing an awesome web application after only a couple of days reading tutorial.
//                 As the React guide says ‘Thinking in React’ may be a little different than you used to since it brings a new approach to the table, but it will become much easier and natural as you gain experience with it.

// </p>
//             </section>
                 <section>
                 <label htmlFor="">{this.props.question}</label>
                 <button onClick={this.handleAnswer}>{this.state.status ? '+' : '-'}</button>
                 <div>
                     <label className={this.state.status ? 'hide' : 'show'} htmlFor="">{this.props.answer}</label>
                     <button className={this.state.status ? 'hide' : 'show'} onClick={this.handleAnswer1}>{this.state.status1 ? '+' : '-'}</button>
                 </div>
                 <p className={this.state.status1 ? 'hide' : 'show'}>{this.props.answerLong}
 
 </p>
             </section>
        );
    }
}

export default Faq;