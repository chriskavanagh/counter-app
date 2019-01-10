import React, { Component } from "react";
import Like from './common/Like';
import { getMovies } from "./../services/fakeMovieService";
import { getGenres } from "./../services/fakeGenreService";
import Pagination from './common/Pagination';
import { paginate } from '../utils/Paginate';
import ListGroup from './common/ListGroup';


export class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    genres: [],
    currentPage: 1,
    selectedGenre: "",
  };


  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: getGenres()
    });
  };


  handleDelete = movie => () => {
    const movies = this.state.movies.filter(m => {
      return movie._id !== m._id;
    });
      this.setState({ movies: movies });
  };


  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({movies})
  };


  handlePageChange = (page) => {
    this.setState({currentPage: page})
  };


  handleGenreSelect = (genre) => {
    console.log(`Item = ${JSON.stringify(genre)}`)
    this.setState({selectedGenre: genre});
  }; 


  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, selectedGenre, movies: allMovies } = this.state;
    const filtered = selectedGenre
     ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
     : allMovies;
    const movies = paginate(filtered, currentPage, pageSize);
    
    return (
      <div className="container">
       <div className="row">
         <div className="col-3 m-4">
           <ListGroup 
            items={this.state.genres}
            selectedItem={this.state.selectedGenre} 
            onItemSelect={this.handleGenreSelect}
           />
         </div>

          <div className="col">            
            <div className="mt-4">
                {!count && <h1>No Movies In Database!</h1>}
            </div>

            {count && (         
                <div>
                <h3 className="mb-4">Showing {count} Movies In Database</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Genre</th>
                      <th>Stock</th>
                      <th>Rate</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  {movies.map(movie => (
                    <tr key={movie._id}>
                      <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td>
                        <Like
                          liked={movie.liked}
                          onClick={() => this.handleLike(movie)}
                        />
                      </td>
                      <td>
                        <button
                          onClick={this.handleDelete(movie)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination 
                itemsCount={count} 
                pageSize={pageSize}
                currentPage={currentPage} 
                onPageChange={this.handlePageChange}
              />
              </div>              
              )}              
              </div>            
            </div>
          </div>
        );
      }
}

export default Movies;
