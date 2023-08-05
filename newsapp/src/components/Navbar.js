import React, { Component } from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark display:flex">
        <Link className="navbar-brand" to="/general">NEWSAPP</Link>
        
        <div className=" navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/general">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item "> 
              <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item "><Link className="nav-link" to="/general">General </Link></li>
            <li className="nav-item "><Link className="nav-link" to="/business">Business</Link></li>
            <li className="nav-item "><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
            <li className="nav-item "><Link className="nav-link"to="/health">Health</Link></li>
            <li className="nav-item "><Link className="nav-link" to="/science">Science</Link></li>
            <li className="nav-item "><Link className="nav-link" to="/sports">Sports</Link></li>
            <li className="nav-item "><Link className="nav-link" to="/technology">Technology</Link></li>
            
            
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
};

