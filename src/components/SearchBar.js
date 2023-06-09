import React from "react";
import './css/SearchBar.css';

const SearchBar = (props)=>{   
    return(
        <div style={{backgroundColor:"black"}} className="ui form">
            <div className="field sbarStyle">              
                <input
                    placeholder="Type here to search for any movie"
                    value={props.term}
                    onChange={e=>props.setTerm(e.target.value)}
                    className="input barStyle" />
            </div>
        </div>
    );
};

export default SearchBar;