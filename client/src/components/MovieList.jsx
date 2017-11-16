import React, { Component } from 'react';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: null,
      dataLoaded: false,
    }
  }

  componentDidMount(){
    fetch('/api/movies', {credentials: 'include'})
    .then(res => res.json())
    .then(res => {
      this.state({
        movies: res.data.movies,
        dataLoaded: true,
      })
    }).catch(err => console.log(err));
  }

  renderMovieList() {
    if(this.state.dataLoaded) {
      return this.state.movies.map(movie => {
        return <Movie key ={movie.id} movie={movie} />
      })
    }else return <p>Loading...</p>;
  }

  render() {
    return(
    <div className="movielist">
      {this.renderMovieList()}
    </div>
    )
  }
}

export default MovieList
