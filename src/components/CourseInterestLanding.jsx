import { useState } from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Benefits from "./Benefits";
import AboutCourse from "./AboutCourse";
import Curriculum from "./Curriculum";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import FooterBar from "./FooterBar";
import InterestModal from "./InterestModal";

export default function CourseInterestLanding() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", intent: "Learn more" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_MAILERLITE_API_KEY}`,
        },
        body: JSON.stringify({
          email: form.email,
          fields: { name: form.name },
          status: "active",
        }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || `Server error: ${response.status}`);
      }
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = () => {
    setError(null);
    setOpen(true);
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <NavBar onOpen={handleOpenModal} />
      <Hero onOpen={handleOpenModal} form={form} setForm={setForm} onSubmit={onSubmit} loading={loading} submitted={submitted} error={error} />
      <AboutCourse />
      <Benefits />
      <Curriculum onOpen={handleOpenModal} />
      <Testimonials />
      <FAQ />
      <FooterBar />
      <InterestModal
        isOpen={open}
        onClose={() => { setOpen(false); setError(null); }}
        loading={loading}
        form={form}
        setForm={setForm}
        onSubmit={onSubmit}
        submitted={submitted}
        error={error}
      />
    </div>
  );
}