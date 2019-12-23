import React, {useState, useEffect} from 'react';

import {
  useParams
} from "react-router-dom";

import axios from 'axios';

const Content = (props) => {
  const [data, setData] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `/?apikey=a4149d67&i=${id}`,
      );

      setData(result.data); 
      console.log('data: ', data)
    };
    fetchData()
  }, [])


  return (
   <>
   <h1>hi</h1>{id}
   {data.Title}
   {data.Plot}
   </>
  );
}

export default Content;
