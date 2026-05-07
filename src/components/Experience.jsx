import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Associate Software Engineer',
      company: 'Gen Digital (Norton, LifeLock, Avast, Avira)',
      location: 'Chennai, Tamil Nadu',
      period: 'July 2025 – Present',
      description: 'Building and maintaining Cloud Connect licensing services across Norton, Avast, and Avira on Android, iOS, Windows, and Mac, ensuring reliable sign-in, activation, renewal, and seat-transfer behaviour for global rollouts.',
      achievements: [
        'Led onboarding of Avast Mobile Security and Avast AntiTrack on Windows and Mac, enabling activation for end users with continuous integration support',
        'Owned onboarding and defect analysis for Gen Utilities, Gen Driver Updater, and Gen Password Manager across desktop and mobile platforms',
        'Developed an AI-based financial assistant within Norton\'s Neo browser extension surfacing real-time financial alerts leveraging user spending patterns',
        'Built a POC AI-based defect analyzer deployed as an AWS Lambda function that auto-generates first-level analysis on Jira tickets to accelerate triage',
        'Built a Sumo Logic log analyzer MCP in Cursor that programmatically fetches, filters, and reasons over logs to surface likely root causes',
        'Recovered automation after Sectigo certificate updates; led regression-failure analysis and fixes in activation flows'
      ],
      technologies: ['C#', '.NET Core', 'React', 'TypeScript', 'AWS Lambda', 'MCP', 'Sumo Logic', 'Jira', 'Azure DevOps']
    },
    {
      id: 2,
      title: 'Software Engineer Intern',
      company: 'Gen Digital (Norton, LifeLock, Avast, Avira)',
      location: 'Chennai, Tamil Nadu',
      period: 'January 2025 – July 2025',
      description: 'Onboarded onto Cloud Connect (CCT) licensing and activation flows across Norton, Avast, and partner brands, contributing to defect analysis and fixes from the early weeks of the internship.',
      achievements: [
        'Contributed to defect analysis and fixes across licensing and onboarding flows from day one',
        'Authored and stabilized automation tests and validation suites for licensing flows, improving regression coverage',
        'Adopted AI coding assistants (GitHub Copilot, Cursor, ChatGPT) early to accelerate code iteration, test generation, and debugging',
        'Built a RAG-based conversational chatbot on AWS Bedrock KB over S3-indexed Norton documents using Claude 3 Sonnet with a RAGAS evaluation framework'
      ],
      technologies: ['C#', '.NET Core', 'React', 'AWS Bedrock', 'Claude 3 Sonnet', 'RAG', 'RAGAS', 'GitHub Copilot', 'Cursor']
    }
  ]

  return (
    <section id="experience" className="py-20 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">My professional journey and achievements</p>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-600"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ 
                    delay: index * 0.15, 
                    duration: 0.7,
                    type: "spring",
                    stiffness: 60,
                    damping: 15
                  }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-dark-900 z-10 glow"></div>

                  {/* Content */}
                  <div className={index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}>
                    <div className="card group hover:border-primary-500/50 border-2 border-transparent">
                      {/* Company Badge */}
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <div className="p-3 bg-primary-500/20 rounded-lg text-primary-400 text-2xl">
                          <FaBriefcase />
                        </div>
                        <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                          <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-primary-400 font-semibold">{exp.company}</p>
                        </div>
                      </div>

                      {/* Period & Location */}
                      <div className={`flex flex-wrap gap-4 mb-4 text-gray-400 text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="flex items-center gap-2">
                          <FaCalendar className="text-primary-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-primary-400" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                        <ul className={`space-y-2 text-gray-400 text-sm ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              {index % 2 === 0 ? (
                                <>
                                  <span className="flex-1">{achievement}</span>
                                  <span className="text-primary-400 mt-1">✓</span>
                                </>
                              ) : (
                                <>
                                  <span className="text-primary-400 mt-1">✓</span>
                                  <span className="flex-1">{achievement}</span>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-xs border border-primary-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty column for spacing */}
                  <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Download Resume CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-6">Want to know more about my professional background?</p>
            <a
              href="/myportfolio/babith_s_resume.pdf"
              download="Babith_Sarish_S_Resume.pdf"
              className="btn-primary inline-flex items-center gap-2"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
