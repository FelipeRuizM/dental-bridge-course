function FooterBar() {
  return (
    <footer className="py-4 mt-auto" style={{ background: '#0A192F' }}>
      <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
        <small className="text-white-50">© {new Date().getFullYear()} Dental Career Bridge. All rights reserved.</small>
        <div className="d-flex flex-wrap justify-content-center gap-3 small">
          <a href="#" className="text-white-50 text-decoration-none">Privacy Policy</a>
          <a href="#" className="text-white-50 text-decoration-none">Terms of Service</a>
          <a href="#" className="btn btn-sm btn-outline-light rounded-pill px-3">Join the Course →</a>
        </div>
      </div>
    </footer>
  );
}

export default FooterBar
