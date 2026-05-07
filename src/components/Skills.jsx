import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaDatabase, FaAws, FaAngular, FaPython,
  FaGithub, FaCode, FaLinux, FaRobot
} from 'react-icons/fa'
import { 
  SiMongodb, SiAzuredevops, SiMicrosoftazure, SiCsharp, SiDotnet, SiExpress, SiTypescript
} from 'react-icons/si'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const skillCategories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'tools', label: 'Tools & Cloud' }
  ]

  const skills = [
    { name: 'React', icon: <FaReact />, category: 'frontend', color: 'text-cyan-400' },
    { name: 'Angular', icon: <FaAngular />, category: 'frontend', color: 'text-red-500' },
    { name: 'JavaScript', icon: <FaJs />, category: 'frontend', color: 'text-yellow-400' },
    { name: 'TypeScript', icon: <SiTypescript />, category: 'frontend', color: 'text-blue-400' },
    { name: 'HTML5', icon: <FaHtml5 />, category: 'frontend', color: 'text-orange-500' },
    { name: 'CSS3', icon: <FaCss3Alt />, category: 'frontend', color: 'text-blue-500' },

    { name: 'C#', icon: <SiCsharp />, category: 'backend', color: 'text-purple-500' },
    { name: '.NET Core', icon: <SiDotnet />, category: 'backend', color: 'text-purple-400' },
    { name: 'Node.js', icon: <FaNodeJs />, category: 'backend', color: 'text-green-500' },
    { name: 'Express', icon: <SiExpress />, category: 'backend', color: 'text-gray-400' },
    { name: 'Python', icon: <FaPython />, category: 'backend', color: 'text-blue-400' },
    { name: 'Java', icon: <FaCode />, category: 'backend', color: 'text-red-500' },
    { name: 'SQL', icon: <FaDatabase />, category: 'backend', color: 'text-gray-300' },
    { name: 'MongoDB', icon: <SiMongodb />, category: 'backend', color: 'text-green-400' },

    { name: 'GitHub Copilot', icon: <FaGithub />, category: 'ai', color: 'text-gray-300' },
    { name: 'Cursor', icon: <FaCode />, category: 'ai', color: 'text-blue-300' },
    { name: 'Claude', icon: <FaRobot />, category: 'ai', color: 'text-orange-300' },
    { name: 'ChatGPT', icon: <FaRobot />, category: 'ai', color: 'text-green-400' },
    { name: 'MCP Tooling', icon: <FaCode />, category: 'ai', color: 'text-accent-purple' },
    { name: 'RAG Pipelines', icon: <FaDatabase />, category: 'ai', color: 'text-pink-400' },
    { name: 'AWS Bedrock', icon: <FaAws />, category: 'ai', color: 'text-orange-400' },

    { name: 'Git', icon: <FaGitAlt />, category: 'tools', color: 'text-orange-600' },
    { name: 'GitHub', icon: <FaGithub />, category: 'tools', color: 'text-gray-300' },
    { name: 'Azure DevOps', icon: <SiAzuredevops />, category: 'tools', color: 'text-blue-500' },
    { name: 'Azure', icon: <SiMicrosoftazure />, category: 'tools', color: 'text-blue-400' },
    { name: 'AWS', icon: <FaAws />, category: 'tools', color: 'text-orange-400' },
    { name: 'Sumo Logic', icon: <FaCode />, category: 'tools', color: 'text-cyan-400' },
    { name: 'Jira', icon: <FaCode />, category: 'tools', color: 'text-blue-500' },
    { name: 'Linux', icon: <FaLinux />, category: 'tools', color: 'text-yellow-500' }
  ]

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="py-20 md:py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I work with</p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg scale-105'
                    : 'bg-dark-800 text-gray-400 hover:bg-dark-700 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px", amount: 0.3 }}
                transition={{ 
                  delay: index * 0.02, 
                  duration: 0.3,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="card text-center cursor-pointer group relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/0 via-accent-purple/10 to-accent-pink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Skill Icon */}
                <div className={`text-6xl mb-4 ${skill.color} transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative z-10`}>
                  {skill.icon}
                </div>
              
                {/* Skill Name */}
                <h4 className="text-lg font-semibold relative z-10">{skill.name}</h4>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 text-lg">
              Always learning and expanding my skill set. Currently exploring{' '}
              <span className="text-primary-400 font-semibold">MCP tooling</span> and{' '}
              <span className="text-primary-400 font-semibold">AI-assisted developer productivity</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
