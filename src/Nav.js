import React from 'react'
import './Home.css';

function Nav() {
  return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            <a class="navbar-brand" href="">
            <img src="images/abc.jpg" height="20PX" className='rounded-5'/>
            RENDLA SAINATH REDDY
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
             <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/about">ABOUT</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/Resume">RESUME</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/project0">Projects</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/family">Family</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/contact">Book Your Slot</a>
            </li>
            </ul>
            <form class="d-flex" role="search">
            <ul class="t">
            <li class="r"><i class="fa-brands fa-facebook"></i></li>
            <li class="r"><i class="fa-brands fa-instagram"></i></li>
            <li class="r"><i class="fa-brands fa-linkedin"></i></li>
            </ul>
            </form>
            </div>
            </div>
            </nav>  
            
            </div>
  );
}

export default Nav
