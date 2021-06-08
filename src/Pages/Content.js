import React, {useState, useEffect} from 'react';

import {
  useParams
} from "react-router-dom";

import axios from 'axios';

import './Content.scss';

const Content = (props) => {
  const [data, setData] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `/?apikey=a4149d67&i=${id}`,
      );

      setData(result.data); 
      // console.log('data: ', data)
    };
    fetchData()
  }, [id])


  return (
   <>
   <article className="container content-wrapper">
    <img src={data.Poster} alt=""/>
    <div className="content">
      <h1>{data.Title}</h1>
      <ul>
        <li>Ratings: {data.imdbRating}</li>
        <li>Votes: {data.imdbVotes}</li>
        <li>Awards: {data.Awards}</li>
      </ul>
      <p>{data.Plot}</p>
    </div>
   
   </article>
   
   </>
  );
}

export default Content;
