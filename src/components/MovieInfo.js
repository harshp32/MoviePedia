import React,{useState,useEffect} from "react";
import axios from 'axios';
import { api_key } from "../App";
import './css/MovieInfo.css';

const MovieInfo=(props)=>{

    const[movieDetails, setMovieDetails]=useState();
    useEffect(()=>{axios.get(`https://www.omdbapi.com/?i=${props.selectedMovie}&apikey=${api_key}`)
                        .then((response)=>setMovieDetails(response.data));
    },[props.selectedMovie]);

    return(
        <div className="ui items outerStyle">
            <div className="item">
                {MovieInfo?<>
                <div className="image">
                    <img src={movieDetails?.Poster} alt="poster"/>
                </div>
                <div className="content">
                    <p className="header movieInfoText">Movie Name :- {movieDetails?.Title}</p>
                    <div className="description">
                            <button className="tiny ui right floated primary button" onClick={()=>props.onMovieSelect()}>Close</button>
                        <p className="movieInfoText">IMDB Rating :- {movieDetails?.imdbRating}</p>
                        <p className="movieInfoText">Release :- {movieDetails?.Released}</p>
                        <p className="movieInfoText">Runtime :- {movieDetails?.Runtime}</p>
                        <p className="movieInfoText">Genre :- {movieDetails?.Genre}</p>
                        <p className="movieInfoText">Director :- {movieDetails?.Director}</p>
                        <p className="movieInfoText">Writer :- {movieDetails?.Writer}</p>
                        <p className="movieInfoText">Actors :- {movieDetails?.Actors}</p>
                        <p className="movieInfoText">Language :- {movieDetails?.Language}</p>
                        <p className="movieInfoText">Country :- {movieDetails?.Country}</p>
                        <p className="movieInfoText">Awards :- {movieDetails?.Awards}</p>
                        <p className="movieInfoText">Plot :-{movieDetails?.Plot}</p>
                    </div>
                </div>
                </> : "Loading...."}
            </div>
        </div>
    );
};

export default MovieInfo;