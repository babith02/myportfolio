import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-32">
      <div className="section-container text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated Heading */}
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8 text-shadow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            Hi, I'm <motion.span 
              className="gradient-text animate-gradient-x inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.6, 
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              Babith Sarish S
            </motion.span>
          </motion.h1>
          {/* Animated Title */}
          <motion.p
            className="text-3xl md:text-4xl mb-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          >
            Associate Software Engineer @ Gen Digital
          </motion.p>
          
          {/* Animated Description */}
          <motion.p
            className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          >
            Building enterprise licensing platforms, AI-powered developer tools, and intelligent assistants with C#, .NET, React, and cloud technologies
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
          >
            <button 
              onClick={() => scrollToSection('projects')} 
              className="btn-primary shimmer-effect group"
            >
              <span className="relative z-10">View My Work</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="btn-secondary group"
            >
              <span className="relative z-10">Get In Touch</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-8 mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            {[
              { icon: FaGithub, href: "https://github.com/babith02", color: "hover:text-accent-purple" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/babith-sarish-s/", color: "hover:text-accent-blue" },
              { icon: SiLeetcode, href: "https://leetcode.com/u/babith/", color: "hover:text-yellow-500" },
              { icon: FaEnvelope, href: "mailto:babith.personal@gmail.com", color: "hover:text-accent-pink" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className={`text-4xl text-gray-400 ${social.color} transition-all duration-500 hover:scale-125 relative group`}
                whileHover={{ y: -5 }}
              >
                <social.icon />
                <span className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-r from-accent-purple to-accent-pink"></span>
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="inline-block cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { delay: 2.4, duration: 0.5 },
              y: { repeat: Infinity, duration: 2, delay: 2.4 }
            }}
            onClick={() => scrollToSection('about')}
          >
            <FaArrowDown className="text-3xl text-accent-purple" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements - GitHub style - Desktop only */}
      <div className="hidden md:block absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-accent-purple to-transparent rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="hidden md:block absolute top-1/3 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-accent-pink to-transparent rounded-full filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="hidden md:block absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-tr from-accent-blue to-transparent rounded-full filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating particles - Desktop only */}
      <div className="hidden md:block absolute top-20 left-1/4 w-2 h-2 bg-accent-purple rounded-full animate-float"></div>
      <div className="hidden md:block absolute top-40 right-1/3 w-3 h-3 bg-accent-pink rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="hidden md:block absolute bottom-40 left-1/3 w-2 h-2 bg-accent-cyan rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}

export default Hero

