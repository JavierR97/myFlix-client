import React from 'react';

export class MovieView extends React.Component {

    
    render() {
        const { movie, onBackClick } = this.props;
        
        if (movie.length === 0) return <div className="movie-view">No information to be displayed.</div>
        
        return (
            <div className="movie-view">
                <div className="movie-poster">
                    <img src={movie.ImagePath} />
                </div>
                <div className="movie-title">
                    <span className="label">Title: </span>
                    <span className="value">{movie.Title}</span>
                </div>
                <div className="movie-description">
                    <span className="label">Description: </span>
                    <span className="value">{movie.Description}</span>
                </div>
                <button onClick={() => { onBackClick(null); }}>Back</button>

            </div>
        )
    }
    
    keypressCallback(event) {
        console.log(event.key);
    }
    
    componentDidMount() {
        document.addEventListener('keypress', this.keypressCallback);
    }
    
    componentWillUnmount() {
        document.removeEventListener('keypress' , this.keypressCallback)
    }
}