import React from 'react'
import { Navbar } from '../Navbar/Navbar'

export const Layout = ({children}) => (
    <div className="page">
        <div className="navbar navbar-default navbar-fixed-top shadow-sm">
            <div className="container">
                <a className="navbar-brand text-black" href="!#">Image Finder</a>
                <i className="bi bi-person-circle"></i>
            </div>
        </div>
        <div className="mycontainer">
            <Navbar/>
            <div className="container mainpage">
                {children}
            </div>
        </div>    
        <footer className="footer mt-auto py-2 bg-light">
            <div className="container">
                <span className="text-muted me-1 copyright">Created by @matkonon</span>
            </div>
        </footer>
    </div>
)