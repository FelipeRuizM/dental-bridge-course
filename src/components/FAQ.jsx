import React from 'react'

function FAQ() {
  const faqs = [
    { q: "Is this course only for dentists?", a: "Yes, it's designed for internationally trained dentists aiming to work in Canada or the USA." },
    { q: "Is this a licensing course?", a: "No. This is practical job-prep for entry-level dental assisting, not a licensing pathway. It is not a licensing course for dentists wanting to practice dentistry in North America." },
    { q: "Does this course give immigration advice?", a: "No. It does not provide immigration legal advice or guarantee placement." },
    { q: "Does it prepare me for CDA or NDEB exams?", a: "No. This course does not prepare you for CDA or NDEB exams required for full certification." },
  ];
  return (
    <section id="faq" className="py-5 bg-light border-top">
      <div className="container">
        <h2 className="h2 fw-bold">Frequently asked</h2>
        <div className="accordion mt-3" id="faqAcc">
          {faqs.map((f, idx) => (
            <div className="accordion-item" key={idx}>
              <h2 className="accordion-header" id={`h${idx}`}>
                <button className="accordion-button collapsed" type="button" onClick={(e) => { const body = e.currentTarget.parentElement?.nextElementSibling; if (body) body.classList.toggle("show"); }}>{f.q}</button>
              </h2>
              <div id={`c${idx}`} className="accordion-collapse collapse">
                <div className="accordion-body small text-secondary">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default FAQ