import logo from '../assets/logo.jpeg'

function Hero({ onOpen }) {
  return (
    <section id="hero" className="py-5 text-start hero-section">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6 text-start">
            <span className="badge text-bg-light border">New materials available now <span className="ms-1 badge rounded-pill text-bg-success">●</span></span>
            <h1 className="display-5 fw-bold mt-3">Your Dental Career Bridge to USA and Canada</h1>
            <p className="lead text-secondary mt-2 text-start">
              For dentists from other countries who want to move to Canada or the USA. Learn how to start working as a dental assistant and then plan your path to becoming a licensed dentist — all from self-paced video lessons.
            </p>
            <ul className="list-unstyled mt-3 text-secondary text-start">
              {[
                "Step-by-step guidance for moving and licensing",
                "Tips on becoming a dental assistant as a first job",
                "Advice from international dentists and dental assistants already working in North America",
              ].map((b) => (
                <li key={b} className="d-flex align-items-start mb-2">
                  <span className="badge text-bg-success me-2 mt-1">✓</span>{b}
                </li>
              ))}
            </ul>
            <div className="d-flex flex-column flex-sm-row gap-2 mt-4">
              <button className="btn btn-primary btn-lg" onClick={onOpen}>Join the Interest List</button>
              <a href="#about" className="btn btn-outline-secondary btn-lg">See how it works</a>
            </div>
            <div className="form-text mt-2">No spam. You can unsubscribe anytime.</div>
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="position-relative">
              <div className="hero-blob" aria-hidden="true" />
              <img
                src={logo}
                alt="Dental Career Bridge logo"
                className="img-fluid position-relative"
                style={{ maxHeight: 380, objectFit: 'contain', zIndex: 1 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
