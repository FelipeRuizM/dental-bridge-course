import React from "react";

function InterestModal({ isOpen, onClose, form, setForm, onSubmit, loading }) {
  if (!isOpen) return null;

  return (
    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Join the Interest List</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <div className="modal-body p-4">
            <p className="text-secondary mb-4">
              Sign up to get updates, a free preview video, and an outline of our e‑book guide.
            </p>
            <form onSubmit={onSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <label htmlFor="nameInput">Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
                <label htmlFor="emailInput">Email Address</label>
              </div>
              <button type="submit" className="btn btn-primary w-100 py-2" disabled={loading}>
                {loading ? "Submitting…" : "Join Now"}
              </button>
              <div className="form-text mt-2">We respect your privacy. Unsubscribe anytime.</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterestModal;
