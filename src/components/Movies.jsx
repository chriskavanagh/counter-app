import React, { Component, Fragment } from "react";
import Like from './common/Like';
import { getMovies } from "./../services/fakeMovieService";
import Pagination from './common/Pagination';
import { paginate } from '../utils/Paginate';


export class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1
  };


  componentDidMount() {
    this.setState({
      movies: getMovies()
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


  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;
    const movies = paginate(allMovies, currentPage, pageSize);
    
    return (
      <div className="container pt-4">
        <div className="mt-4">
            {!count && <h1>No Movies In Database!</h1>}
        </div>

        {count && (
          <Fragment>
            <div className="container">
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
                      <Like liked={movie.liked} onClick={() => this.handleLike(movie)}/>
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
          </Fragment>
        )}
      </div>
    );
  }
}

export default Movies;
