import React from 'react'
import "./Style.css";
export default function Navbar() {
  return (
    <div className='container'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className=" H-Logo" href="#">H<a className="navbar-brand" href="#">erfa</a></a>
      {/* "menu bar" handel responsive */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div  id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )
}
