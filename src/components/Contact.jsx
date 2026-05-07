import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const mailtoLink = `mailto:babith.personal@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Show success message
    setFormStatus('success')
    setTimeout(() => {
      setFormStatus('')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'babith.personal@gmail.com',
      link: 'mailto:babith.personal@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 9486446388',
      link: 'tel:+919486446388'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      link: null
    }
  ]

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/babith02', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/babith-sarish-s/', label: 'LinkedIn' },
    { icon: <SiLeetcode />, url: 'https://leetcode.com/u/babith/', label: 'LeetCode' }
  ]

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">Have a question or want to work together? Reach out!</p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -80, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: 0.2, 
                duration: 0.7,
                type: "spring",
                stiffness: 70
              }}
            >
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Let's Connect!
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always open to discussing new projects, opportunities, or collaborations. 
                Feel free to reach out through any of the following channels or send me a message using the form!
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30, scale: 0.96 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: false, margin: "-30px", amount: 0.5 }}
                    transition={{ 
                      delay: 0.2 + index * 0.08, 
                      duration: 0.35,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    whileHover={{ scale: 1.03, x: 5 }}
                    className="flex items-center gap-4 p-4 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors"
                  >
                    <div className="text-3xl text-primary-400">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-300 hover:text-primary-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-gray-400 mb-4">Follow me on:</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl text-gray-400 hover:text-primary-400 transition-all duration-300 hover:scale-125"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: 0.4, 
                duration: 0.7,
                type: "spring",
                stiffness: 70
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-gray-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-gray-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-gray-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-gray-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>

                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center"
                  >
                    Opening your email client... You can now send the message!
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

