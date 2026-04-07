import React, { useState } from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Benefits from "./Benefits";
import Curriculum from "./Curriculum";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import FooterBar from "./FooterBar";
import InterestModal from "./InterestModal";

export default function CourseInterestLanding() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", intent: "Learn more" });

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 800);
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <NavBar onOpen={() => setOpen(true)} />
      <Hero onOpen={() => setOpen(true)} form={form} setForm={setForm} onSubmit={onSubmit} loading={loading} />
      <Benefits />
      <Curriculum onOpen={() => setOpen(true)} />
      <Testimonials />
      <FAQ />
      <FooterBar />
      <InterestModal
        isOpen={open}
        onClose={() => setOpen(false)}
        loading={loading}
        form={form}
        setForm={setForm}
        onSubmit={onSubmit}
      />
    </div>
  );
}