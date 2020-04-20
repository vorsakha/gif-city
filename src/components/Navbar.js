import React from "react"
import { NavLink } from "react-router-dom"



export default function Navbar() {
    return(
        <div>
            <h1 
            className="mt-4 mb-5 col-md-12 text-info text-center" 
            style={{fontFamily: 'Permanent Marker', fontSize: '5em'}}
            >Gif City</h1>
            <nav className="d-flex justify-content-center">
                <ul className="d-flex flex-row justify-content-center " >
                    <li>
                        <NavLink className="btn btn-info nav-btn" style={{boxShadow: 'none'}} exact to="/">Trending</NavLink>
                    </li>
                    <li>
                        <NavLink className="btn btn-info nav-btn" style={{boxShadow: 'none'}} exact to="/random">Random</NavLink>
                    </li>
                    <li>
                        <NavLink className="btn btn-info nav-btn" style={{boxShadow: 'none'}} exact to="/search">Search</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}