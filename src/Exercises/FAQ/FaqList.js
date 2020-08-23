import React, { Component } from 'react';
import Faq from './Faq';
import faqData from './faqData';


class FaqList extends Component {
    state = { 
        data: faqData.slice()
     }
    render() { 
        return ( 
            <section>
                
                {this.state.data.map((faqData, i) => <Faq
                    key= {i}
                    question={faqData.question}
                    answer={faqData.answer}
                    answerLong= {faqData.answerLong}
                />)}
            </section>
         );
    }
}
 
export default FaqList;