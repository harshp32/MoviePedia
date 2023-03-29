import React, { useState } from "react";
import axios from 'axios';
import { API_KEY } from "../App";

const Button= ()=>{
    const[genre, setGenre]=useState();
    
    return(
            <div className="genre-button">
                <button className="tiny ui floated primary button">
                Movies
                </button>
                <button className="tiny ui floated primary button">
                Series
                </button>
                <button className="tiny ui floated primary button">
                Games
                </button>
            </div>
        
    );
};

export default Button;