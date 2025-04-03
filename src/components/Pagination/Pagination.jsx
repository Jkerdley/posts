import React from "react";
import "./pagination.css";
export const Pagination = ({ currentPage, setCurrentPage, indexOfLastPost, posts }) => {
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div className="pagination">
            <button
                className="pagination_button"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <p className="pagination_button-text">Предыдущая</p>
            </button>
            <button
                className="pagination_button"
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastPost >= posts.length}
            >
                <p className="pagination_button-text">Следующая</p>
            </button>
        </div>
    );
};
