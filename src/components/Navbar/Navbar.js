import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
    <div className="d-flex flex-column flex-shrink-0 bg-light menu">
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
            <li className="bg-white mb-2 rounded">
                <NavLink to="/" exact className="nav-link py-3 border-bottom text-black" title="home" >
                    <i className="bi bi-cloud"></i>
                </NavLink>
            </li>
            <li className="bg-white rounded">
                <NavLink to="/bookmarks" className="nav-link py-3 border-bottom text-black" title="" >
                    <i className="bi bi-bookmarks"></i>
                </NavLink>
            </li>
        </ul>
    </div>
)