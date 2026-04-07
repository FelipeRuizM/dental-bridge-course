import React from 'react'

function Testimonials() {
  const testimonials = [
    { t: "I was lost when I first came to Canada, but this course gave me a clear starting point. The video lessons made it easy to understand my next steps.", g: "Dr. Lina, Dentist from Jordan" },
    { t: "The e-book explained everything in simple English. I now know how to begin as a dental assistant while working toward my bigger goals.", g: "Dr. Ahmed, Dentist from Egypt" },
    { t: "I liked that the course focused on real, practical advice. It helped me plan my move from Mexico and start looking for jobs with confidence.", g: "Dr. Maria, Dentist from Mexico" },
  ];
  return (
    <section id="testimonials" className="py-5 bg-white border-top">
      <div className="container">
        <h2 className="h2 fw-bold">Student stories</h2>
        <div className="row g-3 mt-1">
          {testimonials.map((testimonal, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <figure className="card h-100 shadow-sm">
                <blockquote className="card-body small text-secondary">{testimonal.t}</blockquote>
                <figcaption className="card-footer bg-white border-0 pt-0">
                  <div className="d-flex align-items-center gap-2">
                    <div className="">●</div>
                    <div>
                      <div className="fw-medium">{testimonal.g}</div>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials