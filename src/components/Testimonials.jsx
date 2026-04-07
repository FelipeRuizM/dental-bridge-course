import { Star } from 'lucide-react'

function Testimonials() {
  const testimonials = [
    {
      t: "I was lost when I first came to Canada, but this course gave me a clear starting point. The video lessons made it easy to understand my next steps.",
      name: "Dr. A. Patel",
      country: "India",
      initials: "AP",
    },
    {
      t: "The e-book explained everything in simple English. I now know how to begin as a dental assistant while working toward my bigger goals.",
      name: "Dr. S. Reyes",
      country: "Mexico",
      initials: "SR",
    },
    {
      t: "I liked that the course focused on real, practical advice. It helped me plan my move and start looking for jobs with confidence.",
      name: "Dr. M. Hassan",
      country: "Egypt",
      initials: "MH",
    },
  ];
  return (
    <section id="testimonials" className="py-5 bg-white border-top">
      <div className="container">
        <h2 className="h2 fw-bold">Student stories</h2>
        <div className="row g-3 mt-1">
          {testimonials.map((t, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <figure className="card h-100 shadow-sm m-0">
                <div className="card-body d-flex flex-column gap-2 pb-2">
                  <div className="d-flex gap-1">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={14} fill="#00A896" color="#00A896" />
                    ))}
                  </div>
                  <blockquote className="small text-secondary mb-0 flex-grow-1">
                    "{t.t}"
                  </blockquote>
                </div>
                <figcaption className="card-footer bg-white border-0 pb-3 px-3">
                  <div className="d-flex align-items-center gap-2">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center text-white fw-semibold flex-shrink-0"
                      style={{ width: 36, height: 36, background: '#00A896', fontSize: '0.75rem' }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="fw-medium small">{t.name}</div>
                      <div className="text-secondary" style={{ fontSize: '0.7rem' }}>{t.country}</div>
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
