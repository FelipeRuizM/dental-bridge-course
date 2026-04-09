import { GraduationCap, FileCheck, Briefcase } from 'lucide-react'

function Benefits() {
  const cards = [
    {
      title: "International Dentists",
      icon: <GraduationCap size={22} color="#519AA9" strokeWidth={1.75} />,
      desc: "Dentists who want a first job in Canada or the USA and need to understand how dental assisting works to start earning experience fast.",
    },
    {
      title: "Immigration Preparation",
      icon: <FileCheck size={22} color="#519AA9" strokeWidth={1.75} />,
      desc: "Professionals preparing for immigration who want to feel confident from Day 1 on the job with technical terms, workflows, and cultural expectations.",
    },
    {
      title: "Job Market Entry",
      icon: <Briefcase size={22} color="#519AA9" strokeWidth={1.75} />,
      desc: "Permanent residents needing to enter the job market quickly and anyone who wants to feel confident as a dental assistant in North America.",
    },
  ];
  return (
    <section id="benefits" className="py-5 bg-white border-top border-bottom">
      <div className="container">
        <h2 className="h2 fw-bold">Who This Course Is For</h2>
        <p className="text-secondary">Focused on real results for your dental career abroad.</p>
        <div className="row g-3 mt-1">
          {cards.map((c) => (
            <div key={c.title} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary-subtle rounded-3 mb-3" style={{ width: 44, height: 44 }}>
                    {c.icon}
                  </div>
                  <h3 className="h6 fw-semibold">{c.title}</h3>
                  <p className="text-secondary small mb-0">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits
