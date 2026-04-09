function NavBar({ onOpen }) {
  return (
    <header className="border-bottom position-sticky top-0 navbar-glass" style={{ zIndex: 1030 }}>
      <nav className="navbar navbar-expand-md container py-2">
        <a className="navbar-brand" href="#hero">
          <span className="logotype">Dental Career Bridge</span>
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto me-3 gap-1">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#benefits">Benefits</a></li>
            <li className="nav-item"><a className="nav-link" href="#curriculum">Curriculum</a></li>
            <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
            <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
          </ul>
          <button className="btn btn-dark rounded-pill px-4" onClick={onOpen}>I'm Interested</button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar
