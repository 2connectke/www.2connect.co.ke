import * as React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import '../../css/about.css';

export default function About() {
  return (
    <div className="about-page">
      <Head title="About Us | 2Connect" />

      {/* Hero Section */}
      <section className="about-hero-minimal">
        <div className="hero-inner">
          <h1 className="hero-title">About Us</h1>

          <p className="breadcrumb">
            <span onClick={() => router.visit("/")}>Home</span>
            <span className="dot">•</span>
            <span className="active">About Us</span>
          </p>

          {/* Background text */}
          <h2 className="hero-watermark">About Us</h2>
        </div>
      </section>


      {/* Our Story */}
      <section className="about-section">
        <h2 className="section-title">Our Story</h2>
        <div className="about-content">
          <p>
            2Connect is a youth-driven volunteering and engagement platform designed to connect young people to meaningful service, career pathways and community-led social impact.
            We bring people together through purpose-driven volunteering, digital engagement and relationship-centred experiences that transform both communities and the young people who serve within them.
            <br /><br />
            At 2Connect, volunteering is not a one-off activity. It is a structured journey that builds skills, wellbeing, networks and long-term civic participation.
          </p>
          <img src="/assets/images/SI2CONNECT.jpg" alt="2Connect volunteers" />
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="about-section light-bg">
        <h2 className="section-title">Our Purpose</h2>
        <div className="purpose-cards">
          <div className="purpose-card">
            <h3>Our Mission</h3>
            <p>
              To empower young people with opportunities, skills, and support to
              create positive and lasting change in their communities.
            </p>
          </div>

          <div className="purpose-card">
            <h3>Our Vision</h3>
            <p>
              A connected generation of socially conscious leaders transforming
              Kenya and the world.
            </p>
          </div>

          <div className="purpose-card">
            <h3>Our Values</h3>
            <ul>
              <li>Purpose-Driven Innovation</li>
              <li>Collaboration</li>
              <li>Integrity</li>
              <li>Empowerment</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="about-section">
        <h2 className="section-title">What Makes Us Different</h2>
        <div className="difference-grid">
          <div className="difference-card">Structured Volunteer Journeys</div>
          <div className="difference-card">Youth-centered wellness support</div>
          <div className="difference-card">Integrated Talent-to-Impact Pipeline</div>
          <div className="difference-card">Digital-First, Youth-Led Ecosystem</div>
          <div className="difference-card">Deployment-Ready Volunteer Training (2CFP Model)</div>
          <div className="difference-card">Dual Impact Design (value for both community and volunteers)</div>
        </div>
      </section>

      {/* Impact */}
      <section className="about-section light-bg">
        <h2 className="section-title">Our Impact</h2>
        <div className="impact-wrapper">
          <p className="impact-intro">
            We exist to mobilise youth energy into impactful service while ensuring that
            young people are supported, prepared and empowered to grow.
          </p>

          <div className="impact-bridge">
            <h3>2Connect bridges the gap between:</h3>

            <div className="bridge-items">
              <div className="bridge-card">
                <span>01</span>
                <p>
                  Young people seeking purpose, experience and opportunity.
                </p>
              </div>

              <div className="bridge-card">
                <span>02</span>
                <p>
                  Organisations, startups and institutions in need of committed,
                  skilled and values-driven volunteers.
                </p>
              </div>
            </div>
          </div>

          <p className="impact-outro">
            Our work ensures that service creates value for communities while also
            strengthening the people who serve.
          </p>
        </div>
      </section>


      {/* Our Team */}
      <section className="our-team">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="team-subtext">
          The people behind the mission.
        </p>

        <div className="team-grid">

          {/* King*/}
          <div className="team-flip-card">
            <div className="team-flip-inner">
              <div className="team-front">
                <img src="/assets/images/kevc.jpeg" alt="Kevin Wanjiru" />
                <h3>Kevin Wanjiru</h3>
                <p className="role">CEO & FOUNDER </p>
              </div>
              <div className="team-back">
                <h4>Kevin's Story</h4>
                <br />
                <p>
                  Kevin has nearly five years of volunteer experience.He loves bringing young people together and turning simple ideas into real community impact.
                  <br /><br />
                  Kevin founded 2Connect to bridge the gap between passionate youth
                  and meaningful community impact across Kenya.
                </p>
              </div>
            </div>
          </div>

          {/* Steph */}
          <div className="team-flip-card">
            <div className="team-flip-inner">
              <div className="team-front">
                <img src="/assets/images/stephc.jpeg" alt="Stephanie Kimitei" />
                <h3>Stephanie Kimitei</h3>
                <p className="role">OPERATIONS LEAD</p>
              </div>
              <div className="team-back">
                <h4>Stephanie’s Story</h4>
                <br />
                <p>
                  Stephanie, a TUK student, serves as the operations lead at 2connect. She keeps everything
                  moving behind the scenes and somehow makes it look easy.
                </p>
                <br />
                <p style={{ fontStyle: "italic" }}>
                  She is silently the boss
                </p>
              </div>
            </div>
          </div>

          {/* Eva */}
          <div className="team-flip-card">
            <div className="team-flip-inner">
              <div className="team-front">
                <img src="/assets/images/everc.jpeg" alt="Evelyne Munguti" />
                <h3>Evelyne Munguti</h3>
                <p className="role">CHIEF TECHNOLOGY OFFICER</p>
              </div>
              <div className="team-back">
                <h4>Evelyne’s Story</h4>
                <br />
                <p>
                  Evelyne is one of the big minds behind the scenes and the CTO at 2connect.
                  <br /><br />
                  She builds the tech, solves the hard stuff and still somehow brings the fun to the party.
                </p>
              </div>
            </div>
          </div>

          {/* Ivy */}
          <div className="team-flip-card">
            <div className="team-flip-inner">
              <div className="team-front">
                <img src="/assets/images/ivyc.jpeg" alt="Ivy Mbaiya" />
                <h3>Ivy Mbaiya</h3>
                <p className="role">EVENTS COORDINATOR</p>
              </div>
              <div className="team-back">
                <h4>Ivy’s Story</h4>
                <br />
                <p>
                  Ivy coordinates all our events, ensuring they run smoothly and create meaningful experiences
                  for volunteers and the community. She is passionate about fostering connections and memorable moments.
                </p>
                <br />
                <p style={{ fontStyle: "italic" }}>
                  Behind every great event is Ivy’s attention to detail.
                </p>
              </div>
            </div>
          </div>

          {/* Esther */}
          <div className="team-flip-card">
            <div className="team-flip-inner">
              <div className="team-front">
                <img src="/assets/images/essiec.jpeg" alt="Team Member" />
                <h3>Esther Ndung'u</h3>
                <p className="role">COMMUNICATIONS, EVENTS & BRAND LEAD</p>
              </div>
              <div className="team-back">
                <h4>Esther's Story</h4>
                <br />
                <p>
                  Esther leads communications, events, and branding at 2Connect. She brings creativity and strategy together
                  to ensure our message reaches the right audience and our events make a real impact.
                </p>
                <br />
                <p style={{ fontStyle: "italic" }}>
                  She’s always smiling, except when a last-minute challenge tests her organizational skills!
                </p>
              </div>
            </div>
          </div>

          {/* Nyambura */}
          <div className="team-flip-card">
            <div className="team-flip-inner">
              <div className="team-front">
                <img src="/assets/images/nyac.jpeg" alt="Team Member" />
                <h3>Nyambura</h3>
                <p className="role">SOCIAL MEDIA MANAGER</p>
              </div>
              <div className="team-back">
                <h4>Nyambura's Story</h4>
                <br />
                <p>
                  Nyambura manages our social media presence, keeping our community engaged and informed.
                  She creates content that inspires and amplifies 2Connect’s mission across all platforms.
                </p>
                <br />
                <p style={{ fontStyle: "italic" }}>
                  She turns ideas into posts that spark conversation and connection.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Call to Action */}
      <section className="about-cta">
        <h2>Join the Movement</h2>
        <p>
          Whether you want to volunteer, partner with us, or lead change on your
          campus — there is a place for you at 2Connect.
        </p>
        <div className="cta-buttons">
          <Link href="/volunteer" className="learn-more-btn">
            Join as a Volunteer
          </Link>
          <Link href="/partner" className="learn-more-btn outline">
            Partner With Us
          </Link>
        </div>
      </section>

    </div>
  );
}
