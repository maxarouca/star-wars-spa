import React from 'react';
// import {Link} from 'react-router-dom'
import './styles.css'

const Pagination = (props) => {
  return ( 
    <nav>
      <ul className="pagination">
        <li className="page-item"><button className="page-link" onClick={() => props.next()} >Previous</button></li>
        <li className="page-item"><button className="page-link" onClick={() => props.next()} >Next</button></li>
      </ul>
    </nav>
   );
}
 
export default Pagination;