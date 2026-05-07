import React from 'react'
import { motion } from 'framer-motion'

const GitHubBackground = () => {
  // Check if mobile device
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
      {/* Grid pattern - Visible on all devices, mobile gets lighter version */}
      <div className={`absolute inset-0 ${isMobile ? 'bg-dark-900' : 'grid-background'}`}></div>

      {/* Animated gradient orbs - Now visible on all devices */}
      <div className="orb w-96 h-96 bg-gradient-to-br from-accent-purple to-transparent top-0 left-1/4" 
           style={{ animationDelay: '0s' }}></div>
      <div className="orb w-[500px] h-[500px] bg-gradient-to-br from-accent-pink to-transparent top-1/4 right-1/4" 
           style={{ animationDelay: '5s' }}></div>
      <div className="orb w-[400px] h-[400px] bg-gradient-to-br from-accent-blue to-transparent bottom-1/4 left-1/3" 
           style={{ animationDelay: '10s' }}></div>
      <div className="orb w-80 h-80 bg-gradient-to-br from-accent-cyan to-transparent bottom-0 right-1/3" 
           style={{ animationDelay: '15s' }}></div>

      {/* Mobile: Simple static gradient overlay + centered glow */}
      {isMobile && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/5 via-transparent to-accent-blue/5"></div>
          {/* Centered fixed glow - visible across all pages on mobile */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent-purple/20 via-accent-pink/10 to-transparent rounded-full filter blur-3xl opacity-60"></div>
        </>
      )}

      {/* Floating dots/particles - Desktop only, completely disabled on mobile */}
      {!isMobile && Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent-purple rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating rounded orbs - Left side - Desktop only */}
      {!isMobile && Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`left-orb-${i}`}
          className="absolute rounded-full filter blur-2xl"
          style={{
            width: `${80 + Math.random() * 120}px`,
            height: `${80 + Math.random() * 120}px`,
            left: `${Math.random() * 20}%`,
            top: `${10 + i * 15}%`,
            background: `radial-gradient(circle, ${
              ['rgba(139, 92, 246, 0.3)', 'rgba(236, 72, 153, 0.3)', 'rgba(6, 182, 212, 0.3)'][i % 3]
            }, transparent)`,
          }}
          animate={{
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 60 - 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating rounded orbs - Right side - Desktop only */}
      {!isMobile && Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`right-orb-${i}`}
          className="absolute rounded-full filter blur-2xl"
          style={{
            width: `${80 + Math.random() * 120}px`,
            height: `${80 + Math.random() * 120}px`,
            right: `${Math.random() * 20}%`,
            top: `${15 + i * 15}%`,
            background: `radial-gradient(circle, ${
              ['rgba(236, 72, 153, 0.3)', 'rgba(139, 92, 246, 0.3)', 'rgba(6, 182, 212, 0.3)'][i % 3]
            }, transparent)`,
          }}
          animate={{
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 60 - 30, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 7 + Math.random() * 7,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Medium floating orbs - Scattered - Desktop only */}
      {!isMobile && Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`scattered-orb-${i}`}
          className="absolute rounded-full filter blur-xl"
          style={{
            width: `${50 + Math.random() * 80}px`,
            height: `${50 + Math.random() * 80}px`,
            left: `${20 + Math.random() * 60}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              ['rgba(139, 92, 246, 0.25)', 'rgba(236, 72, 153, 0.25)', 'rgba(6, 182, 212, 0.25)', 'rgba(124, 58, 237, 0.25)'][i % 4]
            }, transparent)`,
          }}
          animate={{
            x: [0, Math.random() * 80 - 40, 0],
            y: [0, Math.random() * 80 - 40, 0],
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}


      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark-900/50 to-dark-900"></div>

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-dark-900 via-dark-900/50 to-transparent"></div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent"></div>

      {/* Corner accent effects - Desktop only */}
      {!isMobile && (
        <>
          <div className="absolute top-0 left-0 w-96 h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-transparent rounded-full filter blur-3xl animate-pulse-slow"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-96 h-96">
            <div className="absolute inset-0 bg-gradient-to-tl from-accent-pink/20 to-transparent rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </>
      )}
    </div>
  )
}

export default GitHubBackground

