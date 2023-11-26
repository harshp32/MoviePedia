import React, { useState } from "react";
import axios from "axios";
import { api_key } from "../App";
import './css/Buttons.css';

const Button = ({term, setMovies, totalResult, setTotalResult}) => {
  const [genre, setGenre] = useState("");
  const [page, setPage] = useState(1);
  
    const movieClick=() => {
        axios
        .get(
            `https://www.omdbapi.com/?s=${term}&apikey=${api_key}&type=movie`
        )
        .then((response) => 
                {
                    setMovies(response.data.Search);
                    setTotalResult(response.data.totalResults);
                    setPage(1);
                    setGenre("movie");
                });
    };

    const seriesClick=() => {
        axios
        .get(
            `https://www.omdbapi.com/?s=${term}&apikey=${api_key}&type=series`
        )
        .then((response) => 
                {
                    setMovies(response.data.Search);
                    setTotalResult(response.data.totalResults);
                    setPage(1);
                    setGenre("series");
                });
    };

    const gameClick=() => {
        axios
        .get(
            `https://www.omdbapi.com/?s=${term}&apikey=${api_key}&type=game`
        )
        .then((response) => 
                {
                    setMovies(response.data.Search);
                    setTotalResult(response.data.totalResults);
                    setPage(1);
                    setGenre("game")
                });
    };

  const handlePreviousClick=()=>{
    
        axios
            .get(`https://www.omdbapi.com/?s=${term}&apikey=${api_key}&type=${genre}&page=${page}`)
            .then((response)=>{
            setMovies(response.data.Search);
            setTotalResult(response.data.totalResults);
            setPage(page-1);
        });
    };
      
    const handleNextClick=()=>{
            axios
            .get(`https://www.omdbapi.com/?s=${term}&apikey=${api_key}&type=${genre}&page=${page}`)
            .then((response)=>{
            setMovies(response.data.Search);
            setTotalResult(response.data.totalResults);
            setPage(page+1);
        });
    };
    const showPreviousButton=()=>{
        if(page<=1){
            return(
                <button className="previous-page p-button">
                Previous Page
                </button>
            )
        }
        return (
            <button className="p-button xyz" onClick={handlePreviousClick}>Previous Page</button>
        )
    }
    const showNextButton=()=>{
        if(page>=Math.floor(totalResult / 10)){
            return(
                <button className="previous-page p-button">
                    Next Page
                 </button>
            )
        }
        return (
            <button className="p-button" onClick={handleNextClick}>Next Page</button>
        )
      }

    const TotalPages=()=>{
        if(Math.floor(totalResult / 10)===0){
          return(
            <div>
              Total Page = 1
            </div>
          )
        }
        return(
          <div>
              Total Pages = {Math.floor(totalResult / 10)}
            </div>
        )
    }
  return (
    <div className="btnOuterStyle">
      <div className="genre-button">
        <button onClick={movieClick}
          className="tiny ui floated primary button"
        >
          Movies
        </button>
        <button onClick={seriesClick}
          className="tiny ui floated primary button"
        >
          Series
        </button>
        <button onClick={gameClick}
          className="tiny ui floated primary button"
        >
          Games
        </button>
      </div>
      <div className="pageStyle">
         <div className="pageTextStyle">
          {TotalPages()} <br/>
        </div>
        <div className="page-button">
             {showNextButton()}
             {showPreviousButton()}
        </div>
      </div>
    </div>
  );
};

export default Button;
