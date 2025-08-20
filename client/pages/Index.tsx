import React from "react";
import Navbar from "../components/Navbar"; // Assuming Navbar component is defined elsewhere
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Database } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa"; // keep your existing icon
import { useInView } from "react-intersection-observer";
import myImage from '../src/assets/Jabez.png';

export default function App() {

  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Work section ref & inView
  const { ref: workRef, inView: workInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // only run once
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  
  return (
    
    <div className="min-h-screen bg-custom-dark">
      {/* The Navbar component is assumed to be imported from "../components/Navbar".
        Its internal structure should match the HTML navbar as previously defined.
      */}
      <Navbar /> 
      
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl mt-[100px] mb-[50px] pt-0 px-8 pb-8 space-y-16">

      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 mt-16 relative">
  {/* Animation Keyframes */}
  <style>
    {`
      @keyframes fadeInLeft {
        from { opacity: 0; transform: translateX(-50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes fadeInRight {
        from { opacity: 0; transform: translateX(50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes fadeInZoom {
        from { opacity: 0; transform: scale(0.8); }
        to { opacity: 1; transform: scale(1); }
      }
      @keyframes floatBounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
    `}
  </style>

  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* Left Column */}
      <div
        className="lg:col-span-3 text-center lg:text-left"
        style={{ animation: "fadeInLeft 1s ease-out forwards" }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Jabez
          <br />
          <span className="text-brand-600 ml-6">Selvan</span>
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-gray-600 font-light">
          Full Stack Developer
        </p>
        <div className="mt-6 flex justify-center lg:justify-start space-x-4">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 transition-colors duration-200"
          >
            Get In Touch
          </a>
          <a
            href="#work"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            View Work
          </a>
        </div>
      </div>

      {/* Middle Image */}
      <div
        className="lg:col-span-6 flex justify-center"
        style={{ animation: "fadeInZoom 1s ease-out forwards" }}
      >
        <div className="relative">
          <div className="w-96 h-96 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[560px] rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              src={myImage}
              alt="Jabez Selvan"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating icons with bounce */}
          <div
  className="absolute -top-4 right-0 w-12 h-12 sm:w-20 sm:h-20 bg-brand-600 rounded-full flex items-center justify-center shadow-lg overflow-hidden"
  style={{ animation: "floatBounce 2.5s ease-in-out infinite" }}
>
  <Code className="w-5 h-5 sm:w-8 sm:h-8 text-black" />
</div>

          <div
            className="absolute -bottom-4 -left-4 w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-lg"
            style={{ animation: "floatBounce 3s ease-in-out infinite" }}
          >
            <Palette className="w-6 h-6 text-brand-600" />
          </div>
        </div>
      </div>

      {/* Right Bio Box */}
      <div
        className="lg:col-span-3 text-center lg:text-left"
        style={{ animation: "fadeInRight 1s ease-out forwards" }}
      >
        <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Crafting Digital Experiences
          </h3>
          <p className="text-gray-600 leading-relaxed">
            I transform ideas into reality through clean code and innovative
            design. I specialize in building scalable web applications that
            users love and businesses rely on.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Database className="w-4 h-4" />
              <span>Backend</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Code className="w-4 h-4" />
              <span>Frontend</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* About Me Section */}
      {/* About Section */}
<section
  id="about"
  ref={aboutRef}
  className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8 relative"
>
  {/* Animation Keyframes */}
  <style>
    {`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeInLeft {
        from { opacity: 0; transform: translateX(-50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes fadeInRight {
        from { opacity: 0; transform: translateX(50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
      .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }
      .animate-fadeInRight { animation: fadeInRight 0.8s ease-out forwards; }
    `}
  </style>

  <div className="max-w-7xl mx-auto">
    {/* Title */}
    <div
      className={`text-center mb-16 ${
        aboutInView ? "animate-fadeInUp" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        About Me
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Passionate about creating exceptional digital experiences that make a difference
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Column */}
      <div
        className={`${aboutInView ? "animate-fadeInLeft" : "opacity-0"}`}
        style={{ animationDelay: "0.2s" }}
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          My Journey
        </h3>
        <div className="space-y-4 text-gray-600">
          <p>
  I recently started my journey in web development, gaining hands-on experience through my first client project.
</p>
<p>
  I’m passionate about learning, writing clean and maintainable code, and creating user-friendly designs.
</p>
          <p>
            When I'm not coding, you'll find me exploring new technologies...
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div
        className={`grid grid-cols-2 gap-6 ${
          aboutInView ? "animate-fadeInRight" : "opacity-0"
        }`}
        style={{ animationDelay: "0.4s" }}
      >
        {/* Skill Cards */}
        {[
          { title: "Frontend", items: ["HTML","React", "TypeScript", "Tailwind CSS", ] },
          // { title: "Backend", items: ["Node.js", "Python"] },
          { title: "Tools", items: ["GitHub","Figma", "VS Code"] },
          { title: "Focus", items: ["Performance", "Accessibility", "Design"] },
        ].map((skill, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">{skill.title}</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {skill.items.map((i, key) => <li key={key}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Work Section */}
<section
  id="work"
  ref={workRef}
  className="py-20 px-4 sm:px-6 lg:px-8 relative"
>
  {/* Inline Keyframes */}
  <style>
    {`
      @keyframes scaleFadeIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }
      .animate-scaleFadeIn {
        animation: scaleFadeIn 0.6s ease-out forwards;
      }
    `}
  </style>

  <div className="max-w-7xl mx-auto">
    {/* Title */}
    <div
      className={`text-center mb-16 ${
        workInView ? "animate-scaleFadeIn" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Featured Work
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        A showcase of projects that demonstrate my skills and passion for development
      </p>
    </div>

    {/* Project Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      title: "Jabez Selvan Portfolio",
      desc: "A full-stack e-commerce solution...",
      stack: ["React", "Node.js", "PostgreSQL"],
      gradient: "from-blue-100 to-blue-200",
      color: "text-blue-600",
      label: "Portfolio",
      demoLink: "https://your-ecommerce-demo.com",
      githubLink: "https://github.com/yourusername/ecommerce-platform",
    },
    {
      title: "Halfreel Website",
      desc: "A collaborative task management app...",
      stack: ["Next.js", "Socket.io", "Redis"],
      gradient: "from-purple-100 to-purple-200",
      color: "text-purple-600",
      label: "Halfreel",
      demoLink: "https://your-taskapp-demo.com",
      githubLink: "https://github.com/yourusername/task-app",
    },
    {
      title: "Yours Next???",
      desc: "A comprehensive website...",
      stack: [""],
      gradient: "from-green-100 to-green-200",
      color: "text-green-600",
      label: "Yours Next???",
      // demoLink: "https://your-analytics-demo.com",
      // githubLink: "https://github.com/yourusername/analytics-dashboard",
    },
  ].map((proj, i) => (
    <div
      key={i}
      className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${
        workInView ? "animate-scaleFadeIn" : "opacity-0"
      }`}
      style={{
        animationDelay: `${0.2 + i * 0.2}s`,
        animationFillMode: "forwards",
      }}
    >
      <div
        className={`h-48 bg-gradient-to-br ${proj.gradient} flex items-center justify-center`}
      >
        <div className={`${proj.color} text-4xl font-bold`}>
          {proj.label}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {proj.title}
        </h3>
        <p className="text-gray-600 mb-4">{proj.desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {proj.stack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-2">
          {/* Live Demo text link */}
          <a
            href={proj.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Live Demo
          </a>
          {/* GitHub icon link */}
          <a
            href={proj.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black text-xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
  </div>
</section>

      {/* Contact Section */}
      <section
      id="contact"
      className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we
            can bring your ideas to life.
          </p>
        </motion.div>

        {/* Contact Items */}
<motion.div
  className="space-y-8 max-w-sm mx-auto"
  initial="hidden"
  whileInView="visible"
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2 }
    }
  }}
  viewport={{ once: true }}
>
  {[
    {
      icon: <Mail className="w-6 h-6 text-brand-600" />,
      title: "Email",
      text: "jabezzzselvan@gmail.com",
      link: "mailto:jabezzzselvan@gmail.com"
    },
    {
      icon: <Linkedin className="w-6 h-6 text-brand-600" />,
      title: "LinkedIn",
      text: "linkedin.com/in/jabez-selvan/",
      link: "https://www.linkedin.com/in/jabez-selvan/"
    },
    {
      icon: <Github className="w-6 h-6 text-brand-600" />,
      title: "GitHub",
      text: "github.com/JabezSelvan",
      link: "https://github.com/JabezSelvan"
    }
  ].map((item, i) => (
    <motion.a
      key={i}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-brand-50 hover:-translate-y-1 hover:shadow-md group"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center group-hover:bg-brand-200 transition-colors duration-300">
        {item.icon}
      </div>
      <div>
        <h4 className="font-medium text-gray-900  transition-colors duration-300">
          {item.title}
        </h4>
        <p className="text-gray-600 group-hover:text-brand-600 transition-colors duration-300">
          {item.text}
        </p>
      </div>
    </motion.a>
  ))}
</motion.div>


      </div>
    </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {},
          }}
        >
          {/* Name */}
          <motion.h3
            className="text-2xl font-bold mb-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Jabez Selvan
          </motion.h3>

          {/* Role */}
          <motion.p
            className="text-brand-600 mb-6"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Full Stack Developer
          </motion.p>

          {/* Social Icons */}
<motion.div
  className="flex justify-center space-x-6"
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }}
>
  {[
    { Icon: Github, link: "https://github.com/JabezSelvan" },
    { Icon: Linkedin, link: "https://www.linkedin.com/in/jabez-selvan/" },
    { Icon: Mail, link: "mailto:jabezzzselvan@gmail.com" }
  ].map(({ Icon, link }, index) => (
    <motion.a
      key={index}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-200"
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
      }}
    >
      <Icon className="w-6 h-6" />
    </motion.a>
  ))}
</motion.div>


          {/* Bottom Line */}
          <motion.div
            className="mt-8 pt-8 border-t border-gray-800"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
            }}
          >
            <p className="text-gray-400 text-sm">Made with ❤️</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
    </div>
    </div>
  );
}

// A placeholder for the Navbar component. In a real React app, this would be a separate file like `components/Navbar.js`
// Make sure this component also uses "Jabez S." for the branding.
// function CustomNavbar() {
//   // This is a simplified version. A real Navbar might have state for mobile menu.
//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//             <div className="flex-shrink-0">
//                 <a href="#" className="text-2xl font-bold text-gray-900">Jabez <span className="text-brand-600">S.</span></a>
//             </div>
//             <div className="hidden md:flex space-x-8">
//                 <a href="#about" className="text-gray-600 hover:text-brand-600 font-medium transition-colors duration-200">About</a>
//                 <a href="#work" className="text-gray-600 hover:text-brand-600 font-medium transition-colors duration-200">Work</a>
//                 <a href="#contact" className="text-gray-600 hover:text-brand-600 font-medium transition-colors duration-200">Contact</a>
//             </div>
//             {/* Mobile Menu Button (Hamburger) - Requires JS for toggle */}
//             <button id="mobile-menu-button" className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500 rounded-md p-2">
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//                 </svg>
//             </button>
//         </div>
//         {/* Mobile Menu (Hidden by default) - Requires JS for toggle */}
//         <div id="mobile-menu" className="hidden md:hidden pb-4">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">About</a>
//                 <a href="#work" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Work</a>
//                 <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Contact</a>
//             </div>
//         </div>
//     </nav>
//   );
// }
