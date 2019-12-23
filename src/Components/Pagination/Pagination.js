import React, {useState, useEffect} from 'react';
import {
  Link
} from "react-router-dom";


const Pagination = ({pageId, maxPage, titleValue}) => {

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(Number(pageId))
  }, [pageId])


  return (
    <>
    {maxPage > 0 ?
    <nav aria-label="Page navigation example">
      {/* currentPage: {currentPage} */}
      <ul className="pagination">
        <li className="page-item">
          <Link 
            className={`btn page-link ${currentPage === 1 ? 'disabled': ''}`} 
            onClick={() => setCurrentPage(currentPage - 1)}
            to={location => ({ ...location, search: `?s=${titleValue}&p=${currentPage - 1}` })}>Previous</Link>
        </li>
        <li className="page-item">
          <Link 
          className={`btn page-link ${currentPage === maxPage ? 'disabled': ''}`} 
          onClick={() => setCurrentPage(currentPage + 1)}
          to={location => ({ ...location, search: `?s=${titleValue}&p=${currentPage + 1}` })}>Next</Link>
        </li>
      </ul>
    </nav>
     : null}
    </>
  )
}


export default Pagination;
