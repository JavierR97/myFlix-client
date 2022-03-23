// imports React into this file.
import React from 'react';
import axios from 'axios';

import { MovieCard } from './movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

// (export) - makes the new component usable by other components, modules, and can be inported into files. 
// (class) - states that the component is a class component (as apposed to a function component)
// (MainView) - new component name
// (extends React.Component) - Tells React to create a new MainView componint using the generic react.component template
export class MainView extends React.Component {

    // (constructor) -  used to initalize a states valuses
    constructor(){

        // ( super(); ) - initializes the components state - calls 'constructor' of parent class ( whats after entends above 'React.Component' )
        super();

        // (this.state) - initializes our movie object 
        this.state = {
            movies: [],
          selectedMovie: null
        }
    }

    componentDidMount(){
        axios.get('https://myfilmapi.herokuapp.com/movies')
          .then(response => {
            this.setState({
              movies: response.data
            });
          })
          .catch(error => {
            console.log(error);
          });
      }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

// ( render() )- controles what the component displays
    render() {
    const { movies, selectedMovie } = this.state;
    
    if (selectedMovie) return <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>;

    // returns 'this list is empty' if movies array is empty
    if (movies.length === 0) return <div className="main-view" />;
    
    // this is what is going to display/render
    return (
        <div className="main-view">
        {movies.map(movie => <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />)}
        </div>
    );
  }
}

