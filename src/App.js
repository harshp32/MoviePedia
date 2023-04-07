import React,{useState} from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieInfo from "./components/MovieInfo";
import Button from "./components/Buttons";
import './App.css';

export const API_KEY="8ae9c9d7"

const App = () =>{
    
    const[term, setTerm] = useState('');
    const[movies, setMovies]=useState([]);
    const[selectedMovie, onMovieSelect]=useState();
    const[totalResult, setTotalResult]=useState('');

        const handleClick=()=>{
            axios.get(`http://www.omdbapi.com/?s=${term}&apikey=${API_KEY}`)
                 .then((response)=>{
                    setMovies(response.data.Search);
                    setTotalResult(response.data.totalResults);
                 })
        }
    return(
        <div>
            <div className="hdr">
                <Header/>
            </div>     
            <div>
                <SearchBar term={term} setTerm={setTerm} />
            </div>       
            <div className="searchBarSection">                 
                 <button className="searchButton" onClick={handleClick}>Search</button>
            </div>
            <div >
                {movies.length && <Button term={term} setMovies={setMovies} totalResult={totalResult} setTotalResult={setTotalResult}/>}
                {selectedMovie && <MovieInfo selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />}
                    <MovieList movies={movies} onMovieSelect={onMovieSelect}/>
            </div>
        </div>
    )
}

export default App;
