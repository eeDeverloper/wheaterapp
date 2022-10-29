import React from 'react'
import '../assets/main.css'

const Nav = ()=> {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-4">
  <div className="container-fluid">
    <a className="navbar-brand" href="../index.html">The weather app</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="bx bx-menu menuRes"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" href="../index.html">Inicio
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Nav;