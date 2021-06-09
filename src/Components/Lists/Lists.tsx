import React from 'react';
import List from './List/List';
import Pagination from '../Pagination/Pagination';

import './Lists.scss';

const Lists = ({
    lists,
    totalListCount,
    titleValue,
    pageId,
    errorMsg
}: any) => {
    const perPageLists = 10;
    const maxPage = Math.ceil(totalListCount / perPageLists);

    return <>
        {/* maxPage: {maxPage} */}
        <main className='lists'>
            {lists.length > 0 ? (
                lists.map((list: any) => <List
                    id={list.imdbID}
                    key={list.imdbID}
                    type={list.Type}
                    year={list.Year}
                    img={list.Poster}
                    title={list.Title}></List>)
            ) : (
                <p>{errorMsg} please try again.</p>
            )}
        </main>
        <Pagination pageId={pageId} maxPage={maxPage} titleValue={titleValue} />
    </>;
};

export default Lists;
