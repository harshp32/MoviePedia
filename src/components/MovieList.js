import React from "react";
import './MovieList.css';

const MovieList=(props)=>{

    const renderedList = props.movies.map((movie, index)=>{
        return(
            <div className="outer-style" onClick={()=>props.onMovieSelect(movie.imdbID)}>
                 
                <img className="img-style" src={movie.Poster} alt="poster" />
                <div className="inner-style">
                        <p style={{margin:"0px"}}>Title :- {movie.Title}</p>
                        <p >Year :- {movie.Year}</p>
                </div> 
                 <p className="inner-style" style={{margin:"auto auto 5px auto"}}>Type :- {movie.Type}</p>
            </div>
        )
    });
    return (
    <div className="ui container" >
        <div className="card-style">
            {renderedList}
        </div>
    </div>
    )
};

export default MovieList;