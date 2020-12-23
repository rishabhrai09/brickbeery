import React from 'react';
import './nav.css';

class Navbar extends React.Component{
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <a className="navbar-brand" href="/#">B R I C K B E R R Y</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">How It Works</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="/#">Properties</a>
      </li>
      
                 
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Resources
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/#">Action</a>
          <a className="dropdown-item" href="/#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/#">Something else here</a>
        </div>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="/#">Dashboard</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Contact Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">SIGN IN</a>
        </li>        
     <li className="nav-item">
      <button type="button" className="btn btn1 btn-outline-danger">SIGN UP</button>        
      </li>        
    </ul>
    </div>
</nav>
      </div>


        )
    }
}

export default Navbar