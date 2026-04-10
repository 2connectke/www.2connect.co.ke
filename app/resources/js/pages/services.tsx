import * as React from 'react';
import { Head, router } from "@inertiajs/react";
import '../../css/services.css';
import {
  FaHandsHelping,
  FaHeartbeat,
  FaCertificate,
  FaUniversity,
  FaUsers,
  FaGlobeAfrica,
} from "react-icons/fa";

export default function Services() {
  return (
    <>
      <Head title="Our Services | 2Connect" />

      {/* Hero Section */}
      <section className="about-hero-minimal">
        <div className="hero-inner">
          <h1 className="hero-title">Our Services</h1>

          <p className="breadcrumb">
            <span onClick={() => router.visit("/")}>Home</span>
            <span className="dot">•</span>
            <span className="active">Services</span>
          </p>

          {/* Background text */}
          <h2 className="hero-watermark">Our Services</h2>
        </div>
      </section>


      {/* Services Grid */}
      <section className="services-section">
        <h2 className="section-title">What We Offer</h2>

        <div className="services-grid">
          {/* Service 1 */}
          <div className="service-card">
            <FaHandsHelping className="service-icon" />
            <h3>Volunteer Matching Platform</h3>
            <p>
              AI-powered matching connects volunteers to opportunities aligned
              with their skills, passions, and availability — making impact easy.
            </p>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <FaHeartbeat className="service-icon" />
            <h3>Connect+ Wellness</h3>
            <p>
              Access free mental wellness resources, peer support, and safe
              spaces designed specifically for youth and volunteers.
            </p>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <FaCertificate className="service-icon" />
            <h3>Volunteer Training Academy</h3>
            <p>
              Develop leadership, project management and community engagement
              skills through structured training programs.
            </p>
          </div>

          {/* Service 4 */}
          <div className="service-card">
            <FaUniversity className="service-icon" />
            <h3>Internships / Attachments</h3>
            <p>
              Start or lead a 2Connect club on your campus and mobilize students
              to drive positive change.
            </p>
          </div>

          {/* Service 5 */}
          <div className="service-card">
            <FaUsers className="service-icon" />
            <h3>NGO & Community Partnerships</h3>
            <p>
              We collaborate with NGOs and grassroots organizations to amplify
              impact through volunteer deployment and project support.
            </p>
          </div>

          {/* Service 6 */}
          <div className="service-card">
            <FaGlobeAfrica className="service-icon" />
            <h3>Impact Campaigns</h3>
            <p>
              Community clean-ups, awareness drives, and youth-led campaigns
              tackling real social and environmental challenges.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
