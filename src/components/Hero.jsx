function Hero({ onOpen, form, setForm, onSubmit, loading }) {
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
              <a href="#benefits" className="btn btn-outline-secondary btn-lg">See how it works</a>
            </div>
            <div className="form-text mt-2">No spam. You can unsubscribe anytime.</div>
          </div>
          <div className="col-lg-6 text-start position-relative">
            <div className="hero-blob" aria-hidden="true" />
            <div className="card shadow position-relative" style={{ zIndex: 1 }}>
              <div className="card-body rounded-3 text-start" style={{ background: '#0A192F' }}>
                <p className="small text-white-50 mb-1">Early sign-up bonus</p>
                <h3 className="h3 fw-bold text-white">Get the Course Plan</h3>
                <p className="small text-white-50 mb-3">Enter your email to preview a free lesson and enter the interest list.</p>
                <form onSubmit={onSubmit}>
                  <div className="mb-2"><input type="text" className="form-control" required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
                  <div className="mb-2"><input type="email" className="form-control" required placeholder="Email address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
                  <button type="submit" className="btn btn-primary w-100 py-2" disabled={loading}>{loading ? "Submitting…" : "Send me the course plan"}</button>
                  <div className="form-text text-white-50 mt-2">We will only email you about this course.</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
