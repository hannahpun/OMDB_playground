import React, { useState, useEffect } from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Content.scss";
const Content = (props: any) => {
    const [data, setData] = useState({});
    let { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`/?apikey=a4149d67&i=${id}`);
            setData(result.data);
            // console.log('data: ', data)
        };
        fetchData();
    }, [id]);
    return (<>
      <article className="container content-wrapper">
        <img src={(data as any).Poster} alt=""/>
        <div className="content">
          <h1>{(data as any).Title}</h1>
          <ul>
            <li>Ratings: {(data as any).imdbRating}</li>
            <li>Votes: {(data as any).imdbVotes}</li>
            <li>Awards: {(data as any).Awards}</li>
          </ul>
          <p>{(data as any).Plot}</p>
        </div>
      </article>
    </>);
};
export default Content;
