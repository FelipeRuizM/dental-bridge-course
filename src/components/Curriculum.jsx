function Curriculum({ onOpen }) {
  const items = [
    { p: "8 Comprehensive Modules", s: "Theory + Practice with downloadable tools (resume, checklists)" },
    { p: "Dental Vocabulary", s: "Complete terminology with audio pronunciation guides" },
    { p: "Understand the Role", s: "Describe the scope of a dental assistant and recognize legal and ethical limits" },
    { p: "Clinical Readiness", s: "Communicate confidently in a clinic setting and assist during dental procedures" },
    { p: "Job Preparation", s: "Create a north-america-style resume and apply for jobs with confidence" },
  ];
  return (
    <section id="curriculum" className="py-5 bg-light text-start">
      <div className="container">
        <h2 className="h2 fw-bold">Course Structure & Learning Objectives</h2>
        <div className="row g-4 mt-1">
          <div className="col-lg-7 text-start">
            <ol className="list-unstyled">
              {items.map((item, i) => (
                <li key={i} className="border rounded-3 bg-white p-3 d-flex gap-3 mb-3 align-items-start">
                  <div
                    className="fw-bold flex-shrink-0 lh-1 text-center"
                    style={{ width: 36, fontSize: '1.75rem', color: '#519AA9', fontFamily: 'Merriweather, serif' }}
                  >
                    {i + 1}
                  </div>
                  <div className="border-start ps-3">
                    <div className="fw-medium">{item.p}</div>
                    <div className="small text-secondary">{item.s}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="col-lg-5 text-start">
            <div className="card h-100">
              <div className="card-body text-start">
                <h3 className="h6 fw-semibold">Format & Pricing</h3>
                <ul className="small text-secondary ps-3">
                  <li>Start learning anytime</li>
                  <li>Format: Recorded videos</li>
                  <li>Learn at your own speed</li>
                </ul>
                <div className="bg-light rounded-3 p-3 border">
                  <div className="display-6 fw-bold">From $499</div>
                  <div className="small text-secondary">Save up to 20% if you sign up early.</div>
                </div>
                <button className="btn btn-primary w-100 mt-3" onClick={onOpen}>Get early sign-up price</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Curriculum
