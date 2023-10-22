import React from 'react'

const Nav = () => {
  return (
    <div class="container-fluid sticky-top bg-white shadow-md">
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-white navbar-light py-1.5 py-lg-0">
                <a href="" class="navbar-brand">
                    <img src='logo demo.png' alt='logo' />
                </a>
                <a href="" class="nav-item nav-link li">Log-in</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <a href="" class="nav-item nav-link active">Home</a>
                        <a href="" class="nav-item nav-link">About us</a>
                        <a href="" class="nav-item nav-link">Committee</a>
                        <a href="" class="nav-item nav-link">Gallery</a>
                        <a href="" class="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Nav