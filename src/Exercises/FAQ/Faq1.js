import React, { Component } from 'react';
import Faq1Item from './Faq1Item';
import faq from './data.js'
console.log(faq)
class Faq1 extends Component {
    state = {
        faq: faq
    }
    handleFaq = (i) => {
        console.log(i)
        const newFaq = this.state.faq.slice()
        newFaq[i].isOpen = !newFaq[i].isOpen
        if (newFaq[i].textIsOpen) {
            newFaq[i].textIsOpen = false
        }
        this.setState({ faq: newFaq });
    }
    handleFaq1 = (i) => {
        const newFaq = this.state.faq.slice()
        newFaq[i].textIsOpen = !newFaq[i].textIsOpen
        this.setState({ faq: newFaq });
    }
    render() {
        return (
            <section>
                {this.state.faq.map((elt, i) => <Faq1Item
                    key={i}
                    handleFaq={() => this.handleFaq(i)}
                    isOpen={elt.isOpen}
                    textIsOpen={elt.textIsOpen}
                    handleFaq1={() => this.handleFaq1(i)}
                    question={elt.question}
                    answer={elt.answer}
                    answerLong={elt.answerLong}
                />)}

            </section>
        );
    }
}

export default Faq1;