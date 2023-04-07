import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../App";
import './css/Buttons.css';

const Button = ({term, setMovies, totalResult, setTotalResult}) => {
  const [genre, setGenre] = useState("");
  const [page, setPage] = useState(1);

  const handlePreviousClick=()=>{
    if(page>1){
        axios
            .get(`http://www.omdbapi.com/?s=${term}&apikey=${API_KEY}&type=${genre}&page=${page}`)
            .then((response)=>{
            setMovies(response.data.Search);
            setTotalResult(response.data.totalResults);
            setPage(page-1);
        });
    }
    };
      
    const handleNextClick=()=>{
            axios
            .get(`http://www.omdbapi.com/?s=${term}&apikey=${API_KEY}&type=${genre}&page=${page}`)
            .then((response)=>{
            setMovies(response.data.Search);
            setTotalResult(response.data.totalResults);
            setPage(page+1);
        });
  };
  const showPreviousButton=()=>{
    if(page<1){
        return(
            <button className="previous-page p-button">
            Previous Page
             </button>
        )
    }
    return (
        <button className="p-button" onClick={handlePreviousClick}>Previous Page</button>
    )
  }

  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com/?s=${term}&apikey=${API_KEY}&type=${genre}`
      )
      .then((response) => 
            {
                setMovies(response.data.Search);
                setTotalResult(response.data.totalResults);
                setPage(1);
            });
  }, [genre]);
  return (
    <div className="btnOuterStyle">
      <div className="genre-button">
        <button
          className="tiny ui floated primary button"
          onClick={() => setGenre("movie")}
        >
          Movies
        </button>
        <button
          className="tiny ui floated primary button"
          onClick={() => setGenre("series")}
        >
          Series
        </button>
        <button
          className="tiny ui floated primary button"
          onClick={() => setGenre("game")}
        >
          Games
        </button>
      </div>
      <div className="pageStyle">
         <div className="pageTextStyle">
          Total Pages = {Math.floor(totalResult / 10)} <br/>
          Current page = {page}
        </div>
        <div className="page-button">
            <button className="p-button" onClick={handleNextClick}>Next Page</button>
             {showPreviousButton()}
        </div>
       
      </div>
    </div>
  );
};

export default Button;
