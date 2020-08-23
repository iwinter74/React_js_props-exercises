import React, { Component } from 'react';
import './App.css';
import Faq from './Exercises/FAQ/Faq';
import Counter from './Exercises/Counter';
import MoviesList from './Exercises/Movies/MoviesList';
import FaqList from './Exercises/FAQ/FaqList';
import Schalter from './Schalter/Schalter';

class App extends Component {
    state = {  }
    render() { 
        return (
            <section className="App">
                <Faq />
                <Counter />
                <MoviesList />
                <FaqList />
                {/* <Faq1 /> */}
                <Schalter />
            </section>
          );
    }
}
 
export default App;