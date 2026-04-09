import { TrendingUp, DollarSign, Route } from 'lucide-react'

function AboutCourse() {
  const advantages = [
    {
      icon: <TrendingUp size={20} color="#519AA9" strokeWidth={1.75} />,
      title: "High Demand",
      desc: "Dental assistants are consistently needed across Canada and the USA, making it one of the fastest ways into the field.",
    },
    {
      icon: <DollarSign size={20} color="#519AA9" strokeWidth={1.75} />,
      title: "Better Than Entry-Level",
      desc: "Dental assisting pays more than most entry-level jobs and puts you inside a clinical environment from day one.",
    },
    {
      icon: <Route size={20} color="#519AA9" strokeWidth={1.75} />,
      title: "Multiple Pathways Forward",
      desc: "From Dental Assisting you can become certified, pursue Hygiene, or validate your dental degree — on your own timeline.",
    },
  ]

  return (
    <section id="about" className="py-5 bg-white border-top border-bottom">
      <div className="container">

        {/* Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <span className="badge text-bg-primary mb-3" style={{ letterSpacing: '.05em', fontSize: '.75rem' }}>
              WHY THIS COURSE
            </span>
            <h2 className="h2 fw-bold mb-3">
              A Practical Roadmap for Internationally Trained Dentists
            </h2>
            <p className="text-secondary mb-0">
              Starting a career in dentistry in North America can be challenging — even with strong clinical
              experience, many dentists arrive in Canada or the USA unsure how to enter the field, how
              clinics operate, or what employers expect.
            </p>
          </div>
        </div>

        {/* Main content: navy explanation card + advantage cards */}
        <div className="row g-4 align-items-start mb-5">

          {/* Left — dark card explaining the course purpose */}
          <div className="col-lg-5">
            <div className="rounded-3 p-4 p-lg-5 h-100" style={{ background: '#537D85' }}>
              <p className="small fw-semibold mb-3" style={{ color: '#A8D8DE', letterSpacing: '.06em' }}>
                ABOUT THIS COURSE
              </p>
              <h3 className="h4 fw-bold text-white mb-3">
                Your first step inside North American dentistry
              </h3>
              <p className="text-white-50 small mb-4">
                This is not a certification program. It is designed to prepare you to work as a
                <strong className="text-white"> non-registered Dental Assistant</strong> — often the first
                and most accessible entry point into the dental field.
              </p>
              <p className="text-white-50 small mb-4">
                This role lets you begin working in your profession, gain local experience, and understand
                the North American clinical environment from the inside.
              </p>
              <div className="border-top pt-4" style={{ borderColor: 'rgba(255,255,255,.1)' }}>
                <p className="small text-white-50 mb-0">
                  <span className="fw-semibold text-white">In this course</span> you will learn how the
                  hiring process works, what employers are looking for, and how to succeed in both
                  interviews and working interviews — with a clear, practical roadmap to avoid common
                  mistakes.
                </p>
              </div>
            </div>
          </div>

          {/* Right — advantage cards stacked */}
          <div className="col-lg-7">
            <div className="d-flex flex-column gap-3">
              {advantages.map((a) => (
                <div key={a.title} className="card shadow-sm border">
                  <div className="card-body d-flex gap-3 align-items-start">
                    <div
                      className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-3"
                      style={{ width: 42, height: 42, background: 'rgba(81, 154, 169, 0.1)' }}
                    >
                      {a.icon}
                    </div>
                    <div>
                      <h4 className="h6 fw-semibold mb-1">{a.title}</h4>
                      <p className="text-secondary small mb-0">{a.desc}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Career pathway callout */}
              <div
                className="rounded-3 p-4 border"
                style={{ background: 'rgba(168, 216, 222, 0.12)', borderColor: 'rgba(81, 154, 169, 0.25) !important' }}
              >
                <p className="small fw-semibold mb-2" style={{ color: '#519AA9' }}>LONG-TERM CAREER GROWTH</p>
                <p className="small text-secondary mb-3">
                  Starting as a Dental Assistant is a strategic first step that opens multiple pathways.
                  It is a crucial learning phase that helps you grow, adapt, and move forward with
                  confidence in your new professional journey.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  {['Dental Assistant (Certified)', 'Dental Hygienist', 'Licensed Dentist'].map((step, i) => (
                    <div key={step} className="d-flex align-items-center gap-2">
                      <span className="badge rounded-pill text-bg-light border small">{step}</span>
                      {i < 2 && <span className="text-secondary small">→</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCourse
