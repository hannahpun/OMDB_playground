import React, { useState, useEffect } from 'react';
import Lists from 'Components/Lists/Lists';
import InputGroup from 'Components/InputGroup/InputGroup';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = (props) => {
    const [data, setData] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [dataCount, setDataCount] = useState(0);

    const [queryCat, setQueryCat] = useState('');

    let queryStr = useQuery();
    let pageId = queryStr.get('p') || 1;
    let queryT = queryStr.get('s');

    const [url, setUrl] = useState('');
    const [queryTitle, setQuery] = useState(queryT || 'game');

    useEffect(() => {
        setUrl(`/?apikey=a4149d67&s=${queryTitle}&page=${pageId}${queryCat ? `&type=${queryCat}` : ``}`);

        const fetchData = async () => {
            const result = await axios(url);

            if (result.data.Search) {
                setData(result.data.Search);
                setDataCount(result.data.totalResults);
            } else {
                setData([]);
                setErrorMsg(result.data.Error);
                setDataCount(0);
            }
        };
        fetchData();
    }, [pageId, url, queryTitle, queryCat]);

    const onChangeValue = (e) => {
        setQuery(e.target.value);
    };

    const onChangeCat = (e) => {
        setQueryCat(e.target.value);
    };

    const onSearch = (e) => {
        setUrl(`/?apikey=a4149d67&s=${queryTitle}&page=${pageId}${queryCat ? `&type=${queryCat}` : ``}`);
    };

    return (
        <>
            <InputGroup
                titleValue={queryTitle}
                onChangeValue={onChangeValue}
                onSearch={onSearch}
                onChangeCat={onChangeCat}
            />
            <Lists
                errorMsg={errorMsg}
                lists={data}
                titleValue={queryTitle}
                pageId={pageId}
                totalListCount={dataCount}
            />
        </>
    );
};

export default Home;
