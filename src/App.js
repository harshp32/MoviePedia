import React,{useState, useEffect} from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieInfo from "./components/MovieInfo";
import Button from "./components/Buttons";
import './App.css';

export const API_KEY="8ae9c9d7"

export default()=>{
    
    const[term, setTerm] = useState('');
    const[movies, setMovies]=useState([]);
    const[selectedMovie, onMovieSelect]=useState();

    const fetchData = async (term)=>{
        const response = await axios.get(`http://www.omdbapi.com/?s=${term}&apikey=${API_KEY}`)
        if(response.data.Search){
            setMovies(response.data.Search);
        }
    }

    useEffect(()=>{
        
                if(term && !movies.length){
                    fetchData(term);
                }
                else{
                    const timeoutId = setTimeout(()=>
                        {
                            if(term){
                                fetchData(term);
                            }},1000);
                        return()=>{
                            clearTimeout(timeoutId);
                        };
                    }
                    
    },[term]);      

    return(
        <div>
            <div className="hdr">
                <Header/>
            </div>
            <div>
                 <SearchBar term={term} setTerm={setTerm} />
            </div>
            <div >
                {movies.length && <Button/>}
                {selectedMovie && <MovieInfo selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />}
                    <MovieList movies={movies} onMovieSelect={onMovieSelect}/>
            </div>
            
        </div>
    )
}
