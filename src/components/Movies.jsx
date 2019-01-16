import React, { Component } from "react";
import MoviesTable from './MoviesTable';
import { getMovies } from "./../services/fakeMovieService";
import { getGenres } from "./../services/fakeGenreService";
import Pagination from './common/Pagination';
import { paginate } from '../utils/Paginate';
import ListGroup from './common/ListGroup';
import _ from 'lodash';


class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    genres: [],
    currentPage: 1,
    selectedGenre: "",
    sortColumn: {path: 'title', order: 'asc'}
  };


  componentDidMount() {
    const genres = [{_id: "", name: "All Genres"}, ...getGenres()]
    this.setState({
      movies: getMovies(),
      genres: genres
      // genres: getGenres()
    });
  };


  handleDelete = (movie) => () => {
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
    this.setState({selectedGenre: genre, currentPage: 1});
  }; 


  handleSort = (sortColumn) => {    
    this.setState({sortColumn})
  };

  render() {
    // destrucutre length out of state.movies, change name to 'count'
    const { length: count } = this.state.movies;

    // destructure state
    const {
       pageSize, currentPage, selectedGenre, sortColumn, movies: allMovies 
      } = this.state;

    // filter movies, if genre is "All" returns all Movies, otherwise by genre
    const filtered = selectedGenre && selectedGenre._id
      ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
      : allMovies;
    
    // lodash orderBy table headings
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

     // paginates movies by page based on filtered variable
    const movies = paginate(sorted, currentPage, pageSize);
    
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
                <h3 className="mb-4 text-center header1">
                  Showing {filtered.length} Movies In Database
                </h3>
                <MoviesTable
                  movies={movies}
                  sortColumn={sortColumn}
                  onLike={this.handleLike}
                  onSort={this.handleSort}
                  onDelete={this.handleDelete}
                />
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
} // end class Movies

export default Movies;
