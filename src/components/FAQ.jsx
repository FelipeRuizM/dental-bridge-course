import { useState } from 'react'

const sections = [
  {
    label: "About You & Your Goal",
    emoji: "🦷",
    items: [
      {
        q: "I am a dentist trained outside Canada or the USA. Is this course really for me?",
        a: (
          <>
            <p className="mb-2">Yes. This course was created specifically for internationally trained dentists who want to work in dentistry in North America but feel unsure about how clinics actually function.</p>
            <p className="mb-1 fw-semibold">If you:</p>
            <ul className="mb-0">
              <li>Have a dental degree from another country</li>
              <li>Want to stay in dentistry</li>
              <li>Need a realistic first step inside a clinic</li>
            </ul>
            <p className="mt-2 mb-0">This course was designed with you in mind.</p>
          </>
        ),
      },
      {
        q: "Why does this course focus so much on Dental Assistant work?",
        a: (
          <>
            <p className="mb-2">Because, in real life, this is often the most accessible and effective entry point. Starting as a Dental Assistant allows you to:</p>
            <ul className="mb-2">
              <li>Enter the dental field faster</li>
              <li>Earn income while planning validation</li>
              <li>Learn the system from the inside</li>
              <li>Build confidence and local experience</li>
            </ul>
            <p className="mb-0">This course explains how that reality actually works, without illusions.</p>
          </>
        ),
      },
      {
        q: "Does starting as a Dental Assistant mean I am giving up on being a dentist?",
        a: (
          <>
            <p className="mb-2">Not at all. For many international dentists, working as a Dental Assistant is a temporary and strategic step, not a final destination. Your long-term goal may still be:</p>
            <ul className="mb-2">
              <li>Dentist</li>
              <li>Dental Hygienist</li>
              <li>Certified or Registered Dental Assistant</li>
            </ul>
            <p className="mb-0">This course supports your journey — it does not redefine your dream.</p>
          </>
        ),
      },
    ],
  },
  {
    label: "Certification, License & Limits",
    emoji: "🎓",
    items: [
      {
        q: "Does this course allow me to work legally in the US or Canada?",
        a: "No. This course does not provide work authorization, visas, or licenses. Employment depends on your immigration status and local regulations. The course prepares you professionally, not legally.",
      },
      {
        q: "Is this course suitable if I am still outside the US or Canada?",
        a: "Yes. Many students take this course before immigrating so they arrive already understanding how clinics work, what is expected from them, and how to prepare for job opportunities.",
      },
      {
        q: "Does this course certify or license me as a Dental Assistant?",
        a: "No. This course does not certify, license, or legally authorize anyone to work as a Dental Assistant. It is a preparatory and educational course, not a credential.",
      },
      {
        q: "Will I be doing dentist-level procedures as a Dental Assistant?",
        a: "No. The course clearly explains scope of practice and boundaries. You will learn how to support the dentist effectively without crossing legal or ethical limits.",
      },
      {
        q: "Does this course replace an official Dental Assistant program?",
        a: "No. Official programs are regulated by provinces, states, and professional bodies. This course does not replace them. Instead, it prepares you to understand the real clinic environment you will enter.",
      },
    ],
  },
  {
    label: "Course Format",
    emoji: "📘",
    items: [
      {
        q: "How is the course structured?",
        a: "The course is divided into well-organized modules, designed to follow a logical learning sequence. Each module builds on the previous one, helping students gradually understand how dental clinics operate in the US and Canada.",
      },
      {
        q: "What will I find inside each module?",
        a: (
          <>
            <p className="mb-2">Module Zero is an interactive bridge orientation experience designed to address the dimensions involved in preparing for a country change: <em>Align before you accelerate.</em> Modules One to Ten are pre-recorded videos with extra reading materials pertinent to each module. Each module includes:</p>
            <ul className="mb-2">
              <li>One main explanatory video with narrated slides</li>
              <li>Structured reading materials to reinforce and deepen the content</li>
            </ul>
            <p className="mb-0">The combination of video and reading ensures both visual understanding and solid theoretical grounding.</p>
          </>
        ),
      },
      {
        q: "Are the videos live or recorded?",
        a: "All videos are pre-recorded and fully automated. This allows you to study at your own pace, revisit lessons whenever needed, and fit the course into your schedule.",
      },
      {
        q: "What is the purpose of the reading materials?",
        a: "The reading materials provide the foundation and depth of the course. They explain concepts in detail, clarify clinical routines, and connect practical tasks to the realities of dental offices in North America. These materials are essential for building confidence and understanding the \"why\" behind daily procedures.",
      },
      {
        q: "Do I need to complete the modules in order?",
        a: "Yes. The modules are designed to be completed in sequence, as each one prepares you for the next stage of learning and reflects the natural workflow of a dental clinic.",
      },
      {
        q: "Is the reading material optional?",
        a: "The reading material is a core part of the course. While videos introduce and explain the topics, the written content provides the knowledge base that supports long-term learning and professional confidence.",
      },
      {
        q: "Do I need to attend live classes or meetings?",
        a: "No. The course is fully automated, so you can study on your own schedule, from anywhere in the world.",
      },
    ],
  },
  {
    label: "Reality of Working in North American Clinics",
    emoji: "🏥",
    items: [
      {
        q: "Do clinics usually provide training?",
        a: (
          <>
            <p className="mb-2">Often, no. Many clinics in Canada and the USA:</p>
            <ul className="mb-2">
              <li>Do not offer structured training</li>
              <li>Expect new hires to learn quickly</li>
              <li>Evaluate candidates during a working interview</li>
            </ul>
            <p className="mb-0">This course was created to help you not feel lost in that moment.</p>
          </>
        ),
      },
      {
        q: "What is a working interview?",
        a: (
          <>
            <p className="mb-2">A working interview is a practical evaluation where the clinic:</p>
            <ul className="mb-2">
              <li>Observes you working</li>
              <li>Sees how you handle equipment and routine</li>
              <li>Assesses your awareness and communication</li>
            </ul>
            <p className="mb-0">This course helps you recognize what is happening around you instead of guessing.</p>
          </>
        ),
      },
      {
        q: "Does this course guarantee a job?",
        a: (
          <>
            <p className="mb-2">No course can guarantee a job. What this course does is help you:</p>
            <ul className="mb-2">
              <li>Feel prepared instead of overwhelmed</li>
              <li>Avoid common beginner mistakes</li>
              <li>Show awareness and confidence</li>
            </ul>
            <p className="mb-0">Preparation does not guarantee success, but it greatly improves your chances.</p>
          </>
        ),
      },
    ],
  },
  {
    label: "Course Content & Modules",
    emoji: "📚",
    items: [
      {
        q: "Does the course explain what the Dental Assistant actually does daily?",
        a: (
          <>
            <p className="mb-2">Yes. Each module clearly explains:</p>
            <ul className="mb-0">
              <li>What the Dental Assistant is expected to do</li>
              <li>How tasks are done in practice</li>
              <li>What should be monitored</li>
              <li>What should be reported to the dentist or manager</li>
            </ul>
          </>
        ),
      },
      {
        q: "Is the course theoretical or hands-on?",
        a: "The course is practical and workflow-focused. It does not teach dental theory or academic concepts. It teaches how things are done in real clinics, step by step.",
      },
      {
        q: "Do I need previous experience as a Dental Assistant?",
        a: "No. The course assumes you already understand dentistry but do not yet understand North American clinic dynamics. Everything is explained from that perspective.",
      },
      {
        q: "What topics are covered in the course?",
        a: (
          <ul className="mb-0">
            <li>Clinic structure and roles</li>
            <li>Patient care culture and communication</li>
            <li>Clinical workflows from start to finish</li>
            <li>Radiography, equipment, and technology</li>
            <li>Infection control and safety</li>
            <li>Documentation, privacy, and ethics</li>
            <li>Working interviews and job readiness</li>
            <li>Career pathways in dentistry</li>
          </ul>
        ),
      },
    ],
  },
  {
    label: "Language, Terminology & Confidence",
    emoji: "🗣️",
    items: [
      {
        q: "Will this course help me with dental English?",
        a: "Yes, in a very practical way. You will become familiar with equipment names, common instructions, and daily clinic terminology. This is workplace dental English, not academic English.",
      },
      {
        q: "Will this course help me feel more confident during a working interview?",
        a: "For many students, yes. Confidence often comes from recognition — knowing what equipment is, understanding the routine, and anticipating what comes next. This course reduces the \"unknown,\" which is often the biggest source of anxiety.",
      },
      {
        q: "Is the course suitable for non-native English speakers?",
        a: "Yes. The content is presented in clear, professional English, focused on real clinical communication. Many students improve their confidence in dental English through the course.",
      },
    ],
  },
  {
    label: "Safety, Responsibility & ALARA",
    emoji: "☢️",
    items: [
      {
        q: "Who decides if an X-ray should be taken?",
        a: "The dentist is always responsible for deciding if an X-ray is necessary. Following the ALARA principle, the lowest radiation exposure is achieved when unnecessary X-rays are not taken at all.",
      },
      {
        q: "What is the Dental Assistant's role in radiation safety?",
        a: (
          <>
            <p className="mb-2">The Dental Assistant supports safety by:</p>
            <ul className="mb-0">
              <li>Screening patients (including pregnancy)</li>
              <li>Removing metal objects</li>
              <li>Selecting correct exposure settings</li>
              <li>Using protective equipment</li>
              <li>Following protocols carefully</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    label: "Validation & Long-Term Journey",
    emoji: "🌱",
    items: [
      {
        q: "Can this course help me indirectly with credential validation?",
        a: "Yes — indirectly and very naturally. By working as a Dental Assistant, you stay immersed in dentistry, use dental English daily, and understand how dentistry is practiced locally. This often makes studying for validation more concrete and less abstract.",
      },
      {
        q: "Is this course useful even if my final goal is not Dental Assistant?",
        a: (
          <>
            <p className="mb-2">Absolutely. This course supports people whose final goal may be:</p>
            <ul className="mb-2">
              <li>Dentist</li>
              <li>Dental Hygienist</li>
              <li>Certified or Registered Dental Assistant</li>
            </ul>
            <p className="mb-0">It is about keeping you moving forward, not limiting your future.</p>
          </>
        ),
      },
    ],
  },
  {
    label: "Support, Access & Expectations",
    emoji: "💬",
    items: [
      {
        q: "Will I receive personal mentoring or live support?",
        a: "No. This course is designed to be self-guided, clear and intuitive — similar to how learning happens in real clinics.",
      },
      {
        q: "Is there any contact channel?",
        a: "Yes. There is an email available for contact.",
      },
    ],
  },
  {
    label: "Investment & Value",
    emoji: "💰",
    items: [
      {
        q: "Is this course an investment in my career?",
        a: "Yes — in a realistic and grounded way. The course is meant to save you time, reduce confusion, and help you feel ready sooner. Many students feel that once they start working, the course naturally pays for itself because they are better prepared.",
      },
      {
        q: "What is the real value of this course?",
        a: (
          <>
            <p className="mb-2">The real value is not only financial. It is about:</p>
            <ul className="mb-0">
              <li>Feeling less lost</li>
              <li>Staying connected to dentistry</li>
              <li>Gaining clarity and direction</li>
              <li>Taking action instead of waiting</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    label: "Course Access & Sharing",
    emoji: "❓",
    items: [
      {
        q: "Can I share this course with other people?",
        a: "No. This course is individual and non-transferable. Each enrolment is valid for one person only — the student who purchased the course.",
      },
      {
        q: "Why is the course individual?",
        a: (
          <>
            <p className="mb-2">This program was carefully designed for your personal learning journey. Keeping it individual ensures:</p>
            <ul className="mb-0">
              <li>Content quality and integrity</li>
              <li>Fair access for everyone</li>
              <li>A professional standard aligned with North American practices</li>
            </ul>
          </>
        ),
      },
      {
        q: "Is the course content protected?",
        a: "Yes. All materials — videos, slides, manuals, templates, and downloads — are protected by copyright laws. The content cannot be copied, shared, recorded, redistributed, or sold in any form.",
      },
      {
        q: "What happens if someone shares the course content?",
        a: "Sharing copyrighted material is a legal violation and may result in immediate loss of access to the course and legal action under copyright law. More importantly, starting your professional journey by ignoring rules and ethics can negatively impact your future.",
      },
      {
        q: "Why is respecting these rules important for my career?",
        a: (
          <>
            <p className="mb-2">In the US and Canada, professional ethics and compliance matter a lot. Respecting intellectual property reflects:</p>
            <ul className="mb-2">
              <li>Professional integrity</li>
              <li>Respect for rules and agreements</li>
              <li>Readiness to work in regulated environments</li>
            </ul>
            <p className="mb-0">This mindset is essential for long-term success in North America.</p>
          </>
        ),
      },
      {
        q: "Will there be exclusive opportunities in the future?",
        a: "Yes. In the future, exclusive opportunities, resources, and updates will be available only to students who officially completed the course. This is another reason why individual enrolment is essential.",
      },
      {
        q: "What if a friend or colleague is interested in the course?",
        a: "The correct and professional approach is to invite them to enroll individually, so they can fully benefit from the program and build their own journey the right way.",
      },
    ],
  },
]

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="accordion-item border-0 border-bottom">
      <h3 className="accordion-header mb-0">
        <button
          className={`accordion-button px-0 py-3 bg-transparent shadow-none fw-medium${open ? '' : ' collapsed'}`}
          style={{ fontSize: '.95rem', color: open ? '#519AA9' : '#537D85' }}
          type="button"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
        >
          {q}
        </button>
      </h3>
      {open && (
        <div className="pb-3 text-secondary small">
          {a}
        </div>
      )}
    </div>
  )
}

function FAQ() {
  const [activeSection, setActiveSection] = useState(0)

  return (
    <section id="faq" className="py-5 border-top" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <span className="badge text-bg-primary mb-3" style={{ letterSpacing: '.05em', fontSize: '.75rem' }}>FAQ</span>
            <h2 className="h2 fw-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-secondary mb-0">A clear, friendly guide for internationally trained dentists.</p>
          </div>
        </div>

        <div className="row g-4">
          {/* Sidebar navigation */}
          <div className="col-lg-3 d-none d-lg-block">
            <div className="sticky-top" style={{ top: '5rem' }}>
              <nav className="d-flex flex-column gap-1">
                {sections.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSection(i)}
                    className={`btn btn-sm text-start px-3 py-2 rounded-2 border-0 ${activeSection === i ? 'btn-primary' : 'btn-light text-secondary'}`}
                    style={{ fontSize: '.82rem', fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="me-2">{s.emoji}</span>{s.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Mobile section selector */}
          <div className="col-12 d-lg-none">
            <select
              className="form-select"
              value={activeSection}
              onChange={e => setActiveSection(Number(e.target.value))}
            >
              {sections.map((s, i) => (
                <option key={i} value={i}>{s.emoji} {s.label}</option>
              ))}
            </select>
          </div>

          {/* FAQ content */}
          <div className="col-lg-9">
            <div className="card shadow-sm border-0 rounded-3">
              <div className="card-body p-4">
                <div className="d-flex align-items-center gap-2 mb-1">
                  <span style={{ fontSize: '1.4rem' }}>{sections[activeSection].emoji}</span>
                  <h3 className="h5 fw-bold mb-0">{sections[activeSection].label}</h3>
                </div>
                <hr className="mt-2 mb-0" />
                <div className="accordion accordion-flush">
                  {sections[activeSection].items.map((item, idx) => (
                    <AccordionItem
                      key={`${activeSection}-${idx}`}
                      q={item.q}
                      a={item.a}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Final word callout */}
            {activeSection === sections.length - 1 && (
              <div className="mt-4 rounded-3 p-4 text-center" style={{ background: '#537D85' }}>
                <p className="small fw-semibold mb-2" style={{ color: '#519AA9', letterSpacing: '.06em' }}>FINAL WORD</p>
                <h4 className="h5 fw-bold text-white mb-3">What should I expect after completing the course?</h4>
                <p className="text-white-50 small mb-3">After completing the course, you should expect to understand how North American dental clinics operate, feel more confident during working interviews, recognize equipment, routines, and terminology, and take a meaningful and realistic step toward your dental career in the USA and Canada.</p>
                <p className="small fst-italic mb-0" style={{ color: '#519AA9' }}>This course does not promise shortcuts — but it offers preparation, clarity, and a bridge forward.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
