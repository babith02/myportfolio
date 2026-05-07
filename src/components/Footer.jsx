import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/babith02', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/babith-sarish-s/', label: 'LinkedIn' },
    { icon: <FaEnvelope />, url: 'mailto:babith.personal@gmail.com', label: 'Email' }
  ]

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Babith Sarish S</h3>
            <p className="text-gray-400 mb-4">
              Associate Software Developer at Gen, building secure and scalable web applications with modern technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-125"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-300">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-300">Get In Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:babith.personal@gmail.com" className="hover:text-primary-400 transition-colors">
                  babith.personal@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919486446388" className="hover:text-primary-400 transition-colors">
                  +91 9486446388
                </a>
              </li>
              <li>Chennai, Tamil Nadu, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Babith Sarish S. Made with{' '}
            <FaHeart className="inline text-red-500 animate-pulse" /> using React & Tailwind CSS
          </p>
          <button
            onClick={scrollToTop}
            className="px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            aria-label="Scroll to top"
          >
            <FaArrowUp /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

