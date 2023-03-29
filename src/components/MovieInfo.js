import React,{useState,useEffect} from "react";
import axios from 'axios';
import { API_KEY } from "../App";
import './MovieInfo.css';
const MovieInfo=(props)=>{

    const[movieDetails, setMovieDetails]=useState();
    useEffect(()=>{axios.get(`https://www.omdbapi.com/?i=${props.selectedMovie}&apikey=${API_KEY}`)
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
                    <p className="header">Movie Name :- {movieDetails?.Title}</p>
                    <div className="description">
                            <button className="tiny ui right floated primary button" onClick={()=>props.onMovieSelect()}>Close</button>
                        <p>IMDB Rating :- {movieDetails?.imdbRating}</p>
                        <p>Release :- {movieDetails?.Released}</p>
                        <p>Runtime :- {movieDetails?.Runtime}</p>
                        <p>Genre :- {movieDetails?.Genre}</p>
                        <p>Director :- {movieDetails?.Director}</p>
                        <p>Writer :- {movieDetails?.Writer}</p>
                        <p>Actors :- {movieDetails?.Actors}</p>
                        <p>Language :- {movieDetails?.Language}</p>
                        <p>Country :- {movieDetails?.Country}</p>
                        <p>Awards :- {movieDetails?.Awards}</p>
                        <p>Plot :-{movieDetails?.Plot}</p>
                    </div>
                </div>
                </> : "Loading...."}
            </div>
        </div>
    );
};

export default MovieInfo;