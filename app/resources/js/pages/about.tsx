import { Head, Link, router } from '@inertiajs/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Heart,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  Quote
} from 'lucide-react';


// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
} as const;

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15
    }
  },
  viewport: { once: true, margin: "-50px" }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function About() {

  const differentiators = [
    {
      icon: Zap,
      title: "Structured Volunteer Journeys",
      description: "Purpose-driven pathways that transform volunteering into career-building experiences"
    },
    {
      icon: Heart,
      title: "Youth-Centered Wellness",
      description: "Mental health support and wellbeing resources integrated into every engagement"
    },
    {
      icon: TrendingUp,
      title: "Talent-to-Impact Pipeline",
      description: "Connecting skills development with real community needs"
    },
    {
      icon: Shield,
      title: "2CFP Training Model",
      description: "Deployment-ready volunteers through our certified training framework"
    }
  ];

  const teamMembers = [
    {
      name: "Kevin Wanjiru",
      role: "CEO & Founder",
      image: "/assets/images/kevc.jpeg",
      quote: "Bridging passion with purpose to transform Kenya's youth potential into community impact.",
      color: "#1e90ff"
    },
    {
      name: "Stephanie Kimitei",
      role: "Operations Lead",
      image: "/assets/images/stephc.jpeg",
      quote: "Behind every seamless operation is the quiet force that makes it all possible.",
      color: "#1e90ff"
    },
    {
      name: "Evelyne Munguti",
      role: "Chief Technology Officer",
      image: "/assets/images/everc.jpeg",
      quote: "Building the digital infrastructure that powers youth-led transformation.",
      color: "#1e90ff"
    },
    {
      name: "Ivy Mbaiya",
      role: "Events Coordinator",
      image: "/assets/images/ivyc.jpeg",
      quote: "Creating moments that connect people and spark lasting change.",
      color: "#1e90ff"
    },
    {
      name: "Esther Ndung'u",
      role: "Communications & Brand Lead",
      image: "/assets/images/essiec.jpeg",
      quote: "Storytelling that amplifies impact and inspires action.",
      color: "#1e90ff"
    },
    {
      name: "Nyambura",
      role: "Social Media Manager",
      image: "/assets/images/nyac.jpeg",
      quote: "Turning digital conversations into real-world movements.",
      color: "#1e90ff",
      position: "object-center" // Center framing works better for her vertical hairstyle
    }
  ];

  return (
    <div className="w-full overflow-x-hidden font-sans bg-brand-bg-light text-brand-dark leading-relaxed">
      <Head title="About Us | 2Connect" />

      <section
        className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a192f] via-[#1e3a8a] to-[#1e90ff]"
      >
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[60%] bg-[#D3AF37]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[50%] bg-white/5 blur-[100px] rounded-full"></div>

        <div className="relative z-10 text-center max-w-[900px] px-4 sm:px-6 md:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-black leading-tight tracking-tight">
              We Are <span className="text-[#D3AF37]">2Connect</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-90 max-w-[700px] mx-auto font-medium">
              Building bridges between passionate young people and meaningful impact across Kenya
            </p>
          </motion.div>
        </div>

        {/* Decorative dynamic line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D3AF37]/30 to-transparent"></div>
      </section>

      {/* Our Story - Restored Sizing and Reduced Spacing */}
      <section className="py-16 sm:py-20 px-4 sm:px-[5%] bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            className="relative"
            {...fadeInUp}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img src="/assets/images/SI2CONNECT.jpg" alt="2Connect volunteers in action" className="w-full h-full object-cover block" />
              <div className="absolute inset-0 border-[3px] border-brand-primary rounded-3xl translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5 -z-10"></div>
            </div>
            <div className="absolute -bottom-5 -right-2 sm:-right-5 bg-white p-3 sm:p-4 rounded-xl shadow-lg flex items-center gap-3 font-bold text-brand-dark z-10">
              <Sparkles size={24} className="text-brand-accent" />
              <span className="text-sm sm:text-base">Since 2020</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.span className="text-[0.85rem] font-bold uppercase tracking-[0.2em] text-brand-primary" variants={fadeInUp}>Our Story</motion.span>
            <motion.h2 className="flex flex-col gap-1 sm:gap-2" variants={fadeInUp}>
              <span className="text-xl sm:text-2xl font-medium text-brand-medium">More Than Volunteering—</span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-black text-brand-dark leading-tight">A Movement</span>
            </motion.h2>
            <motion.p className="text-lg text-brand-medium leading-[1.8]" variants={fadeInUp}>
              2Connect is a youth-driven volunteering and engagement platform designed to connect
              young people to meaningful service, career pathways, and community-led social impact.
            </motion.p>
            <motion.p className="text-lg text-brand-medium leading-[1.8]" variants={fadeInUp}>
              We bring people together through purpose-driven volunteering, digital engagement,
              and relationship-centered experiences that transform both communities and the young
              people who serve within them.
            </motion.p>
            <motion.div className="bg-brand-bg-light p-6 sm:p-8 rounded-xl border-l-[6px] border-brand-primary mt-4" variants={fadeInUp}>
              <Quote size={32} className="text-brand-primary mb-4 opacity-40" />
              <p className="text-lg italic text-brand-dark leading-[1.6]">Volunteering is not a one-off activity. It is a structured journey that builds
                skills, wellbeing, networks, and long-term civic participation.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Purpose Cards - Reduced Spacing */}
      <section className="py-16 sm:py-20 px-4 sm:px-[5%] bg-gradient-to-b from-brand-bg-light to-white">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <motion.span
            className="inline-block text-[0.85rem] font-bold uppercase tracking-[0.2em] text-brand-primary mb-3"
            {...fadeInUp}
          >
            Why We Exist
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark leading-tight tracking-tight mb-4"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            Our Purpose
          </motion.h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Mission",
              content: "To empower young people with opportunities, skills, and support to create positive and lasting change in their communities.",
              gradient: "from-blue-500 to-blue-400"
            },
            {
              title: "Vision",
              content: "A connected generation of socially conscious leaders transforming Kenya and the world.",
              gradient: "from-blue-600 to-blue-500"
            },
            {
              title: "Values",
              content: ["Purpose-Driven Innovation", "Collaboration", "Integrity", "Empowerment", "Sustainability"],
              gradient: "from-blue-700 to-blue-600",
              isList: true
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-brand overflow-hidden transition-all duration-400 group hover:-translate-y-2 hover:shadow-brand-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-full group-hover:opacity-[0.05] bg-gradient-to-r ${card.gradient}`}></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-brand-dark">{card.title}</h3>
                {card.isList ? (
                  <ul className="flex flex-col gap-3 list-none p-0">
                    {card.content.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-brand-medium text-[0.95rem]">
                        <span className="w-2 h-2 bg-brand-primary rounded-full shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-brand-medium leading-relaxed">{card.content}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Makes Us Different - Bento Grid - Reduced Spacing */}
      <section className="py-16 sm:py-20 px-4 sm:px-[5%] bg-white">
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <motion.span className="inline-block text-[0.85rem] font-bold uppercase tracking-[0.2em] text-brand-primary mb-3" {...fadeInUp}>Our Approach</motion.span>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark leading-tight tracking-tight" {...fadeInUp} transition={{ delay: 0.1 }}>
            What Makes Us <span className="text-brand-primary">Different</span>
          </motion.h2>
        </div>

        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-white border border-brand-border rounded-3xl p-8 overflow-hidden transition-all duration-400 flex flex-col justify-between shadow-brand hover:-translate-y-1.5 hover:shadow-brand-lg group"
              variants={scaleIn}
            >
              <div>
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand-primary mb-6 shadow-brand">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-dark">{item.title}</h3>
                <p className="text-brand-medium text-[0.95rem] leading-relaxed">{item.description}</p>
              </div>
              <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/10 to-transparent rotate-45 opacity-0 group-hover:animate-[shine_0.6s_ease-in-out]"></div>
            </motion.div>
          ))}

          {/* Additional bento items */}
          <motion.div className="lg:col-span-2 bg-brand-dark text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden group shadow-brand hover:-translate-y-1.5 transition-all duration-400" variants={scaleIn}>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Digital-First, Youth-Led Ecosystem</h3>
              <p className="opacity-80 mb-8 leading-relaxed">Technology-powered platform connecting volunteers with opportunities through seamless digital experiences</p>
              <div className="flex gap-3 flex-wrap">
                {['Mobile App', 'Web Platform', 'AI Matching'].map(tech => (
                  <span key={tech} className="bg-white/10 px-4 py-2 rounded-full text-sm border border-white/20">{tech}</span>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          </motion.div>

          <motion.div className="lg:col-span-2 bg-white border border-brand-border rounded-3xl p-8 sm:p-12 shadow-brand hover:-translate-y-1.5 transition-all duration-400 overflow-hidden group" variants={scaleIn}>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-brand-dark">Dual Impact Design</h3>
              <p className="text-brand-medium mb-8 leading-relaxed">Every program creates value for both the community and the volunteer—ensuring sustainable, mutual growth</p>
              <div className="flex items-center gap-4">
                <div className="bg-brand-primary/10 text-brand-primary px-6 py-4 rounded-xl font-bold text-sm">Community</div>
                <div className="text-brand-light font-bold">⟷</div>
                <div className="bg-brand-accent/10 text-[#D3AF37] px-6 py-4 rounded-xl font-bold text-sm">Volunteer</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Impact Section - Reduced Spacing */}
      <section className="py-16 sm:py-20 px-4 sm:px-[5%] bg-gradient-to-b from-white to-brand-bg-light">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-10 sm:mb-12" {...fadeInUp}>
            <span className="inline-block text-[0.85rem] font-bold uppercase tracking-[0.2em] text-brand-primary mb-3">Our Impact</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark leading-tight tracking-tight mb-4">Bridging the Gap</h2>
            <p className="text-lg text-brand-medium max-w-2xl mx-auto mt-4 leading-[1.8]">
              We exist to mobilise youth energy into impactful service while ensuring that
              young people are supported, prepared, and empowered to grow.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 my-16 relative">
            <motion.div
              className="flex-1 w-full max-w-[400px]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl p-10 shadow-brand text-center relative transition-all duration-400 hover:-translate-y-1.5 hover:shadow-brand-lg">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-brand">01</span>
                <div className="w-20 h-20 bg-brand-bg-light rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary">
                  <Users size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-dark">Young People</h3>
                <p className="text-brand-medium text-[0.95rem] leading-relaxed">Seeking purpose, experience, and opportunity to make a difference</p>
              </div>
            </motion.div>

            <motion.div
              className="flex-none lg:flex-1 w-0.5 h-24 lg:w-full lg:h-[3px] bg-gradient-to-r from-brand-primary to-[#D3AF37] relative origin-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-3 rounded-full font-bold text-brand-primary shadow-brand border border-brand-border whitespace-nowrap z-10 lg:rotate-0 -rotate-90">
                <span>2Connect</span>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 w-full max-w-[400px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-10 shadow-brand text-center relative transition-all duration-400 hover:-translate-y-1.5 hover:shadow-brand-lg">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-brand">02</span>
                <div className="w-20 h-20 bg-brand-bg-light rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary">
                  <Globe size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-dark">Organizations</h3>
                <p className="text-brand-medium text-[0.95rem] leading-relaxed">In need of committed, skilled, and values-driven volunteers</p>
              </div>
            </motion.div>
          </div>

          <motion.p
            className="text-center text-xl text-brand-dark max-w-2xl mx-auto mt-16 italic font-medium opacity-80 leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Our work ensures that service creates value for communities while also
            strengthening the people who serve.
          </motion.p>
        </div>
      </section>

      {/* Team Section - Reduced Spacing */}
      <section className="py-16 sm:py-20 px-4 sm:px-[5%] bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-12">
          <motion.span className="inline-block text-[0.85rem] font-bold uppercase tracking-[0.2em] text-brand-primary mb-3" {...fadeInUp}>The People</motion.span>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-dark leading-tight tracking-tight mb-4" {...fadeInUp} transition={{ delay: 0.1 }}>
            Meet Our Team
          </motion.h2>
          <motion.p className="text-lg text-brand-medium mt-3 max-w-2xl mx-auto" {...fadeInUp} transition={{ delay: 0.2 }}>
            The passionate individuals behind the mission
          </motion.p>
        </div>

        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-brand transition-all duration-400 group hover:-translate-y-2 hover:shadow-brand-lg"
              variants={fadeInUp}
            >
              <div className="relative h-80 overflow-hidden">
                <img src={member.image} alt={member.name} className={`w-full h-full object-cover transition-transform duration-600 group-hover:scale-110 ${member.position || 'object-top'}`} />
                <div className="absolute inset-0 flex flex-col justify-center p-8 opacity-0 group-hover:opacity-95 transition-all duration-400 bg-blue-50/95">
                  <Quote size={24} className="mb-4" style={{ color: member.color }} />
                  <p className="text-base italic leading-relaxed" style={{ color: member.color }}>{member.quote}</p>
                </div>
              </div>
              <div className="p-8 relative">
                <h3 className="text-xl font-bold mb-1 text-brand-dark">{member.name}</h3>
                <p className="text-[0.875rem] font-bold text-brand-light uppercase tracking-wider">{member.role}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 transition-all" style={{ background: member.color }}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section - Reduced Spacing */}
      <section className="py-16 sm:py-20 px-4 sm:px-[5%] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-dark"></div>
          <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:40px_40px]"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">Join the Movement</h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">Whether you want to volunteer, partner with us, or lead change on your campus—there is a place for you at 2Connect.</p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/volunteer" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-primary rounded-full font-bold shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-white/90">
              <span>Join as Volunteer</span>
              <ArrowRight size={20} />
            </Link>
            <Link href="/partner" className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white rounded-full font-bold border-2 border-white/30 transition-all hover:bg-white/10 hover:border-white/50 hover:-translate-y-1">
              <span>Partner With Us</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}