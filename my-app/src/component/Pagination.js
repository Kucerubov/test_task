import React from "react";
import {Link} from "react-router-dom";

const Pagination = ({ coursesPerPage, totalCourses, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCourses/coursesPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li className="page-item" key={number}>
                            <Link to="#" className="page-link" onClick={() => paginate(number)}>
                                {number}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination;