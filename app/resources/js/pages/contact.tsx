import * as React from 'react';
import { Head } from "@inertiajs/react";
import { useState } from "react";
import "../../css/contact.css";

export default function Contact() {
  const [formType, setFormType] = useState("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ formType, ...formData });
    alert("Thank you for reaching out to 2Connect! We’ll get back to you soon.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      message: "",
    });
    setFormType("general");
  };

  return (
    <div className="contact-page">
      <Head title="Contact Us | 2Connect" />
      
      <h1>Contact Us</h1>
      <p className="contact-subtitle">
        Have a question, want to volunteer, or interested in partnering with us?
        We’d love to hear from you.
      </p>

      <div className="contact-wrapper">
        {/* Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>📧 2connectke@gmail.com</p>
          <p>📞 +254 111 646 177</p>
          <p>📍 Nairobi, Kenya</p>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email Address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>

          <label>
            I am contacting you about
            <select
              value={formType}
              onChange={(e) => setFormType(e.target.value)}
            >
              <option value="general">General Inquiry</option>
              <option value="volunteer">Becoming a Volunteer</option>
              <option value="partner">Becoming a Partner</option>
            </select>
          </label>

          {/* Volunteer Fields */}
          {formType === "volunteer" && (
            <label>
              Skills / Interests
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how you'd like to contribute"
                required
              />
            </label>
          )}

          {/* Partner Fields */}
          {formType === "partner" && (
            <>
              <label>
                Organization Name
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Partnership Proposal
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your organization and partnership idea"
                  required
                />
              </label>
            </>
          )}

          {/* General Message */}
          {formType === "general" && (
            <label>
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
          )}

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
