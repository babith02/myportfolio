import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendar, FaUniversity, FaStar, FaCertificate } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Madras Institute of Technology, Anna University',
      location: 'Chennai, Tamil Nadu',
      period: '2021 - 2025',
      gpa: '',
      description: 'Completed comprehensive undergraduate program in Computer Science Engineering from one of India\'s premier technical institutions, gaining strong foundation in software development, algorithms, and system design.',
      coursework: [
        'Data Structures & Algorithms',
        'Web Development',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
        'Software Engineering',
        'Cloud Computing'
      ],
      achievements: [
        'Secured internship at Gen (Symantec/NortonLifeLock)',
        'Strong foundation in full-stack development',
        'Active participant in coding competitions'
      ]
    }
  ]

  const certifications = [
    // Add your certifications here
  ]

  return (
    <section id="education" className="py-20 md:py-24 bg-dark-800/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">My academic background and professional credentials</p>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
              <FaGraduationCap className="text-primary-400" />
              Academic Education
            </h3>

            <div className="grid md:grid-cols-1 max-w-3xl mx-auto gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, margin: "-50px", amount: 0.2 }}
                  transition={{ 
                    delay: index * 0.15, 
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card group hover:border-primary-500/50 border-2 border-transparent relative overflow-hidden"
                >
                  {/* Decorative Element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full filter blur-3xl group-hover:bg-primary-500/20 transition-all"></div>

                  {/* Header */}
                  <div className="relative mb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-4 bg-primary-500/20 rounded-xl text-primary-400 text-3xl">
                        <FaUniversity />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-primary-400 font-semibold mb-2">{edu.institution}</p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                          <span className="flex items-center gap-2">
                            <FaCalendar className="text-primary-400" />
                            {edu.period}
                          </span>
                          {edu.gpa && (
                            <span className="flex items-center gap-2">
                              <FaStar className="text-yellow-400" />
                              GPA: {edu.gpa}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Coursework */}
                  <div className="mb-4">
                    <h5 className="text-white font-semibold mb-3">Key Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-dark-700 text-gray-300 rounded-lg text-xs hover:bg-dark-600 transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h5 className="text-white font-semibold mb-3">Achievements:</h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="text-primary-400 mt-1">🏆</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {certifications.length > 0 && (
            <div>
              <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
                <FaCertificate className="text-primary-400" />
                Professional Certifications
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: false, margin: "-40px", amount: 0.4 }}
                    transition={{ 
                      delay: index * 0.08, 
                      duration: 0.35,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    whileHover={{ scale: 1.05, rotate: 3, transition: { duration: 0.2 } }}
                    className="card text-center group cursor-pointer relative overflow-hidden"
                  >
                    {/* Icon */}
                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {cert.title}
                    </h4>

                    {/* Issuer */}
                    <p className="text-gray-400 text-sm mb-3">{cert.issuer}</p>

                    {/* Date Badge */}
                    <div className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs border border-primary-500/30">
                      {cert.date}
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 text-lg">
              Continuously learning and updating skills to stay current with industry trends
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

