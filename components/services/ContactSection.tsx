"use client";

import { useState } from "react";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { CONTACT_INFO, CONTACT_EMAIL } from "@/lib/constants";

interface FormState {
  name: string;
  email: string;
  projectType: string;
  vision: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    projectType: "Space Planning",
    vision: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (data: FormState): FormErrors => {
    const next: FormErrors = {};
    if (!data.name.trim()) next.name = "Please enter your name.";
    if (!data.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(data.email)) next.email = "Enter a valid email.";
    if (!data.vision.trim()) next.vision = "Tell us a little about your project.";
    return next;
  };

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(form);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }
    // No backend yet — open the user's email client pre-filled.
    // TODO (todo.md): replace with a real form backend (Formspree / Resend).
    const subject = `Design Inquiry: ${form.projectType} — ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Project Type: ${form.projectType}`,
      "",
      "Vision:",
      form.vision,
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section className="section-spacing bg-primary text-on-primary" id="contact">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info side */}
          <SectionReveal className="space-y-12">
            <div>
              <span className="text-on-tertiary-container font-label-md text-label-md uppercase tracking-widest mb-4 block">
                Get in Touch
              </span>
              <h2 className="font-headline-lg text-headline-lg mb-8 text-white">
                Start Your Design Journey
              </h2>
              <p className="font-body-lg text-body-lg mb-12 text-white/70 leading-relaxed max-w-[32rem]">
                Whether you&apos;re in Nairobi or anywhere across the globe,
                our team is ready to bring your vision of home to life with
                sophistication and warmth.
              </p>
              <div className="space-y-10">
                {CONTACT_INFO.map((info) => (
                  <div key={info.label} className="flex gap-6 items-start">
                    <span className="material-symbols-outlined text-on-tertiary-container text-3xl">
                      {info.icon}
                    </span>
                    <div>
                      <h4 className="font-label-md text-label-md uppercase mb-2 tracking-widest text-white">
                        {info.label}
                      </h4>
                      <p className="text-white/60 font-body-md text-body-md">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Form side */}
          <SectionReveal delay={0.15}>
            <div className="bg-white p-12 rounded-2xl shadow-2xl">
              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex flex-col items-center text-center py-12"
                >
                  <span className="material-symbols-outlined text-6xl text-on-tertiary-container mb-6">
                    mark_email_read
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary mb-3">
                    Thank you, {form.name.split(" ")[0]}!
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-[24rem]">
                    Your email draft is ready to send. We&apos;ll be in touch
                    shortly to start your design journey.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        projectType: "Space Planning",
                        vision: "",
                      });
                    }}
                    className="mt-8 border-b-2 border-primary text-primary font-label-md uppercase tracking-[0.2em] pb-1 hover:text-gold-accent hover:border-gold-accent transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label
                        htmlFor="contact-name"
                        className="font-label-md text-caption uppercase text-primary font-bold tracking-widest block"
                      >
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="E.g. Jane Doe"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? "contact-name-error" : undefined
                        }
                        className="input-luxury"
                      />
                      {errors.name && (
                        <p
                          id="contact-name-error"
                          className="text-error text-caption"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-3">
                      <label
                        htmlFor="contact-email"
                        className="font-label-md text-caption uppercase text-primary font-bold tracking-widest block"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "contact-email-error" : undefined
                        }
                        className="input-luxury"
                      />
                      {errors.email && (
                        <p
                          id="contact-email-error"
                          className="text-error text-caption"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label
                      htmlFor="contact-project-type"
                      className="font-label-md text-caption uppercase text-primary font-bold tracking-widest block"
                    >
                      Project Type
                    </label>
                    <select
                      id="contact-project-type"
                      name="projectType"
                      value={form.projectType}
                      onChange={(e) => update("projectType", e.target.value)}
                      className="input-luxury"
                    >
                      <option>Space Planning</option>
                      <option>Room Styling</option>
                      <option>Full Home Design</option>
                      <option>Other Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label
                      htmlFor="contact-vision"
                      className="font-label-md text-caption uppercase text-primary font-bold tracking-widest block"
                    >
                      Your Vision
                    </label>
                    <textarea
                      id="contact-vision"
                      name="vision"
                      rows={4}
                      placeholder="Tell us about the space you want to transform..."
                      value={form.vision}
                      onChange={(e) => update("vision", e.target.value)}
                      aria-invalid={!!errors.vision}
                      aria-describedby={
                        errors.vision ? "contact-vision-error" : undefined
                      }
                      className="input-luxury resize-none"
                    />
                    {errors.vision && (
                      <p
                        id="contact-vision-error"
                        className="text-error text-caption"
                      >
                        {errors.vision}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-container text-white py-5 rounded-lg font-label-md text-label-md uppercase tracking-widest hover:bg-primary transition-all shadow-luxury hover:shadow-luxury-hover"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
