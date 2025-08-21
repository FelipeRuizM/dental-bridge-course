import React from 'react'

function NavBar({ onOpen }) {
  return (
    <header className="border-bottom bg-white position-sticky top-0" style={{ zIndex: 1030 }}>
      <nav className="navbar navbar-expand-md container py-2">
        <a className="navbar-brand d-flex align-items-center" href="#hero">
          <div className="rounded-3 bg-dark text-white d-grid place-items-center me-2" style={{ width: 36, height: 36 }}>D</div>
          <span className="fw-semibold">Dental Career Bridge</span>
        </a>
        <button className="navbar-toggler" type="button" onClick={(e) => { const el = e.currentTarget.nextElementSibling; if (el) el.classList.toggle("show"); }}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto me-3 d-none d-md-flex">
            <li className="nav-item"><a className="nav-link" href="#benefits">Benefits</a></li>
            <li className="nav-item"><a className="nav-link" href="#curriculum">Curriculum</a></li>
            <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
            <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
          </ul>
          <button className="btn btn-dark rounded-pill" onClick={onOpen}>I'm Interested</button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar