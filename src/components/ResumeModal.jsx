import React from 'react'
import { FaTimes, FaBriefcase, FaGraduationCap, FaCode, FaEnvelope, FaMapMarkerAlt, FaPhone, FaTrophy } from 'react-icons/fa'

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8 overflow-y-auto"
      onClick={onClose}
      style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}
    >
      {/* Modal card with clear overlay appearance */}
      <div
        className="relative w-full max-w-4xl bg-dark-900 rounded-xl shadow-2xl border border-primary-500/30 my-4 sm:my-8 max-h-[85vh] sm:max-h-none overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
          {/* Close Button - Always visible at top */}
          <div className="sticky top-0 z-20 flex justify-between items-center p-4 bg-dark-900 border-b border-gray-800/50">
            <h2 className="text-xl font-bold gradient-text">My Resume</h2>
            <button
              onClick={onClose}
              className="p-2 bg-dark-800 hover:bg-primary-500 rounded-full transition-colors duration-200 text-gray-400 hover:text-white shadow-lg"
              aria-label="Close resume"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Scrollable content inside modal */}
          <div className="px-4 sm:px-10 pb-10 pt-6 overflow-y-auto max-h-[calc(85vh-80px)] sm:max-h-none">
            {/* Header */}
            <div className="text-center mb-6 md:mb-8 pb-4 md:pb-6 border-b border-gray-800">
              <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-2 md:mb-3">
                Babith Sarish S
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-3 md:mb-4">Associate Software Developer</p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <FaEnvelope className="text-primary-400" />
                  babith.personal@gmail.com
                </span>
                <span className="flex items-center gap-2">
                  <FaPhone className="text-primary-400" />
                  +91 9486446388
                </span>
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-primary-400" />
                  Chennai, Tamil Nadu, India
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                <div className="w-1 h-5 md:h-6 bg-primary-500"></div>
                Professional Summary
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Passionate Computer Science Engineering graduate from MIT Campus, Anna University, with strong analytical, 
                mathematical, and technical skills. Currently working as an Associate Software Developer at Gen (formerly 
                Symantec/NortonLifeLock), building secure and scalable web applications. Proficient in modern frontend 
                frameworks (React, Angular) and backend technologies (C#, .NET, Node.js), with experience in cloud platforms 
                (Azure, AWS), machine learning, and IoT. Eager to apply knowledge to real-world projects and contribute to 
                technological advancements.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                <div className="w-1 h-5 md:h-6 bg-primary-500"></div>
                <FaBriefcase className="text-primary-400" />
                Professional Experience
              </h2>

              {/* Current Role */}
              <div className="mb-4 md:mb-6 pl-3 md:pl-4 border-l-2 border-primary-500/30">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-lg md:text-xl font-semibold text-white">Associate Software Developer</h3>
                  <span className="text-primary-400 text-xs md:text-sm">July 2025 - Present</span>
                </div>
                <p className="text-gray-300 mb-2">Gen (formerly Symantec/NortonLifeLock) • Chennai, India</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Developing and maintaining secure web applications for cybersecurity products using React, Angular, and .NET</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Building secure authentication systems using OIDC protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Implementing cloud-based solutions on Azure and AWS platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Managing certificate lifecycle with Sectigo integration</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['React', 'Angular', 'C#', '.NET', 'Azure DevOps', 'AWS', 'OIDC', 'Sectigo'].map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-primary-500/10 text-primary-400 rounded text-xs border border-primary-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Internship */}
              <div className="pl-3 md:pl-4 border-l-2 border-primary-500/30">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-lg md:text-xl font-semibold text-white">Software Development Intern</h3>
                  <span className="text-primary-400 text-xs md:text-sm">January 2025 - June 2025</span>
                </div>
                <p className="text-gray-300 mb-2">Gen (formerly Symantec/NortonLifeLock) • Chennai, India</p>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Learned enterprise-level software development practices in cybersecurity domain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Contributed to frontend development using React and Angular frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Gained experience with Azure DevOps and CI/CD pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>Worked on authentication and security features</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['React', 'Angular', 'C#', '.NET', 'Azure DevOps', 'Git'].map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-primary-500/10 text-primary-400 rounded text-xs border border-primary-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                <div className="w-1 h-5 md:h-6 bg-primary-500"></div>
                <FaGraduationCap className="text-primary-400" />
                Education
              </h2>
              <div className="pl-3 md:pl-4 border-l-2 border-primary-500/30">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-lg md:text-xl font-semibold text-white">Bachelor of Engineering in Computer Science</h3>
                  <span className="text-primary-400 text-xs md:text-sm">2021 - 2025</span>
                </div>
                <p className="text-gray-300 mb-2">Madras Institute of Technology, Anna University • Chennai</p>
                <p className="text-gray-400 text-sm">
                  Comprehensive undergraduate program in Computer Science Engineering with focus on software development, 
                  algorithms, and system design.
                </p>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                <div className="w-1 h-5 md:h-6 bg-primary-500"></div>
                <FaCode className="text-primary-400" />
                Technical Skills
              </h2>
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-primary-400 mb-2 md:mb-3">Programming</h3>
                  <div className="flex flex-wrap gap-2">
                    {['C', 'C++', 'Java', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript'].map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-dark-800 text-gray-300 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-primary-400 mb-2 md:mb-3">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    {['ReactJS', 'Angular', 'Node.js', 'Express.js', '.NET', 'C#', 'NumPy', 'TensorFlow', 'Pandas'].map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-dark-800 text-gray-300 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-primary-400 mb-2 md:mb-3">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'GitHub', 'VSCode', 'Azure DevOps', 'Azure', 'AWS', 'Linux', 'Windows', 'MySQL', 'MongoDB', 'Oracle', 'OIDC', 'Sectigo'].map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-dark-800 text-gray-300 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Accomplishments */}
            <section className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                <div className="w-1 h-5 md:h-6 bg-primary-500"></div>
                <FaTrophy className="text-primary-400" />
                Accomplishments
              </h2>
              <ul className="space-y-3">
                {[
                  'Full stack web developer intern at Bharat Intern - 2024',
                  'Finalist in National level hackathon Hack2TechSustain - 2024',
                  'Solved 300+ LeetCode problems',
                  'Runner up in web development contest SpiderBoy - 2023',
                  'Junior level typewriter with distinction and first class - 2018'
                ].map((accomplishment, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="text-primary-400 mt-1">🏆</span>
                    <span>{accomplishment}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Key Strengths */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                <div className="w-1 h-5 md:h-6 bg-primary-500"></div>
                Key Strengths
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Full-stack web development',
                  'Cybersecurity best practices',
                  'Cloud architecture & deployment',
                  'Authentication & authorization',
                  'Responsive UI/UX design',
                  'CI/CD pipeline management',
                  'Problem-solving & debugging',
                  'Team collaboration'
                ].map((strength, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-400">
                    <span className="text-primary-400">✓</span>
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
      </div>
    </div>
  )
}

export default ResumeModal

