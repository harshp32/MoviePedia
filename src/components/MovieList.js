import React from "react";
import './MovieList.css';

const MovieList=(props)=>{

    const renderedList = props.movies.map((movie, index)=>{
        return(
            <div className="outer-style" onClick={()=>props.onMovieSelect(movie.imdbID)}>
                 
                <img className="img-style" src={movie.Poster} alt="poster" />
                <div className="inner-style">

                        <p style={{margin:"0px"}}>Type :- {movie.Type}</p><br/>
                        <p >Year :- {movie.Year}</p> <br />
                </div> 
                <br />
                 <p className="inner-style" style={{margin:"auto auto 5px auto"}}>Title :- {movie.Title}</p>
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