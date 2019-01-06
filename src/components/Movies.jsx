import React, { Component, Fragment } from "react";
import { getMovies } from "./../services/fakeMovieService";

export class Movies extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.setState({
      movies: getMovies()
    });
  }

  handleDelete = movie => () => {
    const movies = this.state.movies.filter(m => {
      return movie._id !== m._id;
    });
    this.setState({ movies: movies });
  };

  render() {
    const { length: count } = this.state.movies;
    return (
      <div className="container-fluid">
        <div className="mt-4">
            {!count && <h1>No Movies In Database!</h1>}
        </div>

        {count > 0 && (
          <Fragment>
            <h3 className="mb-4">Showing {count} Movies In Database</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rate</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.state.movies.map(movie => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
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
          </Fragment>
        )}
      </div>
    );
  }
}

export default Movies;
