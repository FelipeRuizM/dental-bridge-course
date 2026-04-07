import React from 'react'

function FooterBar() {
  return (
    <footer className="py-4 bg-white border-top mt-auto">
      <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
        <small className="text-secondary">© {new Date().getFullYear()} Dental Career Bridge. All rights reserved.</small>
        <div className="d-flex gap-3 small">
        </div>
      </div>
    </footer>
  );
}


export default FooterBar