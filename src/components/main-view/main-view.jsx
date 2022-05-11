// imports React into this file.
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';


import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
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
        //axios is used to fetch movies, then set the state of movues using this.setState
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

    onLoggedIn(authData) {
        console.log(authData);
        this.setState({
            user: authData.user.Username
        });
        
        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        this.getMovies(authData.token);
    }

    onRegister(user) {
        this.setState({
            user
        });
    }

    getMovies(token) {
        axios.get('https://myfilmapi.herokuapp.com/movies', {
          headers: { Authorization:`Bearer ${token}`}
        })
        .then(response => {
          // Assign the result to the state
          this.setState({
            movies: response.data
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      }

// ( render() )- controles what the component displays
    render() {
    const { movies, selectedMovie, user } = this.state;

    if (!user) {
        return (
            <>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                <RegistrationView onRegister={user => this.onRegister(user) } />
            </>
        );
    }  
    
    // returns 'this list is empty' if movies array is empty
    if (movies.length === 0) return <div className="main-view">loading...</div>;
    
    if (selectedMovie) return <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>;

    
    // this is what is going to display/render
    return (
        <div className="main-view">
            <Row>       
                {movies.map(movie => <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />)}                         
            </Row>
        </div>
    );
  }
}

MainView.propTypes = {
    onLoggedIn: PropTypes.func,
    onRegister: PropTypes.func
};

/* 
    if(!user) return < LoginView onLoggedIn={ user => this.onLoggedIn(user) }  />
    /* if(!user) return < RegistrationView onRegister={ user => this.onRegister(user) }  />  * */


    