import React, { Component } from 'react';
import movies from './movies';
import MoviesItem from './MoviesItem';
 


class MoviesList extends Component {
    state = {
        data: movies.slice(),
        // movies: movies
        genreArr: [],
        year: '',
        title: '',
        rate: '',
        director: '',
        duration: ''

    }

    handleAlphabet = () => {
        console.log(this.state.data)
        const newData = this.state.data.sort((a, b) => {
            var movie1 = a.title.toUpperCase()
            var movie2 = b.title.toUpperCase()
            if (movie1 < movie2) {
                return -1
            }
            else if (movie1 > movie2) {
                return 1
            } else {
                return 0;
            }
        })
        this.setState({ data: newData });
        console.log(newData)
    }
    handleAlphabet1 = () => {
        console.log(this.state.data)
        const newData = this.state.data.sort((a, b) => {
            var movie1 = a.title.toUpperCase()
            var movie2 = b.title.toUpperCase()
            if (movie1 < movie2) {
                return 1
            }
            else if (movie1 > movie2) {
                return -1
            } else {
                return 0;
            }})
        this.setState({ data: newData });
        console.log(newData)
    }
    handleAscending = () => {
        console.log(this.state.data)
        const sortYear = this.state.data.sort((a, b) => {
            return a.year-b.year
        })
        this.setState({ data:sortYear  });
    }
    handleDescending = () => {
        console.log(this.state.data)
        const sortYear = this.state.data.sort((a, b) => {
            return b.year-a.year
        })
        this.setState({ data: sortYear });
        // this.setState({ movies }); // same as this.setState({ movies: movies });
    }
    handleRate = () => {
        console.log(this.state.data)
        const sortRate = this.state.data.sort((a, b) => {
            return b.rate-a.rate
        })
        this.setState({ data:sortRate  });
    }
    sortByAction=()=>{
        const movies=this.state.data.filter(movie=>{
            return movie.genre.includes("Action")
            //return movie.genre.indexOf("Action")!==-1
        })
        this.setState({ data:movies  });
    }
    formTitle = (e) => {
        this.setState({ title: e.target.value });
    }
    formYear = (e) => {
        this.setState({ year: e.target.value });
    }
    formRate = (e) => {
        this.setState({ rate: e.target.value });
    }
    formDuration = (e) => {
        this.setState({ duration: e.target.value });
    }
    formDirector = (e) => {
        this.setState({ director: e.target.value });
    }
    formGenre = (e) => {
        this.setState({ genre: e.target.value }, () => {
            if (this.state.genreArr.indexOf(this.state.genre) === -1) {
                this.state.genreArr.push(this.state.genre)
            }
        });
    }
    handleSubmit = (event) => {
        const movies = this.state.data.unshift({
            title: this.state.title,
            year: this.state.year,
            rate: this.state.rate,
            director: this.state.director,
            genre: this.state.genreArr,
            duration: this.state.duration

        })
        this.setState({ data: movies });
        event.preventDefault();
    }

    render() { 
        return ( 
            <main>
                <button onClick={this.handleAscending}>Sort by date ascending</button>
                <button onClick={this.handleDescending}>Sort by date descending</button>
                <button onClick={this.handleRate}>Best rate</button>
                <button onClick={this.handleAlphabet}>A-Z</button>
                <button onClick={this.handleAlphabet1}>Z-A</button>
                <button onClick={this.sortByAction}>Sort by Action</button>

                <form action="" >
                        <input type="text" onChange={this.formTitle} placeholder="title" />
                        <input type="text" onChange={this.formYear} placeholder="year" />
                        <input type="text" onChange={this.formDuration} placeholder="duration" />
                        <input type="text" onChange={this.formRate} placeholder="rate" />
                        <input type="text" onChange={this.formDirector} placeholder="director" />
                        <select name="genre" id="genre" multiple onChange={this.formGenre}>
                            <option value="action">Action</option>
                            <option value="drama">Drama</option>
                            <option value="crime">Crime</option>
                            <option value="thriller">Thriller</option>
                    </select>
                    <input type="button" value="Submit" onClick={this.handleSubmit} />
                    </form>

            <section id="grid">
                {this.state.data.map((movie, i) => 
                    <MoviesItem
                        key={i}
                        title={movie.title}
                        year={movie.year}
                        director={movie.director}
                        duration={movie.duration}
                        rate={movie.rate}
                        genre={movie.genre}
                    />
                    
                )}
                </section>
                </main>
         );
    }
}
 
export default MoviesList;