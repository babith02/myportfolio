import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaEye, FaHeartbeat, FaBaby, FaHome, FaRobot, FaSearch, FaBrain, FaChartBar } from 'react-icons/fa'
import { SiTensorflow, SiMongodb, SiExpress, SiAwslambda } from 'react-icons/si'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Sumo Logic Log Analyzer MCP',
      description: 'Built a Model Context Protocol (MCP) server in Cursor that programmatically fetches, filters, and reasons over Sumo Logic logs to surface likely root causes. Significantly reduced manual triage effort for production incidents.',
      image: <FaSearch className="text-8xl text-cyan-400" />,
      category: 'ai',
      date: 'Jan 2026 – Present',
      technologies: [
        { icon: <FaRobot />, name: 'MCP', color: 'text-purple-400' },
        { icon: <FaChartBar />, name: 'Sumo Logic', color: 'text-cyan-400' },
        { icon: <FaPython />, name: 'Node.js', color: 'text-green-400' }
      ],
      github: 'https://github.com/babith02',
      demo: null,
      featured: true
    },
    {
      id: 2,
      title: 'AI Financial Assistant – FinLock',
      description: 'Developed an AI-based financial assistant within Norton\'s Neo browser extension that surfaces real-time financial alerts before payments, leveraging the user\'s spending patterns and live financial data via OpenClaw (Claude on Bedrock).',
      image: <FaBrain className="text-8xl text-green-400" />,
      category: 'ai',
      date: 'Nov 2025 – Jan 2026',
      technologies: [
        { icon: <FaRobot />, name: 'Claude', color: 'text-orange-300' },
        { icon: <FaReact />, name: 'React', color: 'text-cyan-400' },
        { icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-500' }
      ],
      github: 'https://github.com/babith02',
      demo: null,
      featured: true
    },
    {
      id: 3,
      title: 'AI Defect Analyzer – Jira Auto-Triage',
      description: 'POC AI-based defect analyzer deployed as an AWS Lambda function that auto-generates first-level analysis on newly created Jira tickets. Presented at Gen AI Expo 2026 as a productivity accelerator for triage workflows.',
      image: <FaRobot className="text-8xl text-yellow-400" />,
      category: 'ai',
      date: 'Oct 2025 – Nov 2025',
      technologies: [
        { icon: <SiAwslambda />, name: 'AWS Lambda', color: 'text-orange-400' },
        { icon: <FaRobot />, name: 'Claude', color: 'text-orange-300' },
        { icon: <FaPython />, name: 'Python', color: 'text-blue-400' }
      ],
      github: 'https://github.com/babith02',
      demo: null,
      featured: true
    },
    {
      id: 4,
      title: 'RAG Chatbot – AWS Bedrock + Claude',
      description: 'Built a RAG-based conversational chatbot on AWS using Bedrock Knowledge Base over S3-indexed Norton documents and Claude 3 Sonnet. Designed a RAGAS evaluation framework (Context Precision/Recall, Faithfulness, Factual Correctness, Semantic Similarity) over multi-turn test sets.',
      image: <FaChartBar className="text-8xl text-pink-400" />,
      category: 'ai',
      date: 'Feb 2025 – Jul 2025',
      technologies: [
        { icon: <FaRobot />, name: 'AWS Bedrock', color: 'text-orange-400' },
        { icon: <FaRobot />, name: 'Claude 3 Sonnet', color: 'text-orange-300' },
        { icon: <FaPython />, name: 'Python', color: 'text-blue-400' }
      ],
      github: 'https://github.com/babith02',
      demo: null,
      featured: true
    },
    {
      id: 5,
      title: 'Vision Aid: Deep Learning Object Detection',
      description: 'Developed an object detection system using YOLOv5 to aid visually impaired navigation, integrating semantic segmentation, BiFPN and CBAM attention for accuracy. Trained on combined COCO and custom datasets.',
      image: <FaEye className="text-8xl text-primary-400" />,
      category: 'ml',
      date: 'Jan 2024 – Apr 2024',
      technologies: [
        { icon: <FaPython />, name: 'Python', color: 'text-blue-400' },
        { icon: <SiTensorflow />, name: 'YOLOv5', color: 'text-orange-400' }
      ],
      github: 'https://github.com/babith02',
      demo: null,
      featured: false
    },
    {
      id: 6,
      title: 'CardioNetFusion: CVD Detection System',
      description: 'An integrated system for cardiovascular disease detection using deep learning and explainable AI. Published as a research paper at IEEE ICDMW 2024, Abu Dhabi, UAE, co-authored as a Research Fellow at NGN Lab, MIT Campus, Anna University.',
      image: <FaHeartbeat className="text-8xl text-red-400" />,
      category: 'ml',
      date: 'Jan 2024 – Present',
      technologies: [
        { icon: <FaPython />, name: 'Python', color: 'text-blue-400' },
        { icon: <SiTensorflow />, name: 'Deep Learning', color: 'text-orange-400' }
      ],
      github: 'https://ieeexplore.ieee.org/document/10917492',
      demo: null,
      featured: false
    },
    {
      id: 7,
      title: 'Maternal & Child Care System',
      description: 'A comprehensive web-based healthcare and education platform for mothers and children up to age 10. Features include prenatal care, nutrition tracking, immunizations, education resources, financial aid, and psychological support.',
      image: <FaBaby className="text-8xl text-pink-400" />,
      category: 'fullstack',
      date: 'Jul 2023 – Nov 2023',
      technologies: [
        { icon: <FaReact />, name: 'ReactJS', color: 'text-cyan-400' },
        { icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-500' },
        { icon: <SiExpress />, name: 'Express', color: 'text-gray-400' },
        { icon: <SiMongodb />, name: 'MongoDB', color: 'text-green-400' }
      ],
      github: 'https://github.com/babith02',
      demo: null,
      featured: false
    },
    {
      id: 8,
      title: 'IoT Home Automation System',
      description: 'Smart home automation system using NodeMCU IoT platform. Enables remote control of home appliances and devices via mobile app or web interface connected to a Wi-Fi network.',
      image: <FaHome className="text-8xl text-blue-400" />,
      category: 'iot',
      date: 'Jul 2022 – Nov 2022',
      technologies: [
        { icon: <FaNodeJs />, name: 'NodeMCU', color: 'text-green-500' }
      ],
      github: 'https://github.com/babith02',
      demo: null,
      featured: false
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Tools' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'iot', label: 'IoT' }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 md:py-24 bg-dark-800/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">AI-powered tools, research, and engineering projects</p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg scale-105'
                    : 'bg-dark-800 text-gray-400 hover:bg-dark-700 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.94, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.2 }}
                transition={{ 
                  delay: index * 0.08, 
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="card group relative overflow-hidden"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs px-3 py-1 rounded-full z-10 font-semibold">
                    Featured
                  </div>
                )}

                {/* Project Image/Icon */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-primary-700/20 rounded-lg mb-6 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div>{project.image}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60"></div>
                </div>
                
                {/* Project Date */}
                {project.date && (
                  <p className="text-sm text-primary-400 mb-2 font-semibold">{project.date}</p>
                )}

                {/* Project Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className={`flex items-center gap-2 text-sm ${tech.color}`}
                      title={tech.name}
                    >
                      <span className="text-xl">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                {project.github && (
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors text-sm font-medium text-gray-300 hover:text-white"
                    >
                      <FaGithub /> View Project
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors text-sm font-medium"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                )}

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-primary-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 text-lg mb-6">
              Want to see more? Check out my GitHub for additional projects and contributions.
            </p>
            <a
              href="https://github.com/babith02"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaGithub className="text-xl" /> View GitHub Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
