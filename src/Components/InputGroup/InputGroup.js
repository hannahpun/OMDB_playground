import React from 'react';
import './InputGroup.scss';
import {
  Link
} from "react-router-dom";

const InputGroup = ({pageId, titleValue, onSearch, onChangeValue, onChangeCat}) => {

  return (
    <fieldset className="search-form">
      <legend>Search IMDB</legend>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">Title</label>
          <input 
            type="search"
            value={titleValue}
            onChange={onChangeValue}
            className="form-control" 
            id="search-input" 
            placeholder="Search..." 
            aria-label="Search for..." ></input>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputState">Categories</label>
          <select id="inputState" onChange={onChangeCat} className="form-control">
            <option value="">All</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="episode">Episodes</option>
          </select>
        </div>
        
        <div className="form-group col-md-2">
          <Link 
            onClick={onSearch}
            className="btn btn-secondary form-control"
            to={`/?s=${titleValue}&p=1`}>Search</Link>
        </div>
      </div>

      
    </fieldset>
  )
}


export default InputGroup;
