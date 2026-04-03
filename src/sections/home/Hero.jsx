import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, Award, Phone } from 'lucide-react'
import { INSTITUTE } from '../../utils/constants'

const badges = [
  { icon: Star,  label: '4.9★ Rated',        sub: '149+ Google Reviews' },
  { icon: Users, label: '1000+ Students',     sub: 'Since Year 2000' },
  { icon: Award, label: '24+ Years',          sub: 'Of Excellence' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cover bg-center min-h-screen lg:h-screen lg:max-h-[1000px] flex flex-col justify-center pt-20 pb-8 lg:pt-0" style={{ backgroundImage: "url('/images/heroes/hero-home.png')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />
      
      {/* Background decorations - lowered opacity to not distract from the photo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-300/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-teal-300/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="container-main relative z-10 w-full lg:pt-[70px]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full mb-5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Admissions Open 2024–25
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-[42px] xl:text-6xl font-bold text-white leading-[1.1] mb-5"
            >
              Building Strong{' '}
              <span className="relative inline-block text-white">
                <span className="relative z-10">Foundations</span>
                <span className="absolute bottom-1 -left-1 -right-1 h-3 bg-primary-500/50 -z-10 rounded-md -rotate-1"></span>
              </span>
              <br />from Class 6 to 12
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="text-base lg:text-lg text-slate-200 mb-6 lg:mb-8 max-w-lg leading-relaxed"
            >
              {INSTITUTE.subtagline} — Cuttack's most trusted coaching institute for Science stream students, offering personalized attention in both Odia and English medium.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-6 lg:mb-8"
            >
              <Link to="/contact" className="btn-primary text-sm lg:text-base px-6 py-3 lg:px-8 lg:py-4">
                Enroll Now <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-secondary text-sm lg:text-base px-6 py-3 lg:px-8 lg:py-4">
                Book Free Demo
              </Link>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.55 }}
              className="flex flex-wrap gap-4"
            >
              {badges.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-2.5 glass px-4 py-2.5 rounded-2xl">
                  <div className="w-8 h-8 rounded-xl bg-primary-50 flex items-center justify-center">
                    <Icon size={16} className="text-primary-700" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{label}</p>
                    <p className="text-xs text-slate-400">{sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – Hero card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.35 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative rounded-3xl lg:rounded-4xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4)] border border-white/50 overflow-hidden group flex flex-col w-full lg:max-h-[85vh] transition-all duration-300 hover:-translate-y-1 z-20">
              {/* 1. Image Section (Background: Lowest Layer in Card) */}
              <div className="relative h-32 sm:h-40 xl:h-[200px] w-full overflow-hidden shrink-0 z-10">
                <img 
                  src="/images/heroes/hero-about.png" 
                  alt="Classroom Environment" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/80" />
              </div>

              {/* 2. Floating "M" Badge (Middle Layer: Anchored explicitly above Both Image and Content) */}
              <div className="relative z-40 h-0 flex justify-center w-full">
                <div className="absolute top-0 -translate-y-1/2 transition-transform duration-300 group-hover:scale-105">
                   <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-cta-gradient flex items-center justify-center shadow-xl border-[3px] lg:border-4 border-white">
                     <span className="text-white font-bold text-xl lg:text-2xl font-display">M</span>
                   </div>
                </div>
              </div>

              {/* 3. Content Section (Vignette Style, scrollable if squashed) */}
              <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/95 via-white/80 to-slate-200/60 shadow-[inset_0_0_60px_rgba(0,0,0,0.05)] backdrop-blur-xl relative z-10 flex-1 flex flex-col justify-between overflow-y-auto custom-scrollbar px-6 sm:px-8 pb-6 pt-10 lg:pt-12 text-center">
                
                <div>
                  <h2 className="text-base lg:text-lg font-bold text-slate-900 font-display">Millennium Coaching Centre</h2>
                  <p className="text-[11px] lg:text-xs text-slate-600 mt-0.5 mb-5 lg:mb-6 opacity-80">Est. 2000 · Cuttack, Odisha</p>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-5 lg:mb-6">
                    {[
                      { val: '24+', label: 'Years' },
                      { val: '1000+', label: 'Students' },
                      { val: '4.9★', label: 'Rating' },
                      { val: '6–12', label: 'Classes' },
                    ].map(s => (
                      <div key={s.label} className="bg-white/80 rounded-xl lg:rounded-2xl p-2.5 lg:p-3 text-center shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-white transition-transform hover:-translate-y-0.5">
                        <p className="text-lg lg:text-xl xl:text-2xl font-bold text-primary-700 font-display leading-tight">{s.val}</p>
                        <p className="text-[9px] xl:text-[10px] uppercase font-semibold tracking-wide text-slate-500 mt-0.5">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <a href={INSTITUTE.phoneHref} className="flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white rounded-xl lg:rounded-2xl py-3 font-semibold transition-all text-xs lg:text-sm shadow-card hover:shadow-glow hover:-translate-y-0.5 shrink-0 mt-auto">
                  <Phone size={16} className="w-3.5 h-3.5 lg:w-4 lg:h-4" /> Call Now: {INSTITUTE.phone}
                </a>
              </div>
            </div>

            {/* Floating badge 1: Batch Starting (Highest Layer) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute -top-5 -left-5 glass rounded-2xl px-4 py-2.5 shadow-soft z-50 pointer-events-none"
            >
              <p className="text-xs font-bold text-slate-800">🎉 Batch Starting Soon!</p>
            </motion.div>
            
            {/* Floating badge 2: Reviews (Highest Layer) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2.5 shadow-soft z-50"
            >
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">★★★★★</span>
                <p className="text-xs font-bold text-slate-800">149+ Reviews</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
