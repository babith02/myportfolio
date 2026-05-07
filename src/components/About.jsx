import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaRobot, FaServer } from 'react-icons/fa'
import CodeAnimation from './CodeAnimation'

const About = () => {
  const features = [
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following industry best practices and design patterns'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Full-Stack Engineering',
      description: 'Building end-to-end web applications spanning React frontends, .NET APIs, and cloud-deployed services'
    },
    {
      icon: <FaRobot />,
      title: 'AI-Assisted Development',
      description: 'Leveraging GitHub Copilot, Cursor, Claude, and MCP tooling to accelerate development and triage workflows'
    },
    {
      icon: <FaServer />,
      title: 'Enterprise Solutions',
      description: 'Delivering production-grade licensing, activation, and onboarding services across global platforms at Gen Digital'
    }
  ]

  return (
    <section id="about" className="py-20 md:py-24 bg-dark-800/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">Get to know who I am and what I do</p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Description */}
            <motion.div
              initial={{ opacity: 0, x: -80, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ 
                delay: 0.2, 
                duration: 0.7,
                type: "spring",
                stiffness: 60,
                damping: 15
              }}
            >
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Building Intelligent Software at Scale
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                I'm an Associate Software Engineer at Gen Digital (Norton, LifeLock, Avast, Avira), where I build and maintain
                Cloud Connect licensing and activation services across Android, iOS, Windows, and Mac. With 1.5+ years of experience,
                I work end-to-end across C#/.NET Core APIs, React/TypeScript frontends, and cloud infrastructure.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                I graduated with a B.E. in Computer Science from Madras Institute of Technology, Anna University (CGPA: 8.5/10),
                where I published a research paper on deep learning and explainable AI at IEEE ICDMW 2024 in Abu Dhabi, UAE.
                My work spans enterprise licensing platforms, AI-powered developer tooling, and RAG-based intelligent assistants.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I'm passionate about AI-assisted development — building MCP-based tools, log analyzers, and intelligent assistants
                that reduce toil and accelerate engineering workflows. I won the Neo Claw Hackathon at Gen Digital (2026) and
                presented at Gen AI Expo 2026 on automated first-level AI analysis for Jira tickets.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm border border-primary-500/30">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm border border-primary-500/30">
                  AI Enthusiast
                </span>
                <span className="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm border border-primary-500/30">
                  IEEE Published Author
                </span>
                <span className="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm border border-primary-500/30">
                  Hackathon Winner
                </span>
              </div>
            </motion.div>

            {/* Right Side - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.85, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ 
                delay: 0.4, 
                duration: 0.8,
                type: "spring",
                stiffness: 50,
                damping: 15
              }}
              className="relative flex justify-center"
            >
              <img 
                src="/myportfolio/profile-picture.jpg" 
                alt="Babith Sarish S - Profile Picture"
                className="max-h-[450px] w-auto rounded-3xl shadow-2xl"
                style={{ borderRadius: '24px' }}
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>

          {/* Code Animation - Show on all devices */}
          <CodeAnimation />

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-40px", amount: 0.4 }}
                transition={{ 
                  delay: 0.05 * index, 
                  duration: 0.35,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.2 } }}
                className="card text-center group"
              >
                <div className="text-5xl text-primary-400 mb-4 inline-block transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
