import React from 'react'
import { useFlickr } from '../../FlickrContext/FlickrContext'

export const Pagination = props => {

    const {page, nextPage, prevPage} = useFlickr()

    return (
        <div aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                <li className={`page-item ${page===1 ? "disabled" : ""}`}>
                    <button onClick={() => prevPage()} className="page-link" href="!#" tabIndex="-1">Previous</button>
                </li>
                <li className="page-item">
                    <span className="page-link text-black">Page {page} of {props.total}</span>
                </li>
                <li className={`page-item ${page===props.total ? "disabled": ""}`}>
                    <button onClick={() => nextPage()} className="page-link" href="!#">Next</button>
                </li>
            </ul>
        </div>
    )
}