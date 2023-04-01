import React, { useEffect, useState} from "react";
import axios from 'axios';
import { API_KEY } from "../App";

const Button= (props)=>{
    const[genre, setGenre]=useState('');
    
    useEffect(()=>{axios.get(`http://www.omdbapi.com/?s=${props.term}&apikey=${API_KEY}&type=${genre}`)
                        .then((response)=>props.setMovies(response.data.Search));
        },[genre]);
    return(
            <div className="genre-button">
                <button className="tiny ui floated primary button" onClick={()=>setGenre('movie')} >
                Movies
                </button>
                <button className="tiny ui floated primary button" onClick={()=>setGenre('series')}>
                Series
                </button>
                <button className="tiny ui floated primary button" onClick={()=>setGenre('game')}>
                Games
                </button>
            </div>
    );
};

export default Button;