import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const CodeAnimation = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px", amount: 0.3 })
  const [displayedCode, setDisplayedCode] = useState('')
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  
  // Faster typing on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const typingSpeed = isMobile ? 15 : 30 // Faster on mobile

  const fullCode = `import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/projects');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  if (loading) return <Spinner />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="dashboard-container"
    >
      <h1 className="title">My Projects</h1>
      <div className="grid">
        {data.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.name}
            description={project.desc}
            tech={project.technologies}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Dashboard;`

  useEffect(() => {
    if (isInView && !isTyping) {
      setDisplayedCode('')
      setCurrentCharIndex(0)
      setIsTyping(true)
    }
    if (!isInView && isTyping) {
      setIsTyping(false)
    }
  }, [isInView])

  useEffect(() => {
    if (isTyping && currentCharIndex < fullCode.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(fullCode.slice(0, currentCharIndex + 1))
        setCurrentCharIndex(prev => prev + 1)
      }, typingSpeed) // Faster on mobile (15ms), normal on desktop (30ms)
      return () => clearTimeout(timer)
    }
  }, [isTyping, currentCharIndex, fullCode, typingSpeed])

  return (
    <div ref={ref} className="w-full py-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl mx-auto"
      >
        {/* Animated Glow Effect */}
        <div className="absolute -inset-[2px] rounded-xl opacity-75 blur-lg">
          <motion.div
            className="absolute inset-0 rounded-xl"
            style={{
              background: 'linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4, #8b5cf6)',
              backgroundSize: '200% 100%'
            }}
            animate={{
              backgroundPosition: ['0% 0%', '200% 0%'],
            }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </div>

        {/* Glass Layer with Flowing Border */}
        <div className="absolute -inset-[1px] rounded-xl overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)',
              backgroundSize: '200% 100%'
            }}
            animate={{
              backgroundPosition: ['0% 0%', '200% 0%'],
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </div>

        {/* VS Code Window */}
        <div className="relative bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 backdrop-blur-sm">
          {/* Title Bar */}
          <div className="bg-[#323233] px-3 py-2 flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="ml-3 text-gray-400 text-xs">Dashboard.jsx</span>
            </div>
            <div className="text-gray-500 text-[10px]">Visual Studio Code</div>
          </div>

          {/* Tab Bar */}
          <div className="bg-[#252526] border-b border-gray-800">
            <div className="flex">
              <div className="px-3 py-1.5 bg-[#1e1e1e] text-gray-300 text-xs border-r border-gray-800 flex items-center gap-2">
                <span className="text-blue-400 text-sm">⚛</span>
                Dashboard.jsx
                <span className="ml-2 text-gray-600">×</span>
              </div>
            </div>
          </div>

          {/* Code Editor */}
          <div className="p-4 font-mono text-xs overflow-hidden" style={{ minHeight: '360px', maxHeight: '400px' }}>
            <div className="flex">
              {/* Line Numbers */}
              <div className="text-gray-600 pr-3 select-none">
                {displayedCode.split('\n').map((_, i) => (
                  <div key={i} className="leading-5">{i + 1}</div>
                ))}
              </div>

              {/* Code Content */}
              <div className="flex-1 overflow-y-auto" style={{ maxHeight: '340px' }}>
                {displayedCode.split('\n').map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className="leading-5"
                  >
                    <SyntaxHighlight line={line} />
                  </motion.div>
                ))}
                {/* Blinking Cursor */}
                {currentCharIndex < fullCode.length ? (
                  <motion.span
                    className="inline-block w-1.5 h-4 bg-white ml-0.5"
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8, times: [0, 0.5, 0.5, 1] }}
                  />
                ) : (
                  <motion.span
                    className="inline-block w-1.5 h-4 bg-white ml-0.5"
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="bg-[#007acc] px-3 py-1 flex items-center justify-between text-[10px] text-white">
            <div className="flex items-center gap-4">
              <span>⚡ Ln {displayedCode.split('\n').length}, Col {displayedCode.split('\n').pop()?.length || 0}</span>
              <span>UTF-8</span>
              <span>JavaScript React</span>
            </div>
            <div className="flex items-center gap-4">
              {currentCharIndex >= fullCode.length ? (
                <>
                  <span>Prettier ✓</span>
                  <span>ESLint ✓</span>
                </>
              ) : (
                <span className="flex items-center gap-1">
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    ⚡
                  </motion.span>
                  Typing...
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Floating decorative elements with enhanced glow */}
        <motion.div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full filter blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent)'
          }}
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full filter blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4), transparent)'
          }}
          animate={{ 
            scale: [1, 1.4, 1], 
            opacity: [0.3, 0.5, 0.3],
            x: [0, -20, 0],
            y: [0, 20, 0]
          }}
          transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
        />
        
        {/* Additional corner glows */}
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 rounded-full filter blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent)'
          }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  )
}

// Syntax Highlighting Component
const SyntaxHighlight = ({ line }) => {
  if (!line) return <span>&nbsp;</span>
  
  let highlighted = line
  
  // 1. Highlight strings first (green/orange)
  highlighted = highlighted.replace(
    /(["'`])(.*?)\1/g,
    '<span class="text-[#ce9178]">$1$2$1</span>'
  )
  
  // 2. Highlight keywords (blue)
  const keywords = [
    'import', 'from', 'const', 'return', 'export', 'default',
    'useState', 'useEffect', 'async', 'await', 'try', 'catch',
    'if', 'else', 'new'
  ]
  keywords.forEach(keyword => {
    highlighted = highlighted.replace(
      new RegExp(`\\b(${keyword})\\b`, 'g'),
      '<span class="text-[#569cd6]">$1</span>'
    )
  })
  
  // 3. Highlight component/function names (yellow)
  highlighted = highlighted.replace(
    /\b(Dashboard|React|motion|axios|data|setData|loading|setLoading|fetchData|response|error|project|Spinner|ProjectCard)\b/g,
    '<span class="text-[#dcdcaa]">$1</span>'
  )
  
  // 4. Highlight JSX tags (teal)
  highlighted = highlighted.replace(
    /&lt;(\/?)(div|h1|motion\.div|Spinner|ProjectCard)\b/g,
    '&lt;$1<span class="text-[#4ec9b0]">$2</span>'
  )
  
  // 5. Highlight JSX attributes (light blue)
  highlighted = highlighted.replace(
    /\b(className|key|initial|animate|transition|duration|opacity|title|description|tech)\b/g,
    '<span class="text-[#9cdcfe]">$1</span>'
  )
  
  // 6. Highlight methods (yellow)
  highlighted = highlighted.replace(
    /\.(get|map|log|error)\(/g,
    '.<span class="text-[#dcdcaa]">$1</span>('
  )
  
  // 7. Highlight numbers (light green)
  highlighted = highlighted.replace(
    /\b(\d+\.?\d*)\b/g,
    '<span class="text-[#b5cea8]">$1</span>'
  )
  
  // 8. Highlight console (yellow-green)
  highlighted = highlighted.replace(
    /\b(console)\b/g,
    '<span class="text-[#4ec9b0]">$1</span>'
  )
  
  return (
    <span 
      className="text-gray-300"
      dangerouslySetInnerHTML={{ __html: highlighted }}
    />
  )
}

export default CodeAnimation

