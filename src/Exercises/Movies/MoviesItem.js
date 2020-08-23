import React, { Component } from 'react';

class MoviesItem extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="border">
                <h1>{this.props.title}</h1>
                <h1>{this.props.year}</h1>
                <h1>{this.props.director}</h1>
                <h1>{this.props.duration}</h1>
                <h1>{this.props.rate}</h1>
                <ul>
                    {this.props.genre.map((genre, i) => <li key={i}>{ genre }</li>)}
                </ul>
            </section>
         );
    }
}
 
export default MoviesItem;